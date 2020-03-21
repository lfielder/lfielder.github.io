<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li><router-link to="/work">Work</router-link></li>
      <li>/</li>
      <li>Experience Story Map</li>
    </ul>
    <h1>Experience Story Map</h1>
    <p>
      Experience story maps are similar to story maps used by dev teams, however the focus is on experience tasks and stories. It starts with the problem and target persona, then leads to specific deliverable features that will be released.
    </p>
    <img class="post-img" src="@/assets/service_design/experience_story_map.png">
  </div>
</template>
<script>
  export default {
    name: 'Experience Story Map',
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