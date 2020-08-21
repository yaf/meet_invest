<template>
    <div class="apropos">
        <div>
            <h1 class="text-uppercase font-weight-bold mb-5 p-4">à propos de nous</h1>
        </div>
        <div class="grid-C2 jaround mb-5 mt-5">
            <div class="ascenter item1">
                <div>
                    <h2 class="text-uppercase font-weight-bold text-left mb-4">Qui sommes-nous ?</h2>
                    <p class="text-justify mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, unde dolores ullam delectus quidem nihil, et autem officia nulla temporibus porro ipsa id dolor? Quasi eum tempora laudantium enim sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam accusantium dolorem saepe atque nostrum quisquam dicta itaque harum. Quibusdam accusamus tempore nam cum necessitatibus dolor atque quam reiciendis ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus hic neque eligendi odio, laudantium numquam distinctio, repellendus doloremque ducimus qui dolor corporis? Excepturi voluptate placeat voluptates harum accusamus distinctio.</p>
                </div>
                <div>
                    <h2 class="text-uppercase font-weight-bold text-left mb-4">Ce qu'on vous propose</h2>
                    <p class="text-justify">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, unde dolores ullam delectus quidem nihil, et autem officia nulla temporibus porro ipsa id dolor? Quasi eum tempora laudantium enim sunt! Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nam accusantium dolorem saepe atque nostrum quisquam dicta itaque harum. Quibusdam accusamus tempore nam cum necessitatibus dolor atque quam reiciendis ab! Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis voluptatibus hic neque eligendi odio, laudantium numquam distinctio, repellendus doloremque ducimus qui dolor corporis? Excepturi voluptate placeat voluptates harum accusamus distinctio.</p>
                </div>
            </div>
            
            <img src="http://lorempixel.com/400/300/" alt="image de MeetInvest" class="ascenter item2">
        </div>
       

    </div> 
</template>

<script>
export default {
    name: "APropos",

}
</script>

<style lang="scss" scoped>

.apropos {
    margin: 10vh 10vw;
}

.grid-C2 {
        display: grid;
        grid-template-columns: repeat(8, 1fr);
        grid-template-areas: 
        "a a a a b b b b"
        "a a a a b b b b";
        grid-gap: 10px;
    }
    .item1 {
        grid-area: a;
    }
    .item2 {
        grid-area: b;
    }
    .jselfend
    {
        justify-self: end;
    }
    .ascenter {
        align-self: center;
    }
    .jaround {
        justify-items: center;
    }

</style>