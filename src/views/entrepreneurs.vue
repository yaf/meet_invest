<template>
    <div class="entrepreneurs">
        <div class="border p-5 bgy">
            <h1 class="text-justify mb-4 satisfy">Trouvez le projet qui vous correspond</h1>
            <p class="text-justify pr-5">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, optio, aut esse dolores quibusdam nostrum soluta voluptates dicta iure ullam officiis non nulla? Molestias cumque doloremque sunt! Voluptates, odit tempora.</p>
            <form>
                <div class="form-group row">
                    <label for="category " class="col-sm-3 col-form-label"><strong>Choisissez une catégorie :</strong></label>
                    <select class="form-control col-sm-2">
                        <option name="education">Éducation</option>
                        <option name="ecologie">Écologie</option>
                        <option name="mixite">Mixité</option>
                        <option name="emploi">Emploi</option>
                        <option name="tech">Tech</option>
                        <option name="social">Social</option>
                        <option name="handicap">Handicap</option>
                    </select>
                    <button type="button" class="btn mb-2 ml-5 btn-dark">Filtrer les projets</button>
                </div>
            </form>
        </div>
        <div class="border p-4 mt-5">
            <h2 class="mb-5 border p-4">Tous les projets</h2>
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
            <!-- <div class="grid">
                <Card :project_title="cardTitle" :firstname="cardFirstname" :lastname="cardLastname" :category="cardCategory" :description="cardDescription" :financial_needs="cardFinancialneeds" :other_needs="cardOtherneeds" class="item1"></Card>
                <Card :project_title="cardTitle" :firstname="cardFirstname" :lastname="cardLastname" :category="cardCategory" :description="cardDescription" :financial_needs="cardFinancialneeds" :other_needs="cardOtherneeds" class="item2"></Card>
                <Card :project_title="cardTitle" :firstname="cardFirstname" :lastname="cardLastname" :category="cardCategory" :description="cardDescription" :financial_needs="cardFinancialneeds" :other_needs="cardOtherneeds" class="item3"></Card>
                <Card :project_title="cardTitle" :firstname="cardFirstname" :lastname="cardLastname" :category="cardCategory" :description="cardDescription" :financial_needs="cardFinancialneeds" :other_needs="cardOtherneeds" class="item4"></Card>
            </div> -->
        </div>  
    </div>
</template>

<script>
import Carte from "@/components/Carte";

export default {
    name: "Entrepreneurs",

    components: { Carte },

    data() {
        return {
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

}

    


</script>

<style lang="scss">

    .entrepreneurs {
        margin: 10vh 10vw;

        & .grid{
            display: grid;
            grid-template-columns: repeat(4, 1fr);
            grid-gap: 2em;
        }
    }

    .satisfy {
    font-family: 'Satisfy', cursive;
    }

    .bgy {
        background-color: #f9dc4b;
    }

</style>
