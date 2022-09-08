<template>
  <div class="container use_case">
    <ul class="breadcrumbs">
      <li><router-link to="/work">Work</router-link></li>
      <li>/</li>
      <li>Global Customer Search</li>
    </ul>
    <h1>Global Customer Search</h1>
    <p>The business was looking to integrate the phone system with our internal tools. Our team took this request and started exploritory research on the impact this would have. We quickly realized that the proposed solution was not going to provide the value leaders anticipated. </p>

    <h2>Research</h2>

    <p>During our exploration we saw that locating and verifying a customer that called in was a very convoluded and difficult process. We identified this as the primary cause for delay in phone verifications. We presented our findings to leadership and used illustration and metrics to show the amount of time and resources spent just locating and verifying customers. With this information, they agreed that this would be the best place to start.</p>

    <p>We used the research to identify specific goals for the project:</p>
    <ul>
      <li>Help members of the Phone Team find accounts, verify customers, and transfer calls to the right person at Rackspace who could help them</li>
      <li>Reduce the number of legacy applications, interfaces, and systems the Phone Team must access to locate a customer account</li>
      <li>Leverage legacy APIs, LDAP groups, and other existing systems, but provide a better, faster search experience</li>
      <li>Reduce the amount of training needed to onboard new Phone Team members by providing a simplified, more intuitive work flow</li>
      <li>Reduce customer call time by enabling the Phone Team to more quickly connect customers to the right person the first time</li>
    </ul>
    <p>Articulating these goals was key to getting the buy-in we needed to  the project team and the stakeholders on the same page.</p>

    <h2>Project Kick-Off</h2>

    <p>We had to move very quick, but we didn't want to sacrifice quality. This was the first project I worked on where we started with a 5 day kick-off sprint as descripbed in  Jake Knapp’s book <i>Sprint: Solve Big Problems</i> and <i>Test New Ideas in Just Five Days</i>. This framework involved product management, API developers, UI Developers, and design. Having all these people together, in the same room for an entire week was critical to the success of this project.</p>

    <p>For design to inform the API, the first thing we identified was the primary user-flow for the search tool.</p>

    <h4>User Flow</h4>
    <img class="post-img" src="@/assets/global_search/primary_user_flow.png">

    <p>
    Once this was identified, we moved on to sketches to discover what data would need to be present at each phase. The search functinality and features quickly became the focus due to complexity and API requirements. This is where we developed the idea of content panels that allowed the user to navigate quickly between search results and would integrate with the current interface.
    </p>
    <h4>Wireframe</h4>
    <img class="post-img" src="@/assets/global_search/search_prototype.gif">
    <p>
    With all the complexity that goes into this type of search, we also introduced search modifiers for expert users to leverage these to find their result more quickly.
    </p>

    <h4>Prototype</h4>
    <img class="post-img" src="@/assets/global_search/search_tips.jpg">

    <p>
    The panel interaction model became the foundation for the future account overview information and allowed employees to quickly find the customer, verify them via security question and answer, and transfer them to the needed support team.
    </p>
    <img class="post-img" src="@/assets/global_search/search_panels.jpg">

    <h2>Conclusion</h2>
    <p>
    With this new search tool we were able to reduce the time a customer had to wait for a transfer from <strong>2 minutes</strong> down to <strong>20 seconds</strong>. We also reduced the need for 3 tools that were able to be retired.
    </p>
  </div>
</template>
<script>
  export default {
    name: 'GlobalSearch',
    data: function () {
      return {
        title: 'Global Search',
        role: "Design Lead",
      }
    }
  }
</script>
<style lang="scss">
@import "../scss/main";
</style>