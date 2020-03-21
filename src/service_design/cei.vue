<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li><router-link to="/work">Work</router-link></li>
      <li>/</li>
      <li>Customer Experience Index</li>
    </ul>
    <h1>Customer Experience Index</h1>
    <p>
      Customer experience indexes have proven to be valuable ways to showcase an entire task or job to stakeholders. It is helpful on getting teams on the same page with exactly what problems you are looking to solve and what portions of an experience need improvment.
    </p>
    <img class="post-img" src="@/assets/service_design/cei.png">
  </div>
</template>
<script>
  export default {
    name: 'Customer Experience Index',
    data: function () {
      return {
        title: 'Customer Experience Index',
        role: "Design Lead",
      }
    }
  }
</script>
<style lang="scss">
@import "../scss/main";
</style>