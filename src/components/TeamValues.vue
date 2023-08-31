<template>
<div class="container">
  <div  class="col-sm-12">
      <h2 class="section_heading">Team Values</h2>
      <p>Team values are a north star. Tehey are used to create the best environment for the team and any stakeholders we work with to delivery optimal results. Below is an example of what our team currently uses.</p>
      <ul>
        <li class="value_list"><strong>Respect</strong><p>Respect each other. No one is able to bring their best to work every day, however respecting eachother should always be the first consideration.</p></li>
        <li class="value_list"><strong>Trust</strong><p>Trust is the foundation of vulnerability. We must trust each other in order to put forward our best ideas. We should be making mistakes and failing fast and trust is the core value that supports this.</p></li>
        <li class="value_list"><strong>Honesty</strong><p>Honesty should come from a place of respect. If there is an issue with someone, we should feel comfortable to express our opinions.</p></li>
        <li class="value_list"><strong>Communication</strong><p>Good communication can be learned and everyone can improve how they communicate. Providing feedback to people is critical to improvement.</p></li>
        <li class="value_list"><strong>Collaboration</strong><p>Everyone has specific skills and talents. In order for the team to perform well, everyone needs to bring their best and offer support to other team members.</p></li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
    name: "TeamValues",
    data: function () {
      return {
    }
    }
}
</script>
<style>
.value_list {
  margin-top: 3rem;
  list-style: none;
}
strong {
  font-size: 1.5rem
}
</style>