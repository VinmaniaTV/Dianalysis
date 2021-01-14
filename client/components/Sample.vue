<template>
  <section>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <form @submit.prevent="addSample">
      <h1 class="titre_centre">Prise d'une mesure</h1>
      <table id="formMesure">
        <thead>
          <tr>
            <th>Aliments</th>
            <th>Quantité (en g)</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <label for="entrance">Entrée :</label>
              <select
                type="text"
                name="entrance"
                id="entrance"
                placeholder="Selectionnez l'entrée"
                v-model="newSample.entrance"
              >
                <option value="">Aucun</option>
                <option v-for="f in food" :key="f.id" :value="f.name">
                  {{ f.name }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="number"
                min="0.01"
                step=".01"
                id="quantityentrance"
                v-model="newSample.quantityentrance"
                placeholder="quantité"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="dish">Plat* :</label>
              <select
                type="text"
                name="dish"
                id="dish"
                placeholder="Selectionnez le plat"
                v-model="newSample.dish"
                required
              >
                <option value="">Aucun</option>
                <option v-for="f in food" :key="f.id" :value="f.name">
                  {{ f.name }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="number"
                min="0.01"
                step=".01"
                id="quantitydish"
                v-model="newSample.quantitydish"
                placeholder="quantité"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="accompaniment">Accompagnement :</label>
              <select
                type="text"
                name="accompaniment"
                id="accompaniment"
                placeholder="Selectionnez l'accompagnement"
                v-model="newSample.accompaniment"
              >
                <option value="">Aucun</option>
                <option v-for="f in food" :key="f.id" :value="f.name">
                  {{ f.name }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="number"
                min="0.01"
                step=".01"
                id="quantityaccompaniment"
                v-model="newSample.quantityaccompaniment"
                placeholder="quantité"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label for="dessert">Dessert :</label>
              <select
                type="text"
                name="dessert"
                id="dessert"
                placeholder="Selectionnez le dessert"
                v-model="newSample.dessert"
              >
                <option value="">Aucun</option>
                <option v-for="f in food" :key="f.id" :value="f.name">
                  {{ f.name }}
                </option>
              </select>
            </td>
            <td>
              <input
                type="number"
                min="0.01"
                step=".01"
                id="quantitydessert"
                v-model="newSample.quantitydessert"
                placeholder="quantité"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div>
        <button class="button_style" @click="addSample()">Envoyer</button>
      </div>
      <p id="errorSampleMessage"></p>
    </form>
  </section>
</template>

<script>
const Navbar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  props: {
    food: { type: Array, default: [] },
    connected: { type: Boolean },
  },
  components: {
    Navbar,
  },
  data() {
    return {
      newSample: {
        entrance: "",
        dish: "",
        accompaniment: "",
        dessert: "",
        quantityentrance: "",
        quantitydish: "",
        quantityaccompaniment: "",
        quantitydessert: "",
      },
    };
  },
  methods: {
    addSample() {
      if (
        document.getElementById("dish").value == "" ||
        document.getElementById("dish").value == null
      ) {
        document.getElementById("errorSampleMessage").innerHTML =
          "Sélectionnez au moins un plat.";
      } else if (
        (document.getElementById("dish").value != "" &&
          (document.getElementById("quantitydish").value <= 0 || document.getElementById("quantitydish").value == "")) ||
        (document.getElementById("entrance").value != "" &&
          (document.getElementById("quantityentrance").value <= 0 || document.getElementById("quantityentrance").value == "")) ||
        (document.getElementById("accompaniment").value != "" &&
          (document.getElementById("quantityaccompaniment").value <= 0 || document.getElementById("quantityaccompaniment").value == "")) ||
        (document.getElementById("dessert").value != "" &&
          (document.getElementById("quantitydessert").value <= 0 || document.getElementById("quantitydessert").value == ""))
      ) {
        document.getElementById("errorSampleMessage").innerHTML =
          "Sélectionnez une quantité pour le(s) aliment(s) sélectionné(s).";
      } else {
        this.$emit("add-sample", this.newSample);
      }
    },
    logOut() {
      this.$emit("log-out");
    },
  },
};
</script>

<style scoped>
p {
  text-align: center;
  margin-top: 50px;
}

body {
  text-align: center;
  margin-top: 300px;
}
div {
  position: relative;
}

section{
  height: calc(100vh - 320px);
  background-color: blue;
}

#formMesure{
  margin: auto auto;
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

p {
  color: red;
}

table{
  background-color: red;

}


</style>