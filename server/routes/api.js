const express = require('express')
const router = express.Router()

const bcrypt = require('bcrypt')
const { Client } = require('pg')

const client = new Client({
    user: 'postgres',
    host: 'localhost',
    password: 'admin',
    database: 'Dianalysis'
})

client.connect()

class UserData {
    constructor() {
        this.createdAt = new Date()
        this.updatedAt = new Date()
        this.history = []
    }
}

/**
 * Cette route inscrit un utilisateur.
 */
router.post('/register', async(req, res) => {
    const username = req.body.username.toLowerCase();
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    const firstname = req.body.firstname.toLowerCase();
    const lastname = req.body.lastname.toUpperCase();
    const phone = req.body.phone;

    const sqlUsername = "SELECT * FROM users WHERE username=$1"
    const checkUsername = await client.query({
        text: sqlUsername,
        values: [username]
    })

    if (checkUsername.rowCount !== 0) {
        res.status(400).json({ message: 'username already taken.' })
        return
    }

    const sqlEmail = "SELECT * FROM users WHERE email=$1"
    const checkEmail = await client.query({
        text: sqlEmail,
        values: [email]
    })

    if (checkEmail.rowCount !== 0) {
        res.status(401).json({ message: 'email already taken.' })
        return
    }

    const hash = await bcrypt.hash(password, 10)
    const addUserSql = 'INSERT INTO users (username, email, password, firstname, lastname, phone) VALUES ($1, $2, $3, $4, $5, $6)'
    await client.query({
        text: addUserSql,
        values: [username, email, hash, firstname, lastname, phone]
    })

    const userData = await client.query({
        text: sqlUsername,
        values: [username]
    })
    req.session.userId = userData.rows[0].id
    req.session.userdata = new UserData()
        // on envoie l'id du user ajouté à l'utilisateur
    res.json(userData.rows[0].id)
})

router.post('/updateUser', async(req, res) => {
    const username = req.body.username.toLowerCase();
    const email = req.body.email.toLowerCase();
    const password = req.body.password;
    const firstname = req.body.firstname.toLowerCase();
    const lastname = req.body.lastname.toUpperCase();
    const phone = req.body.phone;

    if (username != null && username != "") {
        const sqlUsername = "SELECT * FROM users WHERE username=$1"
        const checkUsername = await client.query({
            text: sqlUsername,
            values: [username]
        })

        if (checkUsername.rowCount !== 0) {
            res.status(400).json({ message: 'username already taken.' })
            return
        }

        const sqlUpdateUsername = "UPDATE users set username = $1 WHERE id = $2"
        await client.query({
            text: sqlUpdateUsername,
            values: [username, req.session.userId]
        })
    }

    if (email != null && email != "") {
        const sqlEmail = "SELECT * FROM users WHERE email=$1"
        const checkEmail = await client.query({
            text: sqlEmail,
            values: [email]
        })

        if (checkEmail.rowCount !== 0) {
            res.status(401).json({ message: 'email already taken.' })
            return
        }

        const sqlUpdateUsername = "UPDATE users set email = $1 WHERE id = $2"
        await client.query({
            text: sqlUpdateUsername,
            values: [email, req.session.userId]
        })
    }

    if (password != null && password != "") {
        const hash = await bcrypt.hash(password, 10)
        const sqlUpdatePassword = "UPDATE users SET password = $1 WHERE id = $2"
        await client.query({
            text: sqlUpdatePassword,
            values: [hash, req.session.userId]
        })
    }

    if (firstname != null && firstname != "") {
        const sqlUpdateFirstname = "UPDATE users SET firstname = $1 WHERE id = $2"
        await client.query({
            text: sqlUpdateFirstname,
            values: [firstname, req.session.userId]
        })
    }

    if (lastname != null && lastname != "") {
        const sqlUpdateLastname = "UPDATE users SET lastname = $1 WHERE id = $2"
        await client.query({
            text: sqlUpdateLastname,
            values: [lastname, req.session.userId]
        })
    }

    if (phone != null && phone != "") {
        const sqlUpdatePhone = "UPDATE users SET phone = $1 WHERE id = $2"
        await client.query({
            text: sqlUpdatePhone,
            values: [phone, req.session.userId]
        })
    }

    const sqlUser = "SELECT * FROM users WHERE id=$1"
    const userData = await client.query({
            text: sqlUser,
            values: [req.session.userId]
        })
        // on envoie le user ajouté à l'utilisateur
    res.json(userData.rows[0])
})

