<template>
  <div class="container">
    <div class="col-sm-12 col-lg-7">
      <h1>Hello!</h1>
      <p class="home_page_text">
      My name is Lane Fielder. I am the Manager of User Experience at <a target="_blank" href="https://www.rackspace.com">Rackspace Technology</a>. </p>
      <p class="home_page_text"> If you are looking for a UX design leader, please feel free to <router-link to="/contact">contact</router-link> me.</p>
      
    </div>
    <work />
  </div>
</template>
<script>
  import work from './Work.vue'
  export default {
    name: 'HomeView',
    components: {
      work
    },
  }
</script>
<style>

</style>