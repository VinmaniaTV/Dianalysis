<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div class="profile_container">
      <form id="form_profile">
      <h3 id="vos_informations">Vos informations</h3>
    <div class="collum">
      <div class="collum1">
        <div class="data_profile">
          <h6>Mon prénom&nbsp;:</h6>
        <input type="text" id="prenom" name="user_prenom" placeholder="mon prénom" class="clean1"/>
        </div>
        
        <div class="data_profile">
        <h6>Mon nom&nbsp;:</h6>
        <input type="text" id="nom" name="user_nom" placeholder="mon Nom" class="clean2"/>
        </div>

        <div class="data_profile">
        <h6>Mon adresse e-mail&nbsp;:</h6>
        <input id="email" name="email_message" placeholder=" mon email" class="clean3"/>
        </div>

        <div class="data_profile">
        <h6>Mon Username&nbsp;:</h6>
        <input type="text" name="username" placeholder="Identifiant utilisateur" class="clean4"/>
        </div>
      </div>
      <div class="collum2">
        <div class="data_profile">
        <h6>Mot de passe actuel&nbsp;:</h6>
        <input type="password" name="actual_password" placeholder="Mot de passe" class="clean5"/>
        </div>

        <div class="data_profile">
        <h6>Nouveau mot de passe&nbsp;:</h6>
        <input type="password" name="new_mdp" placeholder="Saisissez votre nouveau mot de passe" class="clean6" id="password"/>
        </div>

        <div class="data_profile">
        <h6>Veuillez saisir une seconde fois votre nouveau mot de passe&nbsp;:</h6>
        <input type="text" name="new_mdp2" placeholder="Saisissez votre nouveau mot de passe" class="clean7" />
        </div>
      </div>
    </div>
        <button type="submit" id="button_valider">Valider les modifications</button>
      </form>
    </div>
    <p id="errorModifyUserMessage"></p>
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
  data() {
    return {
      modifiedUser: {
        username: "",
        email: "",
        password: "",
        firstname: "",
        lastname: "",
        phone: "",
      },
    };
  },
  methods: {
    logOut() {
      this.$emit("log-out");
    },
    updateUser() {
      if (
        document.getElementById("password").value ==
        document.getElementById("confirmationPassword").value
      ) {
        this.$emit("update-user", this.modifiedUser);
      } else {
        document.getElementById("errorModifyUserMessage").innerHTML =
          "Mot de passe non identique.";
      }
    },
  },
};
</script>

<style scoped>
.profile_container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#form_profile{
  flex-direction: column;
  margin: auto auto;
  flex-wrap: wrap;
  align-items: center;
  padding: 60px;
  width: 100%;
  
}
.collum{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}


div#first {
  background-color: rgb(141, 128, 128);
}
div#first div {
  display: inline-block;
  width: 48%;
}
div#first div.gauche {
  background-color: rgb(185, 178, 178);
}
div#first div.droite {
  vertical-align: top;
}

div#first div h6,
h3,
input {
  margin-left: 35px;
  margin-bottom: 10px;
}

#vos_informations{
  margin: 20px;
  border: solid;
  text-align: center;
}

#errorModifyUserMessage{
  margin: 0;
}
#button_valider{
  display: block;
  margin: auto auto;
}
</style>