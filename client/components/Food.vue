<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div>
      <nav>
        <h2>Liste des aliments</h2>
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
            <td>{{ f.glucose }}</td>
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