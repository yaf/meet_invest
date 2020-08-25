<template>
  <div class="accueil">

<!-- Bannière intro "Accroche" -->
    <div class="banner">
      <div class="left-box">
        <h1 class="yellow">MEETINVEST : <br>rencontrez des entrepreneurs qui vous correspondent</h1>
        <Bouton :title="text"></Bouton>
      </div>

      <div class="right-box">
        <h2 class="yellow">Notre vision :</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <h2 class="yellow">Nos missions : </h2>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>

      </div>
    </div>

<!-- Bloc fonctionnement avec pictos et cards -->
    <div class="banner2">

      <div class="grid">
        <h2 class="block-title">Comment ça fonctionne ?</h2>

        <div class="step1 bg-yellow">
          <img src="@/assets/pictos/01_choose.png" class="card-img-top size80" alt="picto choisir">
          <h3>Étape 1</h3>
          <p>Je choisis le projet qui me correspond</p>
        </div>

        <div class="step2 bg-yellow">
          <img src="@/assets/pictos/05_meeting.png" class="card-img-top size80" alt="picto se rencontrer">
          <h3>Étape 2</h3>
          <p>Je rencontre le porteur de projet, on échange sur ses besoins et mes souhaits</p>
        </div>

        <div class="step3 bg-yellow">
          <img src="@/assets/pictos/06_contract.png" class="card-img-top size80" alt="picto contrat">
          <h3>Étape 3</h3>
          <p>On conclut et la collaboration démarre</p>
        </div>

      </div>

      </div>

<!-- Bloc Entrepreneurs à l'affiche -->
        <h2 class="block-title">Les entrepreneurs à l'affiche</h2>

        <div class="grid">
            <Carte v-for="projet in projets" :key="projet.id">
                <template v-slot:img>
                    <img src="@/assets/pictos/projet1.jpg" class="card-img-top" alt="image présentation du projet">
                    <!-- <img :src="projet.image"/> -->
                </template>
                <template v-slot:cardinfo>
                    <h5 class="card-title text-uppercase border p-1">{{ projet.titre }}</h5>
                    <p><small><i class="fas fa-tag"></i> {{ projet.categorie }}</small></p>
                    <h6 class="card-title text-justify"><small>Un projet porté par :</small> <span class="text-muted"><u>{{ projet.entrepreneur}}</u></span></h6>
                    <p class="card-text text-justify">{{ projet.description }}</p>
                    <p class="card-text border p-2">Montant recherché&nbsp;: {{ projet.financial_needs }}&nbsp;€</p>
                    <p class="card-text text-justify">{{ projet.other_needs }}</p>
                    <a href="" class="btn btn-warning" @click="goToProject(projet.id)">En savoir plus</a>
                </template>
            </Carte>
        </div>

        <!-- <div class="card" style="width: 18rem;">
          <img src="@/assets/entrepreneurs/01_woman.jpg" class="card-img-top" alt="image portrait entrepreneur">
          <div class="card-body">
            <h5 class="card-title">Entrepreneur 1</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-warning">Go somewhere</a>
          </div>
        </div>

      <div class="card" style="width: 18rem;">
        <img src="@/assets/entrepreneurs/01_woman.jpg" class="card-img-top" alt="image portrait entrepreneur">
        <div class="card-body">
          <h5 class="card-title">Entrepreneur 1</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" class="btn btn-warning">Go somewhere</a>
        </div>
      </div>

    <div class="card" style="width: 18rem;">
      <img src="@/assets/entrepreneurs/01_woman.jpg" class="card-img-top" alt="image portrait entrepreneur">
      <div class="card-body">
        <h5 class="card-title">Entrepreneur 1</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        <a href="#" class="btn btn-warning">Go somewhere</a>
      </div>
    </div> -->


<!-- Bloc À propos / contact -->
      <div class="banner grey">
        <div class="left-box">
          <h3>On est là pour vous !</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          <Bouton :title="text2"></Bouton>
        </div>
        <div class="right-box">
        </div>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Bouton from "@/components/Bouton";
import Carte from "@/components/Carte";

export default {
  name: 'Accueil',

  components:
    { Bouton, Carte },

  data() {
    return {
      text: "Découvrir",
      text2: "Plus d'infos",
      projets: "",
      cardTitle: "Ethically",
      cardFirstname: "Sophie",
      cardLastname: "Cheav",
      cardCategory: "Ecologie",
      cardDescription: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione ea, quaerat at libero perferendis necessitatibus illum facere officia. Velit aperiam in sequi suscipit nostrum blanditiis minus qui tenetur nisi voluptatibus",
      cardFinancialneeds: "10.000",
      cardOtherneeds: "Besoin de verdure",
    }
  },

  methods: {
      goToProject(identifiant) {
          this.$router.push({ path: `/entrepreneur-details/${identifiant}` });
      }
  },

  mounted() {
      const axios = require("axios");
      axios.get('http://localhost:3000/projets')
      .then(response => (this.projets = response.data))
  }

};
</script>

<style lang="scss">

  .banner {
    display: flex;
    justify-content: center;
    padding: 40px 100px;
  }

  .left-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
    margin-right: 70px;
  }

  .right-box {
    display: inline-flex;
    flex-direction: column;
    justify-content: right;
    text-align: right;
  }

  .banner2 {
    display: flex;
    background-color: #FBDF00;
    justify-content: space-around;
    padding: 20px 20px;
  }

  .banner2 img {
    margin-bottom: 5%;
  }

  .banner2 p {
    margin-top: 5%;
  }

  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2, 1fr 3fr;
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }

  .block-title {
    grid-column: 1 / 4;
    grid-row: 1 / 1;
    margin-top: 2%;
    margin-bottom: 5%;
  }

  .step1 {
    grid-column: 1 / 1;
    grid-row: 2 / 2;
  }

  .step1 img {
    width: 40%;
  }

  .step2 img {
    width: 40%;
    margin-bottom: 16%;
  }

  .step3 img {
    width: 40%;
    margin-bottom: 14%;
  }

  .bg-yellow {
    background-color: #FBDF00;
    border: none;
    justify-content: center;
  }

  .size80 {
    width: 80%;
  }

  .yellow {
    color: #FBDF00;
  }

  .grey {
    background-color: #E9E9EB;
    color: #2c3e50;
  }

  h1 {
    font-size: 2em;
    font-weight: bold;
  }

  h2 {
    font-size: 1.5em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.4em;
    font-weight: bold;
  }

  p {
    font-size: 1em;
  }

  .jselfend {
      justify-self: end;
  }

  .jselfstart{
      justify-self: end;
  }

  .ascenter {
      align-self: center;
  }

  .satisfy {
  font-family: 'Satisfy', cursive;
  }

  .bgy {
      background-color: #f9dc4b;
  }
  
</style>
