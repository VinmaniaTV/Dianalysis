<template>
    <section>
      <nav class="">
        <h2>Bon retour #Guest#</h2>
      </nav>
    <div id="section_y">
      <h2 class="title_container">Accueil</h2>
      <div class="sommaire">
          <router-link class="summary" to="/programme">Programme</router-link>
          <router-link class="summary" to="/listeAliments">Consulter notre liste d'aliments favoris</router-link>
          <router-link class="summary" to="/conseils">Nos Conseils</router-link>
          <router-link class="summary" to="/historique">Votre Historique</router-link>
      </div>

    </div>
    </section>
</template>

<style>
section{
  background-color: #2D3F61;
}
.title_container{
  padding-top: 55px;
  background-color: black;
  color: white;
  text-align: center;
  justify-content: center;
  margin: auto;
  height: 150px;
  margin: 0;
}

.section_y{
  height: 1vh;
  text-align: center;
}
.sommaire{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.summary{
  color: white;
  background-color: #4A68A1;
  height: 140px;
  width: 50em;
  text-decoration: none;
  text-align: center;
  border: solid #5B81C7;
  border-radius: 5px;
  padding-top: 35px;
}

.summary:hover{
  text-decoration: none;
  color: white;
  background: linear-gradient(to right, #2D3F61, #6D9AED, #2D3F61);
  transition: 2s, 2s;
  font-size: 40px;
}
</style>