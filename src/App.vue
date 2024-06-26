<template>
  <div id="app">
    <header>
      <h1>Weather Widget App</h1>
      <nav>
        <a href="#" @click.prevent="currentPage = 'home'" :class="{ active: currentPage === 'home' }">Home</a>
        <a href="#" @click.prevent="currentPage = 'assignments'" :class="{ active: currentPage === 'assignments' }">Tugas</a>
      </nav>
    </header>
    <main>
      <component :is="currentPageComponent"></component>
    </main>
    <footer>
      <p>UAS AMI</p>
    </footer>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Assignments from './components/Assignments.vue'

export default {
  name: 'App',
  components: {
    Home,
    Assignments
  },
  data() {
    return {
      currentPage: 'home'
    }
  },
  computed: {
    currentPageComponent() {
      return this.currentPage === 'home' ? 'Home' : 'Assignments'
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

#app {
  font-family: 'Roboto', sans-serif;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: linear-gradient(to right, #00c6ff, #0072ff);
  color: #333;
  text-align: center;
}

header {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 30px 0;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
}

h1 {
  margin: 0;
  font-size: 42px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

nav {
  margin-top: 10px;
}

nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

nav a:hover {
  background-color: rgba(255, 255, 255, 0.5);
}

nav a.active {
  background-color: rgba(255, 255, 255, 0.3);
}

main {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px;
}

footer {
  background: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 10px 0;
  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);
  margin-top: 20px;
}
</style>
