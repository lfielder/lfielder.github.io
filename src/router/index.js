import { createRouter, createWebHistory } from 'vue-router'
import Work from '../components/Work'

import Home from '../components/Home'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

import CTUI from '../case_studies/ctui'
import computerTelephony from '../case_studies/computerTelephony'
import globalSearch from '../case_studies/globalSearch'
import originPlatform from '../case_studies/originPlatform'
import selfService from '../case_studies/selfService'
import surfaceTransformation from '../case_studies/surfaceTransformation'

import serviceBlueprint from '../service_design/service_blueprint'
import CEI from '../service_design/cei'
import heuristicAnalysis from '../service_design/heuristic_analysis'
import experienceMap from '../service_design/experience_story_map'


const routes = [
  {
    path: '/',
    name: 'home',
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
    path:'/consolidated_ticketing',
    name:'ConsoldatedTicketing',
    component: CTUI
  },
  {
    path:'/computer_telephony',
    name:'ComputerTelephony',
    component: computerTelephony
  },
  {
    path:'/global_search',
    name:'GlobalSearch',
    component: globalSearch
  },
  {
    path:'/origin_platform',
    name:'OriginPlatform',
    component: originPlatform
  },
  {
    path:'/self_service',
    name:'selfService',
    component: selfService
  },
  {
    path: '/surface_transformation',
    name: 'surfaceTransformation',
    component: surfaceTransformation
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
