<template>
  <div class="container use_case">
    <!-- <ul class="breadcrumbs">
      <li><router-link to="/work">Work</router-link></li>
      <li>/</li>
      <li>Consolidated Ticketing Experience</li>
    </ul> -->
    <h1>Consolidated Ticketing Experience</h1>
    <p>
  This is a long-term (3-5 year) project with the goal to revolutionize the way we provide support to our customers. We want to become more consistent and bring together the end-to-end experiences for all customers. </p><p>I was responsible for making interaction and usability decisions for the MVP as well as subsequent release phases that would introduce the UI to additional users and have unique requirements. I worked very closely with Dev to ensure all legacy features are accounted for, but also to ensure that any adjustments we could make to these features would add value to customers. 
</p>
<h3>Research</h3>
<p>We started our research by shadowing our employees to understand how they provded service today, and to listen into customer issues to better empathize with their experience.</p>
<img class="post-img" src="@/assets/ctui/racker_shadowing.png">
<p>After shadowing our employees, we were much more informed and ready to talk with customers.</p>
<p>
  We had many research sessions with customers that included both user interviews and usability studies. </p> <p>Initial user interviews were a more broad discussion around the customer's current support experience and ways we can improve. We were able to show them some high-level vision work and gather feedback on how they would incorporate this. </p>
<img class="post-img" src="@/assets/ctui/Dashboard_2.png">

<p>We then moved on to more focused discussion around new classifications, statuses, and severities we were looking at introducing. We were able to solve a business request to provide customers a more descriptive and consistent set of severities, classifications, and categories when creating support tickets, which allowed our teams to prioritize work more accurately. 
</p>
<p>
  The usability studies focused on the new side-by-side layout, responsive layout options, and the new create ticket flow. We were also introducing new features for users that other systems provided like favoriting tickets. We wanted to understand how new users would adopt this feature. 
</p>
<p>The outcome of these research sessions was a clear direction on the problems we should be focusing on the improve our service offering.</p>
<img class="post-img" src="@/assets/ctui/high_level_goals.png">
<h3>Design</h3>
<p>
  We started the design process with a future vision session with product management, dev leads, and myself. During these sessions we leveraged previous research and business needs to make intial decisions about our long term plan for what we termed the "Support Platform". We new that the long term goal of this project was to revolutionize the way we deliver support to customers and increase their visibility for the work we perform for them.
</p>
<h5>Kickoff</h5>
<p>
  As with most successful projects, we held a kickoff week that included lead dev, product management, and design. It also includes multiple check-ins with project sponsors and key stakeholders. During the kickoff we established key milestones as well as the long term north-star vision for where this project could go.
</p>
<p>
  Our first deliverable was documenting the user stories, prioritizing those stories, and then documenting the user workflows for these stories. 
</p>
<div class="col-xs-12">
  <h5>High Level Requirements</h5>
  <img class="post-img" src="@/assets/ctui/20170315_155850.jpg">
  <h5>Rough Architecture Diagram</h5>
  <img class="post-img" src="@/assets/ctui/20170317_142959.jpg">
  <h5>User Stories</h5>
  <a target="_blank" href="https://drive.google.com/open?id=13-q8vMQJISx5G0tyUBk-AdcYC4js0aeY"><img class="post-img" src="@/assets/ctui/User_Stories.png"></a>
</div>
<div class="col-xs-12">
  <h5>User Workflows</h5>
  <a href="https://drive.google.com/open?id=1dQozBjiKAMozMgVyhUGUlVj5oUsCWCsT" target="_blank">
  <img class="post-img" src="@/assets/ctui/user_flows.png"></a>
</div>
<h5>Milestone 1 - MVP</h5>

<p>
  Our MVP was initially focused on our dedicated hosting customers, but was switched to our public cloud customers due to requests from key customers and prospects. During this MVP phase we were able to introduce the side-by-side layout, create ticket flow, classifications, categorization, and severity. They big key feature for these users, and the main reason they were selected for our MVP release, was the need to create support tickets on specific sub-accounts that previously were not able to be associated with the tickets. This increased support productivity and customer confidence that their issue would be focused on the right infrastructure. 
</p>
<p>
  I created an invision project that was used as the source of truth for our development teams. This allowed us to make decisions in meetings, and I could update the source of truth without worry that developers might have out of date mockups. The links on the dev stories would remain the same and no matter what dev picked up the story, the design would be the most up to date one. This proved very helpful due to all of the technical changes during this project.
</p>

<div class="col-xs-12"><a href="https://drive.google.com/open?id=1rsPXR0iQ1IXnv_Bo04niHVk3KVZsSCk6" target="_blank">
  <img class="post-img" src="@/assets/ctui/source_of_truth_v1.png"></a>
</div>
<h5>Milestone 2 - Dedicated Hosting Release</h5>
<p>
  The dedicated hosting release increased complexity significantly. It introduced additional features previously not available to cloud users like ticket favoriting and ticket templates. It also required us to adhear to one-off decisions made by the previous ticketing portal. Custom routing logic for specific customers and even one-off features for specific customers.
</p>
<p>
  I was able to work very closely with our API team to develop APIs that would accomodate current features, but be scalable for the future. 
</p>
<div class="col-xs-12"><a href="https://drive.google.com/open?id=18odSLWA96poPnbDMtBcmnX74Nw0SYgsI" target="_blank">
  <img class="post-img" src="@/assets/ctui/dedicated_list.png"></a>
</div>
<div class="col-xs-12"><a href="https://drive.google.com/open?id=1Sjw9MNHHnpPuweVW8oF_pfvuyh9NrePi" target="_blank">
  <img class="post-img" src="@/assets/ctui/device_selector.png"></a>
</div>
<h5>Milestone 3 - Service Now Integration</h5>
<p>
Currently in development.
</p>

<h2>Conclusion</h2>
<p>
  This was one of the most complex project I have worked on. Due to resource contstraints and work force reductions, I was required to work on this as the lone designer for the vast majority of the project. While I was able to collaborate and get feedback from other designers, the context and background information required to make informed design decisions hindered my ability to do this as often as I would have liked. This project did provide me the ability to learn about integrating legacy systems and provide guidance for other teams that are undertaking similar goals. 
</p>
  </div>
</template>
<script>
  export default {
    name: 'ConsolidatedTicketing',
    data: function () {
      return {
        title: 'Consolidate Support Ticket Experiences',
        role: "Design Lead",
      }
    }
  }
</script>
<style lang="scss">
</style>