<template>
  <div class="accueil">
    <Header></Header>

    <div class="banner">

      <div class="left-box">
        <h2>MEETINVEST : </br>
          rencontrez des entrepreneurs qui vous correspondent</h2>
        <h3>Notre vision : </br>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.</h3>
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
    <Footer></Footer>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Bouton from "@/components/Bouton";

export default {
  name: 'Accueil',

  components:
    { Header, Footer, Bouton },

  data() {
    return {
      text: "Découvrir"
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
