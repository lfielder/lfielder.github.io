<template>
  <div class="container">
    <div class="col-sm-12 col-md-6 nav_title">
      <h1>Lane Fielder</h1>
      <h3>User Experience Designer</h3>
    </div>
    <div class="col-sm-12 col-md-6">
      <ul class="nav">
        <li>
          <router-link to="/" exact>Home</router-link>
        </li>
        <li>
          <router-link to="/resume">Resume</router-link>
        </li>
        <li>
          <router-link to="/portfolio">Portfolio</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'Navigation',
  }
</script>
<style lang="scss">
</style>
