<template>
    <div class="header grid">
        <div class="ascenter font2"><i class="fas fa-piggy-bank"></i></div>
        <div class="ascenter"><h2 font-weight-bold>MEET INVEST</h2></div>
        <div class="ascenter font2"><i class="fas fa-bars"></i></div>
    </div>
</template>

<script>
export default {
    name: "Header",
}
</script>

<style lang="scss">

    .header {
        margin: 3vh 0;
    }

    .font2 {
        font-size: 2em;
    }

    .grid {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .ascenter {
        align-self: center;
    }

</style>