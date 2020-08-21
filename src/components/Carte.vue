<template>
  <div class="carte">

    <div class="card" style="width: 18rem;" v-for="project in projects" :key="user.name">
      <img src="@/assets/entrepreneurs/01_woman.jpg" class="card-img-top" alt="image portrait entrepreneur">
      <div class="card-body">
        <h5 class="card-title">{{ project_title }}</h5>
        <h6 class="card-title">{{ firstname }} {{ lastname }}</h6>
        <p>{{ category }}</p>
        <p class="card-text">{{ description }}</p>
        <p class="card-text">{{ financial_needs }}</p>
        <p class="card-text">{{ other_needs }}</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: Carte,

  props: {
    project_title:{
      type: String,
      required: true,
    },
    firstname: {
      type: String,
      required: true,
    },
    lastname: {
      type: String,
      required: true,
    },

  }
}
</script>

<style lang="css" scoped>
</style>
