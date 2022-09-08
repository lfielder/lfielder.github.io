<template>
  <div class="container use_case">
    <ul class="breadcrumbs">
      <li><router-link to="/work">Work</router-link></li>
      <li>/</li>
      <li>Origin Platform</li>
    </ul>
    <h1>Origin Platform</h1>
    <p>
      This project was an internal idea about taking what we learned from global search and trying to incorporate it for all internal applications. We knew we would need to incorporate legacy applications that did not adhere to our new panel interaction model and we didn't want to attempt to make another tool, another place for employees to go to try to support customers.
    </p>

    <h2>Research</h2>
    <p>
      We started with a hypothesis that we would be able to scale the global search interaction model out to all tools. This would allow employees to easily get access to the information and actions needed for them to support customers.
    </p>

    <p>
      We tested multiple workflows for 5 employee personas and recorded the sessions for stakeholder review. The evidence was overwhelmingly in favor of this new way to provide tools to employees. 
    </p>

    <h2>Design</h2>

    <p>
      We had many goals that we needed to accomplish for design.
      <ol>
        <li>Incorporate the global search workflow into the existing internal tool.</li>
        <li>Accomodate existing applications that do not use the panel interaction model.</li>
        <li>Design a way to seamlessly switch between panels and full-page applications</li>
        <li>Develope guidelines and pattern library for future applications to begin using panels.</li> 
      </ol>
    </p>

    <p>
    We developed a layout thesis that communciated our plan for the future platform and allowed developers a clear goal and plan.
    </p>
    <img class="post-img" src="@/assets/origin_rackspace/layout-thesis.png">
  </div>
</template>
<script>
  export default {
    name: 'OriginPlatform',
    data: function () {
      return {
        title: 'Origin Platform',
        role: "Design Lead",
      }
    }
  }
</script>
<style lang="scss">
@import "../scss/main";
</style>