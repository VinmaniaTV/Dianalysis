<template>
  <section>
    <div id="container">
      <!-- zone de connexion -->

      <form action="verification.php" method="POST">
        <h1>Connexion</h1>

        <label><b>Nom d'utilisateur</b></label>
        <input
          type="text"
          placeholder="Entrer le nom d'utilisateur"
          name="username"
          required
        />

        <label><b>Mot de passe</b></label>
        <input
          type="password"
          placeholder="Entrer le mot de passe"
          name="password"
          required
        />

        <input type="submit" id="submit" value="Connexion" />
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
  font-family: 'Montserrat', sans-serif;
}
#container {
  width: 400px;
  margin: 0 auto;
}

/* Bordered form */
form {
  padding: 30px;
  border: 1px solid #f1f1f1;
  background: #fff;
  box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.2), 0 5px 5px 0 rgba(0, 0, 0, 0.24);
  border-radius: 2px;
}

#container h1 {
  margin: 0 auto;
  padding-bottom: 10px;
  border-radius: 2px;
  text-align: center;
}

/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 4px;
}

/* Set a style for all buttons */
input[type="submit"] {
  background-color: #53af57;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 10px;
  border: 1px solid #53af57;
}

input[type="submit"]:hover {
  background-color: white;
  color: #53af57;
  border: 1px solid #53af57;
}
</style>