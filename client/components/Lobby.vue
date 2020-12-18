<template>
  <nav>
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
  </nav>
</template>

<style>
body {
  background-color: grey;
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
  transition: 0, 2s all;
}
a.nav {
  text-decoration: none;
}
</style>