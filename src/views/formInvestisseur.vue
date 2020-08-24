<template>
    <div class="forminvestisseur border bgYellow ">
        <h1 class="mt-5">Inscrivez-vous !</h1>
        <p><small>( C'est gratuit ♥︎ )</small></p>
        <p v-if="success">Votre inscription a bien été effectuée!</p>
        <form class="p-4">
            <div class="form-row mb-4">
                <div class="form-group col-md-6">
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
            <div class="form-row mb-4">
                <div class="form-group mb-5 col-md-6">
                    <label for="amount_to_invest"><strong>Quel montant souhaitez-vous investir?</strong></label>
                    <input type="number" class="form-control" name="amount_to_invest">
                </div> 
                <div class="form-group mb-5 col-md-6">
                    <label for="profitability"><strong>Quelle rentabilité annuelle souhaitez-vous?</strong></label>
                    <input type="number" class="form-control" name="profitability">
                </div> 
            </div>
            <div class="form-group mb-5">
                <label for="type-project"><strong>Quelles catégories de projet vous intéresse ?</strong></label>
                <div class="form-check">
                    <input class="form-check-input mr-2" type="checkbox" value="education" name="type_project">
                    <label class="form-check-label mr-5" for="type_project">Éducation</label>
                    <input class="form-check-input mr-2" type="checkbox" value="ecologie" name="type_project">
                    <label class="form-check-label mr-5" for="type_project">Écologie</label>
                    <input class="form-check-input mr-2" type="checkbox" value="social" name="type_project">
                    <label class="form-check-label mr-5" for="type_project">Social</label>
                    <input class="form-check-input mr-2" type="checkbox" value="emploi" name="type_project">
                    <label class="form-check-label mr-5" for="type_project">Emploi</label>
                    <input class="form-check-input mr-2" type="checkbox" value="mixite" name="type_project">
                    <label class="form-check-label mr-5" for="type_project">Mixité</label>
                </div>  
            </div>
            <div>
                <label for="risk"><strong>Quelle est votre appétence au risque ?</strong></label>
                <div class="form-group mb-5">
                <div class="form-check form-check-inline ml-3">
                    <input class="form-check-input" type="radio" name="risk" value="risk0">
                    <label class="form-check-label" for="risk">0</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="risk" id="inlineRadio1" value="risk1">
                    <label class="form-check-label" for="risk">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="risk" id="inlineRadio2" value="risk2">
                    <label class="form-check-label" for="risk">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="risk" id="inlineRadio3" value="risk3">
                    <label class="form-check-label" for="risk">3</label>
                </div>
            </div>
            </div>
            <div class="mb-5">
                <label for="why_invest"><strong>Pourquoi souhaitez-vous investir ?</strong></label>
                 <div class="form-group">
                    <div class="form-check form-check-inline ml-3">
                        <input class="form-check-input" type="radio" name="why_invest" value="rentabilite annuelle">
                        <label class="form-check-label" for="why_invest">Rentabilité annuelle</label>
                    </div>
                    <div class="form-check form-check-inline ml-3">
                        <input class="form-check-input" type="radio" name="why-invest" value="aider au developpement de projet">
                        <label class="form-check-label" for="why_invest">Aider au développement de projet</label>
                    </div>
                    <div class="form-check form-check-inline ml-3">
                        <input class="form-check-input" type="radio" name="why-invest" value="rentabilite et developpement de projet">
                        <label class="form-check-label" for="why_invest">Rentabilité et développement de projet</label>
                    </div>
                </div>
            </div>
            <div class="form-row mb-5">
                <div class="form-group col-md-6">
                    <label for="password"><strong>Mot de passe</strong></label>
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
    name: "Forminvestisseur",

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
            amount_to_invest: "",
            profitability: "",
            type_project: "",
            risk: "",
            why_invest: "",
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
        //         amount_to_invest: this.amount-to-invest,
        //         profitability: this.profitability,
        //         type_project: this.type-project,
        //         risk: this.risk,
        //         why_invest: this.why_invest,
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
        //         this.amount_to_invest = "",
        //         this.profitability = "",
        //         this.type_project = "",
        //         this.risk = "",
        //         this.why_invest = "",
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

    .forminvestisseur {
        margin: 10vh 10vw;
    }

    .bgYellow {
        background-color: #EFEFEF;
    }

</style>