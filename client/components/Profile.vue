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
        <input type="text" id="prenom" name="user_prenom" placeholder="Prénom" class="input_style"/>
        </div>
        
        <div class="data_profile">
        <h6>Mon nom&nbsp;:</h6>
        <input type="text" id="nom" name="user_nom" placeholder="Nom" class="input_style"/>
        </div>

        <div class="data_profile">
        <h6>Mon adresse e-mail&nbsp;:</h6>
        <input id="email" name="email_message" placeholder=" E-mail" class="input_style"/>
        </div>

        <div class="data_profile">
        <h6>Pseudo&nbsp;:</h6>
        <input type="text" name="username" placeholder="Identifiant utilisateur" class="input_style"/>
        </div>
      </div>
      <div class="collum2">
        <div class="data_profile">
        <h6>Mot de passe actuel&nbsp;:</h6>
        <input type="password" name="actual_password" placeholder="Mot de passe" class="input_style"/>
        </div>

        <div class="data_profile">
        <h6>Nouveau mot de passe&nbsp;:</h6>
        <input type="password" name="new_mdp" placeholder="Saisissez votre nouveau mot de passe" class="input_style" id="password"/>
        </div>

        <div class="data_profile">
        <h6>Confirmation du mot de passe&nbsp;:</h6>
        <input type="text" name="new_mdp2" placeholder="Saisissez votre nouveau mot de passe" class="input_style" />
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
.collum1{

  padding-top:20px
}
.collum2{

  padding-top:20px
}
.input_style{
  
  border-color:rgb(73, 89, 231);
  border-radius: 10px;
  
}

.data_profile{
  margin-top: 30px;
  color:white;
  text-align: center  ;
  

  }
.profile_container{
  background-image: url("../img/fondbleu.jpg");
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}

#form_profile{
  background-color:#011f5f;
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
  font-size:50px;
  color:white;
  margin: auto;
  text-align: center;
}

#errorModifyUserMessage{
  margin: 0;
}
#button_valider{
  color:rgb(255, 255, 255);
  border-color: rgb(0, 0, 0);
  background-color: rgb(27, 44, 194);
  border-radius:10px;
  display: block;
  margin: auto auto;
  height: 2em;
}
</style>