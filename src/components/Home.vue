<template>
    <div class="home">
      <WeatherWidget />
    </div>
  </template>
  
  <script>
  import WeatherWidget from './WeatherWidget.vue'
  
  export default {
    name: 'Home',
    components: {
      WeatherWidget
    }
  }
  </script>
  
  <style scoped>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  </style>
  