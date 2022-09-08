<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li><router-link to="/work">Work</router-link></li>
      <li>/</li>
      <li>Heuristic Analysis</li>
    </ul>
    <h1>Heuristic Analysis</h1>
    <p>
      Heurstic analysis are a great first step when analyzing an experience. It can highlight quick wins that can be implimented to improve an experience.
    </p>
    <img class="post-img" src="@/assets/service_design/heuristic_analysis.png">
  </div>
</template>
<script>
  export default {
    name: 'CustomerExperienceIndex',
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