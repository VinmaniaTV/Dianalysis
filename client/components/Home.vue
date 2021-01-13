<template>
  <div>
    <navbar :connected="connected" @log-out="logOut"></navbar>
    <div id="showcase">
      <div>
        <h1>Bienvenue sur Dianalysis</h1>
      </div>
      <div>
        <p>
          Dianalysis est une plateforme permettant aux patients atteint du
          Diabète type II de pouvoir bénéficier d'un suivi de leur
          alientation.<br />
          Cet outil est développé dans un but éducatif et convient à donner des
          suggestions non exhaustives.<br />
          L'utilisation de Dianalysis ne remplace en aucun cas une consultation
          auprès de votre médecin traitant.
        </p>
      </div>
    </div>

    <section>
      <div id="us">
        <h3>Qui sommes-nous ?</h3>
        <div class="element content">
          <article>
            Nous sommes une équipe de 3 étudiants en cursus ingénieur à EFREI
            Paris.<br />Nous aspirons à proposer Dianalysis comme projet afin de
            montrer que Technologie peut rimer avec Santé tout en proposant un
            service pouvant facilier la vie des patients.<br />
            Notre devise : "Des outils pour tous, un monde meilleur."
          </article>
          <aside>
            <img src="./img/efrei.jpg" alt="img" />
          </aside>
        </div>
      </div>
      <div id="about">
        <h3>Ce que propose Dianalysis</h3>
        <div class="element">
          <h4>Un suivi de son alimentation</h4>
          <div class="content">
            <aside>
              <img src="./img/stats.jpg" alt="img" />
            </aside>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </article>
          </div>
        </div>
        <div class="element">
          <h4>Des conseils adaptés</h4>
          <div class="content">
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </article>
            <aside>
              <img src="./img/advices.jpg" alt="img" />
            </aside>
          </div>
        </div>
        <div class="element">
          <h4>Un large panel d'informations</h4>
          <div class="content">
            <aside>
              <img src="./img/knowledges.jpg" alt="img" />
            </aside>
            <article>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </article>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const Navbar = window.httpVueLoader("./components/Navbar.vue");
module.exports = {
  props: {
    connected: { type: Boolean }
  },
  components: {
    Navbar,
  },
  methods: {
    logOut () {
      this.$emit('log-out')
    },
  }
}
</script>

<style scoped>
#showcase {
  background-image: url("../img/bgHome.jpg");
  height: calc(100vh - 70px);
  color: #fff;
  text-shadow: 0px 0px 10px #000;
  padding: 3em;
  justify-content: center;
  display: flex;
  flex-direction: column;
}

h1 {
  font-size: 80px;
  text-align: center;
  margin-bottom: 80px;
}

#showcase p {
  font-size: 20px;
  text-align: center;
}

h3 {
  text-align: center;
  font-size: 40px;
  margin-bottom: 20px;
}

section .element {
  margin: auto 20%;
}

section .content {
  display: flex;
}

article,
aside {
  flex: 1;
}

aside img {
  width: 100%;
  border-radius: 4px;
}

section article,
section aside {
  margin: 20px;
}

section article {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

#us {
  padding: 50px 0;
}

#about {
  background-color: #efefef;
  padding: 50px 0;
}

#about div,
#us div {
  padding: 10px 0;
}

h4 {
  padding-top: 30px;
  font-size: 30px;
}
</style>