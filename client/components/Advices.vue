<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
      <h2 class="title_container">CONSEILS ET ACTUS</h2>
    <div class="row">
      <div class="leftcolumn">

        <div class="card">
          <h2 class="cardTitle">QU'EST-CE QUE LE DIABÈTE ?</h2>
          <p>Le diabète est caractérisé par une élévation anormale du taux de glucose dans le sang.

Le diabète de type 1 a pour origine une sécrétion insuffisante d'insuline par le pancréas, dû à une destruction progressive des cellules bêta dans les îlots de Langerhans qui synthétisent l’insuline. Ce diabète se manifeste généralement dès l’enfance ou l’adolescence. On le désigne parfois par les termes de  diabète insulinodépendant ou de diabète juvénile.

Dans le diabète de type 2, c’est la glycémie qui ne réagit plus à l'insuline sécrétée par le pancréas. Le glucose est alors mal utilisé par les cellules, expliquant l’élévation de la glycémie au-dessus des valeurs normales. Le diabète de type 2 se manifeste généralement après l’âge de 40 ans mais on commence à voir apparaître dans des populations obèses des cas chez les adolescents et les jeunes adultes.

Il existe aussi d’autres formes plus rares de diabète comme le diabète gestationnel (diabète temporaire qui survient chez 6% des femmes enceintes) ou le diabète MODY (Maturity Onset Diabetes Of the Young), un diabète lié à la mutation d’un gène qui représenterait 2 à 5 % des diabètes non insulino-dépendants.</p>
        </div>

        <div class="card">
          <h2 class="cardTitle">SCHÉMA EXPLICATIF</h2><br>
          <img src="./img/explicationDiab.png" alt="schéma explicatif" width="700px">
        </div>

        <div class="card">
          <h2 class="cardTitle"> ADOCIA : LA BIOTECH ADOCIA AVANCE DANS SA SOLUTION POUR FACILITER LA THÉRAPIE CELLULAIRE DU DIABÈTE</h2>
          <div id="ADOCIA">
          <img src="./img/actudiab.png" alt="pomme et sucre" width="400px">
          <p id="adocia_text">La greffe de cellules du pancréas est utilisée depuis quelques décennies pour permettre de restaurer le contrôle de la glycémie chez des personnes atteintes de diabète de type 1. Mais les traitements pour éviter le rejet de la greffe favorisent le risque d'apparition du cancer. 
          Pour éliminer le problème, Adocia a développé une matrice hydrogel encapsulant : la greffe.</p>
          </div>
        </div>

        <div class="card">
          <h2 class="cardTitle">QUI EST TOUCHÉ PAR LE DIABÈTE</h2>
          <p>Le diabète touche plus de 420 millions de personnes dans le monde. En France, on compte environ 3,5 millions de diabétiques, soit près de 5,3 % de la population. Selon l'OMS, le diabète pourrait passer de la 8e à la 7e cause de décès dans le monde en 2030. Le diabète est diagnostiqué avec au minimum 5 années de retard. Cette maladie, avec laquelle on apprend à vivre tout au long de sa vie, fait encore peur aujourd'hui. Pourtant, un diabétique pris en charge correctement peut réussir à vivre sereinement avec sa maladie.</p>
        </div>

        <div class="card">
          <h2 class="cardTitle">POURQUOI AVOIR UNE BONNE ALIMENTATION ?</h2>
          <p>Une bonne alimentation est le moteur pour rester en forme et avoir une bonne santé. Parfois, il est important de manger des aliments sains pour aider l’organisme à fonctionner correctement. Jouant des rôles déterminants, pourquoi avoir une bonne alimentation est si essentiel ? Et, quels pourraient être les effets d’une bonne alimentation sur la santé ?</p>
          <p>Pour fonctionner correctement, le corps a besoin d’une nourriture saine et équilibrée. En plus des activités physiques, ne pas fumer ou encore ne pas consommer de boissons alcoolisées contribuent au bon fonctionnement de l’organisme. Que vous soyez un enfant, un adulte ou une personne âgée, il est important de bien manger.</p>
          <p>De ce fait, il est important de manger non seulement trois fois par jour, de façon raisonnable mais aussi d’inclure les bons nutriments dans son repas. Les éléments à privilégier dans une alimentation sont les légumes, les légumineuses, les produits laitiers, les poissons, les œufs, la viande ou encore les matières grasses et les sucres.</p>
        </div>
        
      </div>
      <div class="rightcolumn">
        <div class="card">
          <h2 class="cardTitle">QUI SOMMES-NOUS ?</h2>
          <div id="photoTeam">
            <img class="portrait" src="./img/phototeam/Younes.png" alt="Younes" width="25%">
            <img class="portrait" src="./img/phototeam/Adame.png" alt="Adame" width="25%">
            <img class="portrait" src="./img/phototeam/Guillaume.png" alt="Guillaume" width="25%">
            <img class="portrait" src="./img/phototeam/Arthur.png" alt="Arthur" width="25%">
            <img class="portrait" src="./img/phototeam/Vincent.png" alt="Vincent" width="25%">
          </div>
          <p>Étudiant à l'école d'Efrei Paris nous vous proposons ici un groupe de service qui vous faciliteront votre quotidien.</p>
        </div>
        <div class="card">
          <h2></h2>
        </div>
        <div class="card">
          <h2>REJOIGNEZ NOTRE COMMUNAUTE</h2>
          <p>Vous pouvez nous soutenir et discuter des améliorations via nos réseaux sociaux</p>
          <a href=""><img src="./img/logoinsta.png" alt="logo instagram" width="10%"> &nbsp;Instagram</a>
          <a href="https://twitter.com/DianalysisEFREI"><img src="./img/logotwitter.png" alt="logo twitter" width="10%" id="logotwitter"> &nbsp;Twitter </a>
          <a href="https://twitter.com/DianalysisEFREI"><img src="./img/logofacebook.png" alt="logo twitter" width="10%" id="logotwitter"> &nbsp;Facebook </a>
          
        </div>
      </div>
    </div>
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

