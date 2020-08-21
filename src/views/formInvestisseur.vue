<template>
    <div class="forminvestisseur border bgYellow ">
        <h1 class="mt-5 mt-5">Inscrivez-vous !</h1>
        <form class="p-4">
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="lastname">Nom</label>
                    <input type="text" class="form-control" id="lastname">
                 </div>   
                <div class="form-group col-md-6">
                    <label for="firstname">Prénom</label>
                    <input type="text" class="form-control" id="firstname">
                </div>  
            </div>
            <div class="form-group">
                <label for="address">Adresse</label>
                <input type="text" class="form-control" id="address">
            </div>  
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="cp">Code Postal</label>
                    <input type="text" class="form-control" id="cp">
                </div> 
                <div class="form-group col-md-6">
                    <label for="city">Ville</label>
                    <input type="text" class="form-control" id="city">
                </div>  
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="tel">Téléphone</label>
                    <input type="number" class="form-control" id="tel">
                </div> 
                <div class="form-group col-md-6">
                    <label for="email">Email</label>
                    <input type="email" class="form-control" id="email">
                </div>
            </div>
            <div class="form-group">
                <label for="amount_invest">Quel montant souhaitez-vous investir?</label>
                <input type="number" class="form-control" id="amount_invest" name="amount_invest">
            </div> 
            <div class="form-group">
                <label for="profitability">Quelle rentabilité annuelle souhaitez-vous?</label>
                <input type="number" class="form-control" id="profitability" name="profitability">
            </div> 
            <div class="form-group">
                <label for="exampleFormControlSelect2">Quelles catégories de projet vous intéresse ?</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>Éducation</option>
                    <option>Écologie</option>
                    <option>Social</option>
                    <option>Mixité</option>
                    <option>Emploi</option>
                </select>
            </div>
            <div class="form-group">
                <label for="exampleFormControlSelect2">Quelle est votre appétence au risque ?</label>
                <div class="form-check form-check-inline ml-3">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="risk0">
                    <label class="form-check-label" for="risk1">0</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" value="risk1">
                    <label class="form-check-label" for="risk1">1</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" value="risk2">
                    <label class="form-check-label" for="risk2">2</label>
                </div>
                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio3" value="risk3">
                    <label class="form-check-label" for="risk3">3</label>
                </div>
            </div>
            
            <div class="form-group">
                <label for="exampleFormControlSelect2">Pourquoi souhaitez-vous investir ?</label>
                <select multiple class="form-control" id="exampleFormControlSelect2">
                    <option>Rentabilité annuelle</option>
                    <option>Aider au développement de projet</option>
                    <option>Rentabilité et développement de projet</option>
                </select>
            </div>
            <div class="form-row">
                <div class="form-group col-md-6">
                    <label for="password">Mot de passe</label>
                    <input type="password" class="form-control" id="password" name="password">
                </div>
                <div class="form-group col-md-6">
                    <label for="passwordconfirm">Confirmez votre mot de passe</label>
                    <input type="password" class="form-control" id="passwordconfirm" name="passwordconfirm">
                </div>
            </div>
           
            <button type="submit" class="btn">S'inscrire</button>
        </form>
    </div>
</template>

<script>

export default {
    name: "Forminvestisseur",

    data() {
        return{
            name: "S'inscrire"
        }
    },

}
</script>

<style>

.form {
    margin: 10vh 10vw;
}

.bgYellow {
    background-color: #fadd4b;
}

</style>