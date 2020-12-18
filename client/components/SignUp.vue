<template>
  <section>
    <div id="container">
      <form action="page d'inscription" method="post">
        <h1>Inscription</h1>

        <div>
          <label for="name">Nom* :</label>
          <input type="text" id="name" name="user_name" required />
        </div>
        <div>
          <label for="Prénom">Prénom*:</label>
          <input type="e" id="Prénom" name="user_firstname" required />
        </div>
        <div>
          <label for="mail">E-mail* :</label>
          <input type="email" id="mail" name="user_mail" required />
        </div>
        <div>
          <label for="pseudo">Pseudo* :</label>
          <input type="text" id="pseudo" name="user_pseudoname" required />
        </div>
        <div>
          <label for="Numéro">Numéro de Téléphone:</label>
          <input type="text" id="Numéro" name="user_number" />
        </div>

        <input type="submit" value="S'inscrire"/>
      </form>
    </div>
  </section>
</template>

<style scoped>
section {
  background: linear-gradient(#071e38, #040614);
  height: calc(100vh - 371px);
  display: flex;
  align-items: center;
  font-family: "Montserrat", sans-serif;
}
#container {
  justify-content: center;
  align-content: center;
  margin: 0 auto;
}

#image {
  height: 150px;
  width: 150px;
  display: block;
  margin: auto;
}

#container h1 {
  margin: 0 auto;
  padding-bottom: 10px;
  border-radius: 2px;
  text-align: center;
}

form {
  border-radius: 1em;

  padding: 30px;
  border: 1px solid #f1f1f1;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 2px;
}

form div + div {
  margin-top: 1.5em;
}

input[type="submit"] {
  background-color: #e59c3a;
  color: white;
  padding: 14px 20px;
  margin: 20px 0 8px;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #e59c3a;
}

input[type="submit"]:hover {
  background-color: white;
  color: #e59c3a;
  border: 1px solid #e59c3a;
}

label {
  /* Pour être sûrs que toutes les étiquettes ont même taille et sont correctement alignées */
  display: inline-block;
  color: black;
  width: 90px;
  text-align: right;
}

input,
textarea {
  /* Pour s'assurer que tous les champs texte ont la même police.
     Par défaut, les textarea ont une police monospace */
  font: 1em sans-serif;

  /* Pour que tous les champs texte aient la même dimension */
  width: 300px;
  box-sizing: border-box;

  /* Pour harmoniser le look & feel des bordures des champs texte */
  border: 1px solid #999;
}

form div input {
  height: 30px;
  border-radius: 3px;
}

input:focus,
textarea:focus {
  /* Pour souligner légèrement les éléments actifs */
  border-color: #000;
}

form div {
  margin: 20px;
}
</style>