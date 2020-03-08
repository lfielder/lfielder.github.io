import Vue from 'vue'
import Router from 'vue-router'
import Portfolio from '../components/Portfolio'

import Home from '../components/Home'
import Resume from '../components/Resume'
import Contact from '../components/Contact'

import CTUI from '../case_studies/ctui'
import computerTelephony from '../case_studies/computerTelephony'
import globalSearch from '../case_studies/globalSearch'
import originPlatform from '../case_studies/originPlatform'
import selfService from '../case_studies/selfService'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/portfolio',
      name: 'Portfolio',
      component: Portfolio
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
      path:'/portfolio/consolidated_ticketing',
      name:'ctui',
      component: CTUI
    },
    {
      path:'/portfolio/computer_telephony',
      name:'computerTelephony',
      component: computerTelephony
    },
    {
      path:'/portfolio/global_search',
      name:'globalSearch',
      component: globalSearch
    },
    {
      path:'/portfolio/origin_platform',
      name:'originPlatform',
      component: originPlatform
    },
    {
      path:'/portfolio/self_service',
      name:'selfService',
      component: selfService
    }
    ]
})