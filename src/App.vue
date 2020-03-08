<head>
  
</head>
<template>
  <div id="app">  
    <Navigation />
    <main role="main" class="main-content">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
import Navigation from './components/Navigation.vue'

export default {
  name: 'App',
  components: {
    Navigation
  }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css?family=Barlow:300,400,600,700&display=swap');
@import "./scss/main";
</style>
