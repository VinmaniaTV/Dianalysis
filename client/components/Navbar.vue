<template>
  <header>
    <nav class="navbar navbar-expand-lg">
      <router-link class="navbar-brand" to="/"
        ><img
          src="./img/logo.png"
          alt="logo"
          class="img-fluid"
          width="48"
        /><span>Dianalysis</span></router-link
      >
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"
          ><img src="./img/menu.png" class="img-fluid" width="30"
        /></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav mr-auto w-100 d-flex justify-content-end">
          <div v-if="connected === true">
            <li class="nav-item">
              <router-link class="nav-link" to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/lobby">Lobby</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/me">Mon profil</router-link>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#" @click="logOut()">Se déconnecter</a>
            </li>
          </div>
          <div v-else>
            <li class="nav-item">
              <router-link class="nav-link" to="/">Accueil</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/signup"
                >S'inscrire</router-link
              >
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/login"
                >Se connecter</router-link
              >
            </li>
          </div>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
module.exports = {
  props: {
    connected: { type: Boolean },
  },
  data() {
    return {};
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
  },
};
</script>

<style scoped lang="css" src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"></style>
<style>
/* navbar */

header nav {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  background-color: #0e0c0c;
  padding: 10px;
}

header img {
  height: 48px;
  width: 48px;
  border-radius: 5px;
}

header div {
  display: flex;
}

.navbar {
  background-color: #0e0c0c;
}

.navbar .navbar-brand span {
  margin-left: 15px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 700;
  color: #ddd;
}

.navbar .nav-item {
  margin: 0 1em;
  position: relative;
}

.navbar .nav-item:nth-child(n + 2):before {
  content: "";
  position: absolute;
  width: 2px;
  height: 15px;
  background-color: #fff;
  left: -1em;
  top: calc(50% - 7.5px);
  /* transform: rotate(25deg); */
}

@media (max-width: 768px) {
  .navbar .nav-item:nth-child(n + 2):before {
    display: none;
  }
}

.navbar .nav-item .nav-link {
  text-transform: uppercase;
  font-weight: 700;
  color: #ddd;
}

.navbar .nav-item .nav-link:first-letter {
  color: #1963a8;
}

.navbar-toggler-icon img {
  height: 100%;
}
#navbarNavDropdown {
  background-color: #0e0c0c;
}
</style>
