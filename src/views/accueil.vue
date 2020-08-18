<template>
  <div class="accueil">
    <Header></Header>

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

<!-- Bloc fonctionnement avec pictos -->
    <div class="banner2">
      <h3 class="block-title">Comment ça fonctionne ?</h3>
      <div class="picto-case">
        <img src="@/assets/pictos/01_choose.png" alt="picto choisir">
        <p>Je choisis le projet qui me correspond</p>
      </div>
      <div class="picto-case">
        <img src="@/assets/pictos/02_subscribe.png" alt="picto inscription">
        <p>Je m’inscris sur la plateforme</p>
      </div>
      <div class="picto-case">
        <img src="@/assets/pictos/03_contact.png" alt="picto contact">
        <p>L’équipe me contacte</p>
      </div>
      <div class="picto-case">
        <img src="@/assets/pictos/04_exchange.png" alt="picto echanger">
        <p>Échanges entre mes attentes et les besoins des entrepreneurs</p>
      </div>
      <div class="picto-case">
        <img src="@/assets/pictos/05_meeting.png" alt="picto se rencontrer">
        <p>On se rencontre</p>
      </div>
      <div class="picto-case">
        <img src="@/assets/pictos/06_contract.png" alt="picto contrat">
        <p>On signe le contrat et je verse les fonds</p>
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

    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/header";
import Footer from "@/components/footer";
import Bouton from "@/components/Bouton";

export default {
  name: 'Accueil',

  components:
    { Header, Footer, Bouton },

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
    padding: 20px 20px;
  }

  .left-box {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    text-align: left;
    margin-right: 50px;
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

  .picto-case {
    flex-direction: column;
    width: 100px;
    height: auto;
  }

  .center-align {

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
