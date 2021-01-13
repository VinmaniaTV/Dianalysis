<template>
    <section>
      <nav>
        <h2>Bon retour #Guest#</h2>
      </nav>
    <div id="section_y">
      <h2 class="title_container">Accueil</h2>
      <div class="sommaire">
        <router-view>
        <button class="button_sommaire" onclick="window.location.href = '/#/programme';">Votre Programme</button>
        <button class="button_sommaire" onclick="window.location.href = '/#/seche';">Consulter notre liste d'aliments</button>
        <button class="button_sommaire" onclick="window.location.href = '/#/seche';">Nos Conseils</button>
        <button class="button_sommaire" onclick="window.location.href = '/#/seche';">Votre Historique</button>
      </div>
    </div>
    </section>
</template>

<style>
.title_container{
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
}
.sommaire{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.button_sommaire{
  height: 140px;
  width: 30em;
}
</style>