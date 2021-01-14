<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <article>
      <div class="back">
        <nav>
          <h2 class="title_container">Liste des aliments</h2>
        </nav>
      </div>
      <div id="table">
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
    </article>
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
section {
  background-color: rgb(107, 107, 107);
  font-family: 'Montserrat', sans-serif;
}

article {
  background-color: #39CFF7;
  height: 100%;
  padding: 70px;
}

tr {
  font-size: 1.3em;
  font-weight: bold;
}

article nav {
  margin-top: 10%;
}

h2 {
  text-shadow: 0px 0px 7px #000;
  text-transform: uppercase;
  font-weight: 550;
  font-size: 70px !important;
}

h2:first-letter {
  color: #1963a8;
}

.back {
  background-image: url(../img/foodlistbg.jpg);
  background-repeat: no-repeat;
  background-size: 120%;
  border: 4px solid #047DDE;
  border-radius: 40px;
  height: 120vh;
  max-height: 720px;
}

.title_container {
  font-size: 45px;
  padding-top: 20px;
  color: white;
  text-align: center;
  justify-content: center;
  margin: auto;
  height: 110px;
  margin: 0;
}

table {
  backdrop-filter: blur(0.3rem);
  border-collapse: collapse;
  border-radius: 10px;
  border: none;
}

table {
  top: -25em;
  backdrop-filter: blur(0.3rem);
  border-spacing: 0;
  border-radius: 9px;
  overflow: hidden;
  border-style: solid;
  border-width: 3px;
  border: 3px solid #B2E1F7;
}


#table {
  border-radius: 10px;
  position: relative;
  top: -25em;
  margin: 0 60px;
  border: 1px solid #B2E1F7;
}

td {
  padding: 10px;
  text-align: center;
  font-size: medium;
  border-radius: 1em;
  padding: 10px;
  border-right: 1px solid #B2E1F7;
}

th {
  font-size: 200;
  text-align: center;
  padding: 10px;
  border-right: 1px solid #B2E1F7;
}
</style>