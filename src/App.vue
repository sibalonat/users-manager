<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <SetInitial msg="Welcome to Your Vue.js App"/>
</template>

<script>
import SetInitial from './components/SetInitial.vue'

export default {
  name: 'App',
  components: {
    SetInitial
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap');
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin-top: 60px;
  overflow-x: hidden;

  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  color: #4E5964;
}
</style>
