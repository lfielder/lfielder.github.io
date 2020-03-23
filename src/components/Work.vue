<template>
  <div class="container">
    <div  class="col-sm-12">
      <h2 class="section_heading">Human Centered & Service Design Exampes</h2>
      <div v-for="post in serviceDesign" :key="post.id">
        <div class="col-sm-12 col-lg-6 case_study">
          <a v-bind:href="'#/work' + post.link">
            <div class="col-sm-3 col-md-3">
              <img v-bind:src="post.image" class="case_image">
            </div>
            <div class="col-sm-9 col-md-9">
              <div class="case_description">
                <h3 class="article-heading">{{post.title}}</h3>
                <p>{{ post.excerpt }}</p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <h2 class="section_heading">UX Design Use Cases</h2>
      <div v-for="post in caseStudies" :key="post.id">
        <div class="col-sm-12 col-lg-6 case_study">
          <a v-bind:href="'#/work' + post.link">
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
    name: "Portfolio",
    data: function () {
      return {
        caseStudies: [
          { id: 1, 
            title: 'Consolidated Ticketing Experience', 
            excerpt: "Combine all existing support ticket UIs into a single experience that can be evovled to support the future of Fanatical Support.", 
            image: require('../assets/ctui/title_image.png'),
            link: "/consolidated_ticketing"
          },
          { id: 2, 
            title: 'Computer Telephony Foundation', 
            excerpt: "Incorporate with global search a way for employees to easily log that a customer called in and document the reason.", 
            image: require('../assets/interaction_log/title_image.png'),
            link: "/computer_telephony"
          },
          { id: 3, 
            title: 'Global Customer Search', 
            excerpt: "Combine current internal customer search experiences into a single streamlined workflow.", 
            image: require('../assets/global_search/title_image.jpg') ,
            link: "/global_search"
          },
          { id: 4, 
            title: 'Origin Platform', 
            excerpt: "Develop a new interaction model and control surface that will be the future for internal tools.", 
            image: require('../assets/origin_rackspace/title_image.png'),
            link: "/origin_platform"
          },
          { id: 5, 
            title: 'Self Service Experience', 
            excerpt: "Ceate a more cohesive and easier to use self-service experience for Rackspace customers.", 
            image: require('../assets/rackspace_self_service/title_image.png'),
            link: "/self_service"
          },
        ],
        serviceDesign: [
          { id: 1,
            title: 'Service Blueprint',
            excerpt: "Service blueprints are an effective way to map a customer's experience as well as map internal processes and systems that impact that experience.",
            image: require('../assets/service_design/service_blueprint_title.png'),
            link: "/service_blueprint"
          },
          { id: 2,
            title: 'Customer Experience Index',
            excerpt: "Customer experience indexes are great for measuing an existing experience and isolating specific moments that negatively or positively impact a specific task.",
            image: require('../assets/service_design/cei_title.png'),
            link: "/cei"
          },
          { id: 3,
            title: 'Heuristic Anlysis',
            excerpt: "Heuristic analysis can be done quickly and are a great starting point to impact an experience.",
            image: require('../assets/service_design/heuristic_analysis_title.png'),
            link: "/heuristic_analysis"
          },
          { id: 4,
            title: 'Experience Story Map',
            excerpt: "Story mapping is effective for understanding how users stories fit into the broader user experience.",
            image: require('../assets/service_design/experience_story_map_title.png'),
            link: "/experience_story_map"
          }
        ]
      }
    }
  }
</script>
<style>
.article-heading {
  margin-top: 0;
  border-bottom: 0;
}
.section_heading {
  margin-top: 24px;
  border-bottom: 0;
}
</style>