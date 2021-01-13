const Home = window.httpVueLoader('./components/Home.vue')
const LogIn = window.httpVueLoader('./components/LogIn.vue')
const SignUp = window.httpVueLoader('./components/SignUp.vue')
const Lobby = window.httpVueLoader('./components/Lobby.vue')
const Profile = window.httpVueLoader('./components/Profile.vue')
const Programme = window.httpVueLoader('./components/programme.vue')

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LogIn },
  { path: '/signup', component: SignUp },
  { path: '/lobby', component: Lobby },
  { path: '/me', component: Profile },
  { path: '/programme', component: Programme },
]

const router = new VueRouter({
    routes
})

var app = new Vue({
    router,
    el: '#app',
    data: {
        connected: false
    },
    async mounted() {

    },
    methods: {
        async addUser(newUser) {
            if (await axios.post('/api/register/', newUser)
                .catch(function(error) {
                    if (error.response.status === 400) {
                        document.getElementById('errorSignUpMessage').innerHTML = "Le pseudo est déjà pris.";
                    } else if (error.response.status === 401) {
                        document.getElementById('errorSignUpMessage').innerHTML = "L'adresse email est déjà prise.";
                    }
                })) {
                this.connected = true;
                router.push('/lobby')
            }
        },
        async logIn(user) {
            const userTeam = await axios.post('/api/login/', user)
                .catch(function(error) {
                    if (error.response.status === 400 || error.response.status === 401) {
                        document.getElementById('errorLogInMessage').innerHTML = "La combinaison est incorrecte.";
                        return error.response;
                    }
                })
            if (userTeam.status === 200) {
                this.team = userTeam.data;
                this.connected = true;
                router.push('/lobby')
            }
        },
        async updateUser(modifiedUser) {
            if (await axios.post('/api/updateUser/', modifiedUser)
                .catch(function(error) {
                    if (error.response.status === 400) {
                        document.getElementById('errorModifyUserMessage').innerHTML = "Le pseudo est déjà pris.";
                    } else if (error.response.status === 401) {
                        document.getElementById('errorModifyUserMessage').innerHTML = "L'adresse email est déjà prise.";
                    }
                })) {
                this.connected = true;
                router.push('/lobby')
            }
        },
        async logOut() {
            if (await axios.post('/api/logout/')
                .catch(function(error) {
                    if (error.response.status === 400 || error.response.status === 401) {
                        console.log(error)
                    }
                })) {
                this.connected = false;
                router.push('/')
            }
        }
    }
})