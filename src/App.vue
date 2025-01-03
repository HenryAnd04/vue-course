<script setup>
import NavBar from './components/NavBar.vue'; 
import Hero from './components/Hero.vue';
import Jobs from './components/Jobs.vue';
import logo from './assets/logo.jpg';

</script>

<template>
  <section class="app">
    <NavBar logo="logo"/>
    <Hero/>
    <Jobs/>
  </section>
</template>


<style scoped>
  .app{
    margin: 0 auto;
    width: 80%;
  }
</style>