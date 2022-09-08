<template>
  <div class="container">
    <ul class="breadcrumbs">
      <li><router-link to="/work">Work</router-link></li>
      <li>/</li>
      <li>Service Blueprint</li>
    </ul>
    <h1>Service Blueprint</h1>
    <p>I have found service blueprints to be an effective way to map not only a customer experience, but also the internal processes and systems that impact that experience.</p>
    <p>Using these when working with leadership can help inform how changing a certain process or system can have downstream effects and ultimately effect the customer's experience. These are also effective tools to highlight specific breakdowns that happen behind the scenes (backstage).</p>
    <img class="post-img" src="@/assets/service_design/service_blueprint.png">
  </div>
</template>
<script>
  export default {
    name: 'SelfService',
  }
</script>
<style lang="scss">
@import "../scss/main";
h1 {
  a {
    font-size: 16px;
    float: right;
  }
}
</style>