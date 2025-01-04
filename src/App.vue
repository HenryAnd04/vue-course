<script setup>
  import NavBar from './components/NavBar.vue'; 
  import { RouterView } from 'vue-router';
</script>

<template>
  <section class="app">
    <NavBar/>
    <RouterView/>
  </section>
</template>


<style scoped>
  .app{
    margin: 0 auto;
    width: 80%;
  }
</style>