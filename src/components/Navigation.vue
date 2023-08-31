<template>
  <div>
  <div class="container">
    <div class="col-sm-12 col-md-12 nav_title">
      <h1>Lane Fielder</h1>
      <h3>User Experience Designer</h3>
    </div>
  </div>
    <div class="col-sm-12 col-md-12">
      <nav class="nav">
        <router-link to="/" exact>Home</router-link>
        <router-link to="/team_values" exact>Team Core Values</router-link>
        <router-link to="/principles" exact>Delivery Principles</router-link>
        <router-link to="/work">Work</router-link>
        <router-link to="/contact">Contact</router-link>
      </nav>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'NavView',
  }
</script>
<style lang="scss">
</style>
