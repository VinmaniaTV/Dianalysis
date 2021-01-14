<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div class="row">
      <div class="leftcolumn">
        <div class="card">
          <h2>CONSULTER LES CONSEILS DE NOS EXPERTS</h2>

          <div class="fakeimg" style="height: 200px">Image</div>
          <p>Insérer une description</p>
        </div>
        <div class="card">
          <h2>QU'EST-CE QUE LE DIABÈTE ?</h2><br>
          <img src="./img/diabeteSchema.png" alt="diabete petit schema" width="700px">
        </div>
      </div>
      <div class="rightcolumn">
        <div class="card">
          <h2>QUI SOMMES-NOUS ?</h2>
          <div class="fakeimg" style="height: 100px">Image</div>
          <p>Étudiant à l'école d'Efrei Paris nous vous proposons ici un groupe de service qui vous faciliteront votre quotidien.</p>
        </div>
        <div class="card">
          <h3>ACTUALITE</h3>
          <div class="fakeimg">Image</div>
          <br />
          <div class="fakeimg">Image</div>
          <br />
          <div class="fakeimg">Image</div>
        </div>
        <div class="card">
          <h3>REJOIGNEZ NOTRE COMMUNAUTE</h3>
          <p>Vous pouvez nous soutenir et discuter des améliorations via nos réseaux sociaux</p>
          <a href=""><img src="./img/instaLogo.png" alt="logo instagram" width="10%"> &nbsp;Instagram</a><br>
          <a href=""><img src="./img/twitterLogo.png" alt="logo twitter" width="10%" id="logotwitter"> &nbsp;Twitter </a>
          
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
  height: 500px;
  align-items: center;
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

</style>