<template>
    <div class="formentrepreneur border bgYellow ">
        <h1 class="mt-5">Inscrivez-vous !</h1>
        <p><small>( C'est gratuit ♥︎ )</small></p>
        <p v-if="success">Votre inscription a bien été effectuée!</p>

        <!-- partie 1 infos entrepreneur -->
        <div class="entrepreneur-id">

          <h2>Vos coordonnées</h2>
          <form class="p-4">
            <div class="form-row mb-2">
              <div class="form-group col-md-3">
                <label for="lastname"><strong>Nom</strong></label>
                <input type="text" class="form-control" name="lastname">
              </div>
              <div class="form-group col-md-6">
                <label for="firstname"><strong>Prénom</strong></label>
                <input type="text" class="form-control" name="firstname">
              </div>
            </div>
            <div class="form-group mb-4">
              <label for="address"><strong>Adresse</strong></label>
              <input type="text" class="form-control" name="address">
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="cp"><strong>Code Postal</strong></label>
                <input type="text" class="form-control" name="cp">
              </div>
              <div class="form-group col-md-6">
                <label for="city"><strong>Ville</strong></label>
                <input type="text" class="form-control" name="city">
              </div>
            </div>
            <div class="form-group mb-4">
              <label for="country"><strong>Pays</strong></label>
              <input type="text" class="form-control" name="country">
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="phone"><strong>Téléphone</strong></label>
                <input type="number" class="form-control" name="phone">
              </div>
              <div class="form-group col-md-6">
                <label for="mail"><strong>Email</strong></label>
                <input type="email" class="form-control" name="mail">
              </div>
            </div>
          </form>

        </div>

        <!-- partie 2 infos entreprise -->
        <div class="entreprise">
          <h2>Informations sur votre entreprise</h2>

          <form class="p-4">

            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="raison_sociale"><strong>Raison sociale</strong></label>
                <input type="text" class="form-control" name="raison_sociale">
              </div>
              <div class="form-group col-md-6">
                <label for="siret"><strong>Numéro siret</strong></label>
                <input type="number" class="form-control" name="siret">
              </div>
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="ca"><strong>Chiffre d'affaires</strong></label>
                <input type="text" class="form-control" name="ca">
              </div>
              <div class="form-group col-md-6">
                <label for="capital_social"><strong>Capital social</strong></label>
                <input type="number" class="form-control" name="capital_social">
              </div>
            </div>
            <div>
              <div class="form-group mb-5">
                <label for="financial_needs"><strong>Besoin financier</strong></label>
                <input type="number" class="form-control" name="financial_needs">
              </div>
            </div>
          </form>
        </div>

        <!-- partie 3 Le projet -->
        <div class="projet">
          <h2>Votre projet en quelques questions...</h2>
          <form class="p-4">

            <div class="form-row mb-2">
              <div class="form-group col-md-3">
                <label for="title"><strong>Nom de votre projet</strong></label>
                <input type="text" class="form-control" name="title">
              </div>
              <div class="form-group col-md-6">
                <label for="category"><strong>Choisissez une catégorie</strong></label>
                <select class="form-control col-sm-2">
                    <option name="education">Éducation</option>
                    <option name="ecologie">Écologie</option>
                    <option name="mixite">Mixité</option>
                    <option name="emploi">Emploi</option>
                    <option name="tech">Tech</option>
                    <option name="social">Social</option>
                    <option name="handicap">Handicap</option>
                </select>
              </div>
            </div>
            <div class="form-group mb-4">
              <label for="description"><strong>Décrivez-le en quelques lignes (5 max)</strong></label>
              <textarea id="description-area" class="form-control" name="description" rows="5" cols="33"></textarea>
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="financial_needs"><strong>Vos besoins financiers pour le réaliser</strong></label>
                <input type="number" class="form-control" name="financial_needs">
              </div>
              <div class="form-group col-md-6">
                <label for="other_needs"><strong>D'autres besoins ?</strong></label>
                <input type="text" class="form-control" name="other_needs">
              </div>
            </div>
            <!-- attention : partie chargement d'images / vidéos... -->
            <div class="form-group mb-4">
              <label for="image"><strong>Chargez une image d'illustration :</strong></label>
              <input type="" class="form-control" name="image">
            </div>
            <div class="form-row mb-4">
              <div class="form-group col-md-6">
                <label for="video"><strong>Chargez une vidéo :</strong></label>
                <input type="" class="form-control" name="video">
              </div>
            </div>
        </form>
      </div>

        <!-- Partie mot de passe etc. -->
        <form class="p-4">

            <div class="form-row mb-5">
                <div class="form-group col-md-6">
                    <label for="password"><strong>Choisissez un mot de passe :</strong></label>
                    <input type="password" class="form-control" id="password" name="password">
                </div>
                <div class="form-group col-md-6">
                    <label for="passwordconfirm"><strong>Confirmez votre mot de passe</strong></label>
                    <input type="password" class="form-control" id="passwordconfirm" name="passwordconfirm">
                </div>
            </div>

            <Bouton :title="title"></Bouton>
            <!-- <Bouton :title="title" :@click="postForm()"></Bouton> -->
        </form>
    </div>
</template>

<script>
    import Bouton from "@/components/Bouton";

export default {
    name: "Formentrepreneur",

    components: { Bouton },

    data() {
        return{
            title: "S'inscrire",
            firstname: "",
            lastname: "",
            address: "",
            cp: "",
            city: "",
            country: "",
            phone: "",
            mail: "",
            raison_sociale: "",
            siret: "",
            capital_social: "",
            ca: "",
            financial_needs: "",
            password: "",
            passwordconfirm: "",
            success: false,
        }
    },

    //methods: {
        // postForm() {
        //     const axios = require("axios");

        //     this.axios.post('urldelapi', {
        //         firstname: this.firstname,
        //         lastname: this.lastname,
        //         address: this.address,
        //         cp: this.cp,
        //         city: this.city,
        //         country: this.country,
        //         phone: this.phone,
        //         mail: this.mail,
        //         raison_sociale: this.raison_sociale,
        //         siret: this.siret,
        //         capital_social: this.capital_social,
        //         ca: this.ca,
        //         amount: this.amount,
        //         password: this.password,
        //         passwordconfirm: this.passwordconfirm
        //     })
        //     .then(() => {
        //         this.firstname = "",
        //         this.lastname = "",
        //         this.address = "",
        //         this.cp = "",
        //         this.city = "",
        //         this.country = "",
        //         this.phone = "",
        //         this.mail = "",
        //         this.raison_sociale = "",
        //         this.siret = "",
        //         this.capital_social = "",
        //         this.ca = "",
        //         this.amount = "",
        //         this.password = "",
        //         this.passwordconfirm = "",
        //         this.success = true;
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //     })
        // },
    //}

}
</script>

<style>

    .formentrepreneur {
        margin: 10vh 10vw;
    }

    .bgYellow {
        background-color: #EFEFEF;
    }

</style>
