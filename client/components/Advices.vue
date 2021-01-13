<template>
  <div class="row">
    <div class="leftcolumn">
      <div class="card">
        <h2>CONSULTER LES CONSEILS DE NOS EXPERTS</h2>

        <div class="fakeimg" style="height: 200px">Image</div>
        <p>Insérer une description</p>
      </div>
      <div class="card">
        <h2>TITRE DEUXIEME</h2>

        <div class="fakeimg" style="height: 200px">Image</div>
        <p>une autre description</p>
      </div>
    </div>
    <div class="rightcolumn">
      <div class="card">
        <h2>QUI SOMMES NOUS</h2>
        <div class="fakeimg" style="height: 100px">Image</div>
        <p>Nous sommes les créateurs du projet blala</p>
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
        <p>blablabla</p>
      </div>
    </div>
  </div>
</template>

<style>
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
  width: 75%;
}

/* Right column */
.rightcolumn {
  float: left;
  width: 25%;
  padding-left: 20px;
}

/* Fake image */
.fakeimg {
  background-color: #aaa;
  width: 100%;
  padding: 20px;
}

/* Add a card effect for articles */
.card {
  background-color: white;
  padding: 20px;
  margin-top: 20px;
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
</style>