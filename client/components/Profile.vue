<template>
  <div id="first">
    <div class="gauche">
      <form>
        <h3>Vos informations</h3>
        <h6>Mon prénom</h6>
        <input
          type="text"
          id="prenom"
          name="user_prenom"
          placeholder="mon prénom"
          class="clean1"
        />
        <h6>Mon nom</h6>
        <input
          type="text"
          id="nom"
          name="user_nom"
          placeholder="mon Nom"
          class="clean2"
        />
        <h6>Mon adresse e-mail</h6>
        <input
          id="email"
          name="email_message"
          placeholder=" mon email"
          class="clean3"
        />
        <h6>Mon Username</h6>
        <input
          type="text"
          name="username"
          placeholder="Identifiant utilisateur"
          class="clean4"
        />
        <h6>Mot de passe actuel</h6>
        <input
          type="text"
          name="actual_password"
          placeholder="Mot de passe"
          class="clean5"
        />
        <h6>Nouveau mot de passe</h6>
        <input
          type="text"
          name="new_mdp"
          placeholder="Saisissez votre nouveau mot de passe"
          class="clean6"
        />
        <h6>Veuillez saisir une seconde fois votre nouveau mot de passe</h6>
        <input type="text" name="new_mdp2" placeholder="" class="clean7" />
        <br> 
        <input
          type="button"
          value="Valider les modifications"
          id="valider_modifs"
          class="clean8"
        /> 
      </form>
    </div>

    <div class="droite">
      <h3>Photo de profil</h3>
    </div>
  </div>
</template>

<style scoped>
div#first
{
  background-color: rgb(141, 128, 128);
}
div#first div {
  display: inline-block;
  width: 48%;
}
div#first div.gauche
{
  background-color: rgb(185, 178, 178);
}
div#first div.droite
{
  vertical-align: top;
}
div#first div h6, h3, input
{
  margin-left: 35px;
  margin-bottom: 10px;
}

</style>