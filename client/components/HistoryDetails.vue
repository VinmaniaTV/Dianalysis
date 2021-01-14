<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div>
      <h2>
        {{
          this.userdata.history[
            this.userdata.history.findIndex(
              (i) => i.sampleid == $route.params.id
            )
          ].date
        }}
      </h2>
    </div>
    <div>
      <h2>
        {{
          this.userdata.history[
            this.userdata.history.findIndex(
              (i) => i.sampleid == $route.params.id
            )
          ].glucose
        }}
      </h2>
    </div>
    <table>
      <thead>
        <tr>
          <th>Nom de l'aliment</th>
          <th>Taux de glucose dans l'aliment (g/100g)</th>
          <th>Quantité (en g)</th>
          <th>Type</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="dishes in this.userdata.history[this.userdata.history.findIndex((i) => i.sampleid == $route.params.id)].details" :key="dishes.sampledetailsid">
          <td>{{ food[food.findIndex((i) => i.id == dishes.foodid)].name }}</td>
          <td>{{ food[food.findIndex((i) => i.id == dishes.foodid)].tauxglucose }}</td>
          <td>{{ dishes.quantity }}</td>
          <td>{{ dishes.type }}</td>
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