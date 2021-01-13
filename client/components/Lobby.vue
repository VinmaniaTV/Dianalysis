<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <nav class="">
      <h2>Bon retour #Guest#</h2>
    </nav>
    <div id="section_y">
      <h2 class="title_container">Accueil</h2>
      <div class="sommaire">
        <router-link class="summary" to="/sample">Prendre une mesure</router-link>
        <router-link class="summary" to="/food">Liste des aliments</router-link>
        <router-link class="summary" to="/advices">Nos conseils</router-link>
        <router-link class="summary" to="/history">Votre historique</router-link
        >
      </div>
    </div>
  </section>
</template>

<script>
const Navbar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  props: {
    connected: { type: Boolean },
  },
  components: {
    Navbar,
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
  },
};
</script>

<style scoped>
section {
  background-color: #2d3f61;
}
.title_container {
  padding-top: 55px;
  background-color: black;
  color: white;
  text-align: center;
  justify-content: center;
  margin: auto;
  height: 150px;
  margin: 0;
}

.section_y {
  height: 1vh;
  text-align: center;
}
.sommaire {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.summary {
  color: white;
  background-color: #4a68a1;
  height: 140px;
  width: 50em;
  text-decoration: none;
  text-align: center;
  border: solid #5b81c7;
  border-radius: 5px;
  padding-top: 35px;
  margin-top: 5px;
  margin-bottom:5px;
}

.summary:hover {
  text-decoration: none;
  color: white;
  background: linear-gradient(to right, #2d3f61, #6d9aed, #2d3f61);
  transition: 2s, 2s;
  font-size: 40px;
  width: 1200px;
}
</style>