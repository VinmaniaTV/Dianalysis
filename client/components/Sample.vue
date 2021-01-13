<template>
  <form>
    <div>
      <label for="uname">Prendre une mesure : </label>
      <input
        type="text"
        id="uname"
        name="name"
        placeholder="Saisir un seul mot, en minuscules"
        size="30"
      />
    </div>
    <div>
      <button>Envoyer</button>
    </div>
  </form>
</template>

<style>
p {
  text-align: center;
  margin-top: 50px;
}

body {
  text-align: center;
  margin-top: 300px;
}
div {
  margin-bottom: 10px;
  position: relative;
}

input + span {
  padding-right: 30px;
}

input:invalid + span:after {
  position: absolute;
  content: "✖";
  padding-left: 5px;
}

input:valid + span:after {
  position: absolute;
  content: "✓";
  padding-left: 5px;
}
</style>