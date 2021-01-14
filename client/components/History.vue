<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div>
      <advanced-search v-model="model" :options="options"> </advanced-search>
    </div>
    leche mes fesses guillaume 
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