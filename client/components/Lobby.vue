<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <nav class="Titre">
      <h2>(Re)Bonjour à vous !</h2>
    </nav>
    <div id="section_y">
      <h2 class="title_container">Lobby</h2>
      <div class="sommaire">
        <router-link class="summary" to="/sample">Prendre une mesure</router-link>
        <router-link class="summary" to="/food">Liste des aliments</router-link>
        <router-link class="summary" to="/advices">Nos conseils</router-link>
        <router-link class="summary" to="/history">Votre historique</router-link>
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
.title_container{
    background: linear-gradient(#071e38, #040614);
    background: linear-gradient(90deg, #071e38 0%, rgb(2, 2, 146) 46%, #071e38 100%);
    font-size: 60px;
    padding-top: 10px;
    color: white;
    text-align: center;
    justify-content: center;
    margin: auto;
    height: 110px;
    margin: 0;
}


h2{
  margin-left:50px;
  color:#fff;
}
section {
  background: linear-gradient(#071e38, #040614);
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
  color:rgb(255, 255, 255);
  background-color: #033797;
  height: 140px;
  width: 50em;
  text-decoration: none;
  text-align: center;
  border: solid #000000;
  border-radius: 10px;
  padding-top: 35px;
  margin-top: 5px;
  margin-bottom:5px; 
}

.summary:hover {
  text-decoration: none;
  color: white;
  background: linear-gradient(to right, #4f596d, #2051ad, #4f596d);
  transition: 1s, 1s, 1s;
  font-size: 50px;
  width: 900px;
}

.title_container {
    background: rgb(1,25,68);
    background: linear-gradient(90deg, rgba(1,25,68,1) 0%, rgb(3, 3, 114) 46%, rgba(1,25,68,1) 100%);
    font-size: 60px;
    padding-top: 10px;
    color: white;
    text-align: center;
    justify-content: center;
    margin: auto;
    height: 110px;
    margin: 0;
}
</style>