<template>
  <div class="container use_case">
    <h1>Computer Telephony Foundation</h1>
    <p>
      Across Rackspace there were many different teams and different ways that employees logged when customer's called in. The goal of this project was to leverage the new global search and add on to the workflow to log the reason for the call and who the call was transferred to.
    </p>

    <h2>Research</h2>
    <p>
      We developed a workflow for this process that incorporated into global search's verification. We created high-fidelity mockups and allowed users to click through them to ensure this process solved the issues they had. Validating these with users allowed us to get with developers and have them estimate a LOE for creating these new features.
    </p>

    <h2>Design</h2>
    <p>
      For this project, we had a lot of transitions that needed to occur. In order to communicate these correctly to the dev team and stakeholders, I created a video in order to communicate this.
    </p>
    <h4>User Flows</h4>
    <img class="post-img" src="@/assets/interaction_log/workflow.png">
    <h4>Mockups</h4>
    <img class="post-img" src="@/assets/interaction_log/drawer_mockup.png">
    <h4>Interaction Flow</h4>
    <video width="900" height="500" controls="controls">
    <source src="@/assets/interaction_log/Interaction_Log_Demo.mp4" type="video/mp4">
    </video>

    <h2>Conclusion</h2>
    <p>
      I have been moved off this project, but it has continued to evolve and now includes Amazon Connect integration. Our support leadership has seen valuable insights and been able to make more informed decisions about staffing and additional features due to the metrics this tool provided.
    </p>
  </div>
</template>
<script>
  export default {
    name: 'Computer Telephony Integration',
    data: function () {
      return {
        title: 'Computer Telephony Integration',
        role: "Design Lead",
      }
    }
  }
</script>
<style lang="scss">
@import "../scss/main";
</style>