/**
 * Cette route permet de se connecter.
 */
router.post('/login', async(req, res) => {
    const username = req.body.username.toLowerCase();
    const password = req.body.password

    const sqlUser = "SELECT * FROM users WHERE email=$1 OR username =$1"
    const checkExists = await client.query({
        text: sqlUser,
        values: [username]
    })

    if (checkExists.rowCount === 0) {
        res.status(400).json({ message: 'user doesn\'t exists' });
        return
    }

    if (await bcrypt.compare(password, checkExists.rows[0].password)) {
        req.session.userId = checkExists.rows[0].id
        req.session.userdata = new UserData()

        const sqlUserData = 'SELECT sample.id AS sampleid, sample.glucose AS glucose, sample.date AS date, sampledetails.id AS sampledetailsid, sampledetails.foodid AS foodid, sampledetails.quantity AS quantity, sampledetails.type AS type FROM sample INNER JOIN sampledetails on sample.id = sampledetails.sampleid WHERE userid = $1'
        const userData = await client.query({
            text: sqlUserData,
            values: [req.session.userId]
        })
        userData.rows.forEach(row => {
            if ((req.session.userdata.history.findIndex((i) => i.id == row.id) == -1)) {
                const sample = {
                    sampleid: row.sampleid,
                    glucose: row.glucose,
                    date: (row.date.getDate() + "-" + (row.date.getMonth() + 1) + "-" + row.date.getFullYear() + " " + row.date.getHours() + ":" + row.date.getMinutes() + ":" + row.date.getSeconds()),
                    details: [],
                }

                const sampledetails = {
                    sampledetailsid: row.sampledetailsid,
                    foodid: row.foodid,
                    quantity: row.quantity,
                    type: row.type
                }
                sample.details.push(sampledetails)

                req.session.userdata.history.push(sample)
            } else {
                const sampledetails = {
                    sampledetailsid: row.sampledetailsid,
                    foodid: row.foodid,
                    quantity: row.quantity,
                    type: row.type
                }
                req.session.userdata.history[req.session.userdata.history.findIndex((i) => i.id == row.id)].details.push(sampledetails)
            }
        });

        // on envoie les données du user au client.
        return res.json(req.session.userdata)
    } else {
        return res.status(401).json({ message: 'wrong password' })

    }
})

/**
 * Cette route permet de se déconnecter.
 */
router.post('/logout', (req, res) => {
    if (typeof req.session.userId === 'undefined' || req.session.userId === -1) {
        res.status(401).json({ message: 'user not connected' })
        return (res.json(req.session.userId))
    } else {
        req.session.destroy();
        return res.status(200).json({ message: 'user disconnected' })
    }
})

/**
 * Cette route permet de retourner l'utilisateur connecté.
 */
router.get('/me', async(req, res) => {
    if (typeof req.session.userId === 'undefined' || req.session.userId === -1) {
        res.status(401).json({ message: 'user is not connected' })
    }

    const sql = "SELECT * FROM users WHERE id=$1"
    const userSQL = await client.query({
        text: sql,
        values: [req.session.userId]
    })

    if (userSQL.rowCount === 0) {
        res.status(400).json({ message: 'user doesn\'t exists' })
        return
    }

    // on envoie le user connecté à l'utilisateur
    const user = {
        id: userSQL.rows[0].id,
        email: userSQL.rows[0].email
    }
    res.json(user)
    return
})

/**
 * Cette route envoie l'intégralité des informations nutritives de la base de données.
 */
router.get('/datafood', async(req, res) => {
    const sql = "SELECT * FROM food ORDER BY id"
    const foodSQL = await client.query({
        text: sql,
        values: []
    })
    res.json(foodSQL.rows)
    return
})

/**
 * Cette permet d'ajouter une mesure à la base de données.
 */
