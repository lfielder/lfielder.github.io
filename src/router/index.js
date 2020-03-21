import Vue from 'vue'
import Router from 'vue-router'
import Work from '../components/Work'

import Home from '../components/Home'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

import CTUI from '../case_studies/ctui'
import computerTelephony from '../case_studies/computerTelephony'
import globalSearch from '../case_studies/globalSearch'
import originPlatform from '../case_studies/originPlatform'
import selfService from '../case_studies/selfService'

import serviceBlueprint from '../service_design/service_blueprint'
import CEI from '../service_design/cei'
import heuristicAnalysis from '../service_design/heuristic_analysis'
import experienceMap from '../service_design/experience_story_map'

Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/work',
      name: 'work',
      component: Work
    },
    {
      path:'/resume',
      name:'Resume',
      component: Resume
    },
    {
      path:'/contact',
      name:'Contact',
      component: Contact
    },
    {
      path:'/work/consolidated_ticketing',
      name:'ctui',
      component: CTUI
    },
    {
      path:'/work/computer_telephony',
      name:'computerTelephony',
      component: computerTelephony
    },
    {
      path:'/work/global_search',
      name:'globalSearch',
      component: globalSearch
    },
    {
      path:'/work/origin_platform',
      name:'originPlatform',
      component: originPlatform
    },
    {
      path:'/work/self_service',
      name:'selfService',
      component: selfService
    },
    {
      path:'/work/service_blueprint',
      name:'Service Blueprint',
      component: serviceBlueprint
    },
    {
      path:'/work/cei',
      name:'Customer Experience Index',
      component: CEI
    },
    {
      path:'/work/heuristic_analysis',
      name:'Heuristic Analysis',
      component: heuristicAnalysis
    },
    {
      path:'/work/experience_story_map',
      name:'Experience Story Map',
      component: experienceMap
    }
    ]
})