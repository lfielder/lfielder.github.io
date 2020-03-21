<head>
  
</head>
<template>
  <div id="app">  
    <Navigation />
    <main role="main" class="main-content">
      <transition name="router-anim" mode="out-in">
      <router-view></router-view>

      </transition>
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

.router-anim-enter-active {
  animation: coming .25s;
  animation-delay: .12s;
  opacity: 0
}
.router-anim-leave-active {
  animation: going .25s;
}

@keyframes going {
  from {
    transform: translateX(0)
  }
  to {
    transform: translateX(-12%);
    opacity: 0;
  }
}

@keyframes coming {
  from {
    transform: translateX(-12%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
