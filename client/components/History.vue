<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <nav>
      <h2 class="title_container">Historique des mesures</h2>
    </nav>

    <table>
      <thead>
        <tr>
          <th>Date de la mesure</th>
          <th>Glucose (en g)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in userdata.history" :key="user.sampleid">
          <td><router-link class="sample-info" :to="'/details/' + user.sampleid">{{ user.date }}</router-link></td>
          <td><router-link class="sample-info" :to="'/details/' + user.sampleid">{{ user.glucose }}</router-link></td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
const Navbar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  props: {
    food: { type: Array, default: [] },
    userdata: { type: Object },
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