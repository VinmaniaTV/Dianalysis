<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div id="back">
      <nav>
        <h2 class="title_container">Liste des aliments</h2>
      </nav>
      
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Groupe</th>
            <th>Sous-groupe</th>
            <th>Sous-sous-groupe</th>
            <th>Glucose (g/100g)</th>
          </tr>

        </thead>
        <tbody>
          <tr v-for="f in food" :key="f.id">
            <td>{{ f.name }}</td>
            <td>{{ f.groupf }}</td>
            <td>{{ f.sgroupf }}</td>
            <td>{{ f.ssgroupf }}</td>
            <td>{{ f.tauxglucose }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
const Navbar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  props: {
    food: { type: Array, default: [] },
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
button{
  border-radius:5px;
}
tr{
  font-size:1.3em;
  font-weight:bold;

}
#back{
  background-color: rgb(243, 243, 196);

}

.title_container {
    background: rgb(1,25,68);
    background: linear-gradient(90deg, rgba(1,25,68,1) 0%, rgb(3, 3, 114) 46%, rgba(1,25,68,1) 100%);
    font-size: 50px;
    padding-top: 10px;
    color: white;
    text-align: center;
    justify-content: center;
    margin: auto;
    height: 100px;
    margin: 0;
}

table{
  border-collapse: collapse
}
td{
  border: 1px solid black;
  padding: 10px;
  text-align: center;
  font-size:medium;
  background-color: rgb(255, 255, 255);
}
th{
  font-size:200;
  text-align: center;
  border: 1px solid black;
  padding: 10px;
}

section{
  height: 1vh;
}
</style>