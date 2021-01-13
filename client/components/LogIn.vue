<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <section>
      <div id="container">
        <!-- zone de connexion -->

        <form @submit.prevent="logIn">
          <h1>Connexion</h1>

          <label><b>Nom d'utilisateur ou E-mail</b></label>
          <input
            type="text"
            v-model="user.username"
            placeholder="Entrer le nom d'utilisateur"
            name="username"
            required
          />

          <label><b>Mot de passe</b></label>
          <input
            type="password"
            v-model="user.password"
            placeholder="Entrer le mot de passe"
            name="password"
            required
          />

          <div>
            <p id="errorLogInMessage"></p>
          </div>

          <input type="submit" id="submit" value="Connexion" />
        </form>
      </div>
    </section>
  </div>
</template>

<script>
const Navbar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  components: {
    Navbar,
  },
  props: {
    connected: { type: Boolean }
  },
  data() {
    return {
      user: {
        username: "",
        password: "",
      },
    };
  },
  methods: {
    logIn() {
      this.$emit("log-in", this.user);
    },
    logOut () {
      this.$emit('log-out')
    }
  },
};
</script>

<style scoped>
section {
  background: linear-gradient(#071e38, #040614);
  height: calc(100vh - 305px);
  min-height: 500px;
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}
#container {
  width: 400px;
  margin: 0 auto;
}

form {
  padding: 30px;
  border: 1px solid #f1f1f1;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 2px;
}

#container h1 {
  margin: 0 auto;
  padding-bottom: 10px;
  border-radius: 2px;
  text-align: center;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 4px;
}

input[type="submit"] {
  background-color: #53af57;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #53af57;
}

input[type="submit"]:hover {
  background-color: white;
  color: #53af57;
  border: 1px solid #53af57;
}

p {
  color: red;
}
</style>