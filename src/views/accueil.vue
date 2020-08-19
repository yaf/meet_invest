<template>
  <div class="accueil">

<!-- Bannière intro "Accroche" -->
    <div class="banner">
      <div class="left-box">
        <h2>MEETINVEST : <br>rencontrez des entrepreneurs qui vous correspondent</h2>
        <h3>Notre vision : <br>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
        <h3>Nos missions : </h3>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
      </div>

      <div class="right-box">
        <Bouton :title="text"></Bouton>
      </div>
    </div>

<!-- Bloc fonctionnement avec pictos et cards -->
    <div class="banner2">
      <h3 class="block-title">Comment ça fonctionne ?</h3>

      <div class="row row-cols-1 row-cols-md-6">
        <div class="col mb-4">
          <div class="card h-100 bg-blue">
            <img src="@/assets/pictos/01_choose.png" class="card-img-top size80" alt="picto choisir">
            <div class="card-body">
              <h5 class="card-title">Étape 1</h5>
              <p class="card-text">Je choisis le projet qui me correspond</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100 bg-blue">
            <img src="@/assets/pictos/02_subscribe.png" class="card-img-top size80" alt="picto inscription">
            <div class="card-body">
              <h5 class="card-title">Étape 2</h5>
              <p class="card-text">Je m’inscris sur la plateforme</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100 bg-blue">
            <img src="@/assets/pictos/03_contact.png" class="card-img-top size80" alt="picto contact">
            <div class="card-body">
              <h5 class="card-title">Étape 3</h5>
              <p class="card-text">L’équipe me contacte</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100 bg-blue">
            <img src="@/assets/pictos/04_exchange.png" class="card-img-top size80" alt="picto échanger">
            <div class="card-body">
              <h5 class="card-title">Étape 4</h5>
              <p class="card-text">Échanges entre mes attentes et les besoins des entrepreneurs</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100 bg-blue">
            <img src="@/assets/pictos/05_meeting.png" class="card-img-top size80" alt="picto se rencontrer">
            <div class="card-body">
              <h5 class="card-title">Étape 5</h5>
              <p class="card-text">On se rencontre</p>
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100 bg-blue">
            <img src="@/assets/pictos/06_contract.png" class="card-img-top size80" alt="picto contrat">
            <div class="card-body">
              <h5 class="card-title">Étape 6</h5>
              <p class="card-text">On signe le contrat et je verse les fonds</p>
            </div>
          </div>
        </div>
      </div>
    </div>

<!-- Bloc Entrepreneurs à l'affiche -->
      <div class="banner2">
        <h3 class="block-title">Les entrepreneurs à l'affiche</h3>
        <div class="card" style="width: 18rem;">
          <img src="@/assets/entrepreneurs/01_woman.jpg" class="card-img-top" alt="image portrait entrepreneur">
          <div class="card-body">
            <h5 class="card-title">Entrepreneur 1</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
      </div>

<!-- Bloc À propos / contact -->
      <div class="banner">
        <div class="left-box">
          <h3>On est là pour vous !</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <div class="right-box">
          <Bouton :title="text2"></Bouton>
        </div>
      </div>

  </div>
</template>

<script>
// @ is an alias to /src
import Bouton from "@/components/Bouton";

export default {
  name: 'Accueil',

  components:
    { Bouton },

  data() {
    return {
      text: "Découvrir",
      text2: "Plus d'infos",
    }
  }

};
</script>

<style lang="scss">

  .banner {
    display: flex;
    background-color: #F2A30F;
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
    justify-content: center;
  }

  .banner2 {
    display: flex;
    background-color: #4A44F2;
    justify-content: space-around;
    padding: 20px 20px;
    flex-wrap: wrap;
  }

  .banner2 img {
    margin-bottom: 5%;
  }

  .banner2 p {
    margin-top: 5%;
  }

  .block-title {
    flex: 1 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }

  .bg-blue {
    background-color: #4A44F2;
    border: none;
    justify-content: center;
  }

  .size80 {
    width: 80%;
  }

  h2 {
    font-size: 2em;
    font-weight: bold;
  }

  h3 {
    font-size: 1.5em;
    font-weight: bold;
  }

  p {
    font-size: 1em;
  }

</style>
