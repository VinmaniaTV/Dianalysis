<template>
  <section>
    <nav>
      <h2>Bon retour #Guest#</h2>
    </nav>
    <div>
      <article>
        <h3>Accueil</h3>
        <ul>
          <li>
            <a class="nav" href=""> Votre programme </a>
          </li>
          <li>
            <a class="nav" href=""> Consulter notre liste d'aliments </a>
          </li>
          <li>
            <a class="nav" href=""> Nos conseils </a>
          </li>
          <li>
            <a class="nav" href=""> Votre historique </a>
          </li>
        </ul>
      </article>
    </div>
  </section>
</template>

<style scoped>
section {
  background-color: #fcfcfc;
}

nav {
  background: url("../img/saltBg.jpg");
  height: 15em;
}

nav h2 {
  font-family: "Montserrat", sans-serif;
  font-size: 40px;
  margin: 0;
  font-weight: 900;
  letter-spacing: 0.966667px;
  line-height: 16.8px;
  position: relative;
  left: 1em;
  top: calc(100% - 70px);
}

article {
  margin: 0 10%;
  background-color: #eeeeee;
}

div h3 {
  font-size: 30px;
  padding: 40px;
  font-weight: 900;
  letter-spacing: 0.966667px;
  line-height: 16.8px;
  position: relative;
  left: 1em;
  top: calc(100% - 70px);
}

h1 {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
ul li {
  list-style-type: none;
  color: green;
  background-color: rgb(216, 210, 210);
  padding: 10px;
  font-size: 30px;
  border-radius: 1em;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
}
ul li:hover {
  background-color: rgb(65, 221, 65);
  transition: 0 2s all;
}
a.nav {
  text-decoration: none;
}
</style>