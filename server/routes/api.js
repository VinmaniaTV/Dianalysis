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

        // on envoie le nom du user au client.
        return res.json(username)
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
 * Cette route envoie l'intégralité des informations nutritives de la base de données
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
 * Cette route permet de se connecter.
 */
router.post('/sample', async(req, res) => {
    const entrance = req.body.entrance
    const dish = req.body.dish
    const accompaniment = req.body.accompaniment
    const dessert = req.body.dessert

    const sqlCheck = "SELECT * FROM food WHERE name=$1"
    const checkExists = await client.query({
        text: sqlUser,
        values: [sqlCheck]
    })

    if (checkExists.rowCount === 0) {
        res.status(401).json({ message: 'dish doesn\'t exists' });
        return
    }

    if (await bcrypt.compare(password, checkExists.rows[0].password)) {
        req.session.userId = checkExists.rows[0].id

        // on envoie le nom du user au client.
        return res.json(username)
    } else {
        return res.status(401).json({ message: 'wrong password' })

    }
})

module.exports = router