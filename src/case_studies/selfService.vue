<template>
  <div class="container use_case">
    <h1>Self Service Experience</h1>
      <p>The goal of this project was to bring the self service sites together visually and create a single header with search for all the sites. The problem being solved was that there was not a single search that would search across all of our documentation sources (API Docs, Community Posts, and How-To articles).</p>
      <p>
      We had a team of 3 designers who worked with a development team to get the search header designed and update each site. 
      </p>

      <p>
      My initial focus for this project was to work on the layout and information organization for the community due to the amount of development work this platform would require. Once we had the colors and the layout for the community, we used that to move on to the other sites.
      </p>

      <img class="ss-img" src="@/assets/rackspace_self_service/community_sketch.png">


      <img class="ss-img" src="@/assets/rackspace_self_service/community_before_after.png">


      <img class="ss-img" src="@/assets/rackspace_self_service/docs_home.png">
  </div>
</template>
<script>
  export default {
    name: 'Self Service',
    data: function () {
      return {
        title: 'Self Service',
        role: "Design Lead",
      }
    }
  }
</script>
<style lang="scss">
@import "../scss/main";
</style>