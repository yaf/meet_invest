<template>
    <div class="header">
        <div class="grid">
            <router-link to="/" class="text-reset">
                <h2 class="font-weight-bold fontTitle astart">Meet Invest</h2>
            </router-link>
            <button class="font2 aend hamburger"><i class="fas fa-bars fontLogo"></i></button>
        </div> 
    </div>
</template>

<script>
export default {
    name: "header",
};
</script>

<style lang="scss" scoped>

    .header {
        background-image: url('../assets/pictos/wall.jpg');
        background-size: cover;
        margin: 0; 
        padding: 5vh 5vw;
        font-family: 'Satisfy', cursive;
    }

    .fontTitle {
        font-size: xx-largeal;
    }

    .fontLogo {
        font-size: x-large;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr;
        margin: 3vh 5vw;
    }

    .astart {
        justify-self: start;
    }

    .aend {
        justify-self: end;
    }

    .hamburger {
        border: none;
        background-color: inherit;
    }
</style>