router.post('/sample', async(req, res) => {
    const entrance = req.body.entrance
    const dish = req.body.dish
    const accompaniment = req.body.accompaniment
    const dessert = req.body.dessert
    const quantityentrance = parseFloat(req.body.quantityentrance)
    const quantitydish = parseFloat(req.body.quantitydish)
    const quantityaccompaniment = parseFloat(req.body.quantityaccompaniment)
    const quantitydessert = parseFloat(req.body.quantitydessert)

    let total = 0;

    // Vérifie si le plat existe dans la base de données.
    const sqlCheck = "SELECT * FROM food WHERE name=$1"
    const getDish = await client.query({
        text: sqlCheck,
        values: [dish]
    })

    if (getDish.rowCount === 0) {
        res.status(401).json({ message: 'dish doesn\'t exists' });
        return
    }

    // Crée l'échantillonnage dans la base de données.
    const newSampleSql = "INSERT INTO sample (userid, date) VALUES ($1, $2)"
    await client.query({
        text: newSampleSql,
        values: [req.session.userId, new Date()]
    })

    // Récupère l'échantillonnage précédement crée.
    const getSampleSql = "SELECT * FROM sample WHERE userid = $1 ORDER BY id DESC"
    const sample = await client.query({
        text: getSampleSql,
        values: [req.session.userId]
    })

    // Insère le plat de l'utilisateur dans la base de données.
    const newDishSql = "INSERT INTO sampledetails (sampleid, foodid, quantity, type) VALUES ($1, $2, $3, $4)"
    await client.query({
        text: newDishSql,
        values: [sample.rows[0].id, getDish.rows[0].id, quantitydish, "plat"]
    })

    total += quantitydish * getDish.rows[0].tauxglucose / 100;

    // Insère l'entrée de l'utilisateur dans la base de données, si entré par l'utilisateur.
    if (entrance != "") {
        const getEntranceSql = "SELECT * FROM food WHERE name=$1"
        const getEntrance = await client.query({
            text: getEntranceSql,
            values: [entrance]
        })

        if (getEntrance.rowCount === 0) {
            res.status(401).json({ message: 'entrance doesn\'t exists' });
            return
        }

        const newEntranceSql = "INSERT INTO sampledetails (sampleid, foodid, quantity, type) VALUES ($1, $2, $3, $4)"
        await client.query({
            text: newEntranceSql,
            values: [sample.rows[0].id, getEntrance.rows[0].id, quantityentrance, "entrée"]
        })

        total += quantityentrance * getEntrance.rows[0].tauxglucose / 100;
    }

    // Insère l'accompagnement de l'utilisateur dans la base de données, si entré par l'utilisateur.
    if (accompaniment != "") {
        const getAccompanimentSql = "SELECT * FROM food WHERE name=$1"
        const getAccompaniment = await client.query({
            text: getAccompanimentSql,
            values: [accompaniment]
        })

        if (getAccompaniment.rowCount === 0) {
            res.status(401).json({ message: 'accompaniment doesn\'t exists' });
            return
        }

        const newAccompanimentSql = "INSERT INTO sampledetails (sampleid, foodid, quantity, type) VALUES ($1, $2, $3, $4)"
        await client.query({
            text: newAccompanimentSql,
            values: [sample.rows[0].id, getAccompaniment.rows[0].id, quantityaccompaniment, "accompagnement"]
        })

        total += quantityaccompaniment * getAccompaniment.rows[0].tauxglucose / 100;
    }

    // Insère le déssert de l'utilisateur dans la base de données, si entré par l'utilisateur.
    if (dessert != "") {
        const getDessertSql = "SELECT * FROM food WHERE name=$1"
        const getDessert = await client.query({
            text: getDessertSql,
            values: [dessert]
        })

        if (getDessert.rowCount === 0) {
            res.status(401).json({ message: 'dessert doesn\'t exists' });
            return
        }

        const newDessertSql = "INSERT INTO sampledetails (sampleid, foodid, quantity, type) VALUES ($1, $2, $3, $4)"
        await client.query({
            text: newDessertSql,
            values: [sample.rows[0].id, getDessert.rows[0].id, quantitydessert, "dessert"]
        })

        total += quantitydessert * getDessert.rows[0].tauxglucose / 100;
    }

    // Modifie le total de glucose en g présent dans le repas de l'utilisateur dans la base de données.
    const updateSampleGlucoseSql = "UPDATE sample SET glucose = $1 WHERE id = $2"
    await client.query({
        text: updateSampleGlucoseSql,
        values: [total, sample.rows[0].id]
    })

    const getFinalSampleSql = "SELECT * FROM sample WHERE id = $1"
    const finalSample = await client.query({
        text: getFinalSampleSql,
        values: [sample.rows[0].id]
    })

    return res.json(finalSample.rows[0])
})

module.exports = router