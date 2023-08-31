<template>
<div class="container">
  <div  class="col-sm-12">
      <h2 class="section_heading">UX Design Use Cases</h2>
      <div v-for="post in caseStudies" :key="post.id">
        <div class="col-sm-12 col-lg-6 case_study">
          <a v-bind:href="post.link">
            <div class="col-sm-3">
              <img v-bind:src="post.image" class="case_image">
            </div>
            <div class="col-sm-9">
              <div class="case_description">
                <h3 class="article-heading">{{post.title}}</h3>
                <p>{{ post.excerpt }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    name: "PortfolioView",
    data: function () {
      return {
        caseStudies: [
          { id: 1, 
            title: 'Consolidated Ticketing Experience', 
            excerpt: "Combine all existing support ticket UIs into a single experience that can be evovled to support the future of Fanatical Support.", 
            image: require('../assets/ctui/title_image.png'),
            link: "/work/consolidated_ticketing"
          },
          { id: 2, 
            title: 'Computer Telephony Foundation', 
            excerpt: "Incorporate with global search a way for employees to easily log that a customer called in and document the reason.", 
            image: require('../assets/interaction_log/title_image.png'),
            link: "/work/computer_telephony"
          },
          { id: 3, 
            title: 'Global Customer Search', 
            excerpt: "Combine current internal customer search experiences into a single streamlined workflow.", 
            image: require('../assets/global_search/title_image.jpg') ,
            link: "/work/global_search"
          },
          { id: 4, 
            title: 'Origin Platform', 
            excerpt: "Develop a new interaction model and control surface that will be the future for internal tools.", 
            image: require('../assets/origin_rackspace/title_image.png'),
            link: "/work/origin_platform"
          },
          // { id: 5, 
          //   title: 'Self Service Experience', 
          //   excerpt: "Ceate a more cohesive and easier to use self-service experience for Rackspace customers.", 
          //   image: require('../assets/rackspace_self_service/title_image.png'),
          //   link: "/self_service"
          // },
          { id: 6,
            title: "Surface Transformation",
            excerpt: "Create a new more consistent visual language applicable to all Rackspace Technology control surfaces.",
            image: require('../assets/rackspace_self_service/title_image.png'),
            link: "/work/surface_transformation"
          }
        ]
    }
    }
}
</script>
<style>

</style>