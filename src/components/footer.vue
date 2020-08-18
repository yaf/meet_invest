<template>
    <div class="footer py-4 border">
        <div class="container grid">
                <div class="container d-flex flex-column align-items-start ascenter">
                    <div class="text-uppercase mb-2 font-weight-bold">Meet Invest</div>
                    <div>xx rue xxxxxxx</div>
                    <div>xxxxx - VILLE</div>
                    <div>meetinvest@gmail.com</div>
                    <div>xx. xx. xx. xx. xx</div>
                </div>
                <div class="container ascenter">
                     <div class="container d-flex flex-column">
                        <h4><a href="#" class="text-uppercase text-reset font-weight-bold">Meet Invest</a></h4> 
                        <small><a href="#" class="text-reset">Mentions Légales</a></small>      
                        <small><a href="#" class="text-reset">CGU</a></small>
                    </div>
                </div>
                <div class="jselfend ascenter">
                        <div class="container d-flex flex-column align-items-start">
                        <div class="text-uppercase mb-2 font-weight-bold">Suivez-nous</div>
                        <div><a href="" class="text-reset"><i class="fab fa-facebook-f"></i> Facebook</a></div>
                        <div><a href="" class="text-reset"><i class="fab fa-twitter"></i> Twitter</a></div>
                        <div><a href="" class="text-reset"><i class="fab fa-instagram"></i> Instagram</a></div>   
                    </div>  
                </div>        
        </div>
        <div class="container d-flex justify-content-around align-items-center mt-5">
            
            <small>Copyright &copy; MeetInvest</small>
            
        </div>
    </div>
</template>

<script>
export default {
    name: "Footer",

}
</script>

<style lang="scss">

.grid {
    display: grid;
	grid-template-columns: 1fr 1fr 1fr;
}

.jselfend
{
	justify-self: end;
}

.ascenter {
    align-self: center;
}

</style>