<style scoped>
body {
  font-family: Arial;
  padding: 20px;
  background: #f1f1f1;
}

/* Header/Blog Title */
.header {
  padding: 30px;
  font-size: 40px;
  text-align: center;
  background: white;
}

.row {
  max-width: 100%;
  font-family: 'Open Sans', sans-serif;
}

/* Create two unequal columns that floats next to each other */
/* Left column */
.leftcolumn {
  float: left;
  width: 74%;
  margin-left: 10px;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 10px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 10px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin: 25px;
  height: auto;
  align-items: center;
  margin-left: 30px;
}

/* Clear floats after the columns */
.row:after {
  content: "";
  display: table;
  clear: both;
}

/* Footer */
.footer {
  padding: 20px;
  text-align: center;
  background: #ddd;
  margin-top: 20px;
}

/* Responsive layout - when the screen is less than 800px wide, make the two columns stack on top of each other instead of next to each other */
@media screen and (max-width: 800px) {
  .leftcolumn,
  .rightcolumn {
    width: 100%;
    padding: 0;
  }
}

#logotwitter{
  border-radius: 10px;
}

a{
  text-decoration: none;
  color: rgb(0, 132, 255);
}

section {
background: linear-gradient(#071e38, #040614);
}

.title_container {
    background: rgb(1,25,68);
    background: linear-gradient(90deg, rgba(1,25,68,1) 0%, rgb(3, 3, 114) 46%, rgba(1,25,68,1) 100%);
    font-size: 60px;
    padding-top: 20px;
    color: white;
    text-align: center;
    justify-content: center;
    margin: auto;
    height: 110px;
    margin: 0;
    margin-top: 50px;
    margin-bottom: 30px;
}

#adocia{
  margin: 10px;
  justify-content: space-between;
}

#adocia_text{
  text-align: justify;
  width: 400px;
  float:right;
  margin-left: 50px;
}

.cardTitle{
  margin: 30px;
  text-decoration: underline;
}

#photoTeam{
  display: flex;
  flex-wrap: wrap;
}

.portrait{
  margin: 5px;
  height: 100%;
}

</style>