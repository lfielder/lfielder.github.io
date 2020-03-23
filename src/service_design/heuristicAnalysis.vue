<template>
	<div class="container">
		<h1>Heuristic Analysis <router-link to="/work"><i class="fas fa-chevron-left"></i> Back to Work</router-link></h1>
		<p>Heurstic analysis are a great first step when analyzing an experience. It can highlight quick wins that can be implimented to improve an experience. </p>
		<img class="post-img" src="@/assets/service_design/heuristic_analysis.png">
	</div>
</template>
<script>
  export default {
    name: 'Self Service',
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