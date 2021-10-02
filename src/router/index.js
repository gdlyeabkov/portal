import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Statements from '../views/Statements.vue'
import DocumentsAndData from '../views/DocumentsAndData.vue'
import GovermentMail from '../views/GovermentMail.vue'
import Overview from '../views/Overview.vue'
import PersonalAreaRegister from '../views/PersonalAreaRegister.vue'
import PersonalAreaAdminRegister from '../views/PersonalAreaAdminRegister.vue'
import PersonalAreaLogin from '../views/PersonalAreaLogin.vue'
import PersonalArea from '../views/PersonalArea.vue'
import Help from '../views/Help.vue'
import Pay from '../views/Pay.vue'

import Family from '../views/services/Family.vue'
import Passports from '../views/services/Passports.vue'
import Transport from '../views/services/Transport.vue'
import Education from '../views/services/Education.vue'
import Tax from '../views/services/Tax.vue'
import Health from '../views/services/Health.vue'
import Pension from '../views/services/Pension.vue'
import Licenses from '../views/services/Licenses.vue'
import Security from '../views/services/Security.vue'
import Work from '../views/services/Work.vue'
import Culture from '../views/services/Culture.vue'
import Business from '../views/services/Business.vue'
import Production from '../views/services/Production.vue'
import Information from '../views/services/Information.vue'
import Ecology from '../views/services/Ecology.vue'
import Services from '../views/Services.vue'
import Government from '../views/Government.vue'
import LifeSituations from '../views/LifeSituations.vue'
import Company from '../views/Company.vue'

import ForCitizen from '../views/ForCitizen.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/forcchhhcitizen',
    name: 'ForCitizen',
    component: ForCitizen
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/services',
    name: 'Services',
    component: Services
  },
  {
    path: '/situations',
    name: 'LifeSituations',
    component: LifeSituations
  },
  {
    path: '/government',
    name: 'Government',
    component: Government
  },
  {
    path: '/statements',
    name: 'Statements',
    component: Statements
  },
  {
    path: '/overview',
    name: 'Overview',
    component: Overview
  },
  {
    path: '/documents',
    name: 'DocumentsAndData',
    component: DocumentsAndData
  },
  {
    path: '/mail',
    name: 'GovermentMail',
    component: GovermentMail
  },
  {
    path: '/register',
    name: 'PersonalAreaRegister',
    component: PersonalAreaRegister
  },
  {
    path: '/area',
    name: 'PersonalArea',
    component: PersonalArea
  },
  {
    path: '/admin/register',
    name: 'PersonalAreaAdminRegister',
    component: PersonalAreaAdminRegister
  },
  {
    path: '/login',
    name: 'PersonalAreaLogin',
    component: PersonalAreaLogin
  },
  {
    path: '/pay',
    name: 'Pay',
    component: Pay
  },
  {
    path: '/help',
    name: 'Help',
    component: Help
  },
  {
    path: '/family',
    name: 'Family',
    component: Family
  },
  {
    path: '/passports',
    name: 'Passports',
    component: Passports
  },
  {
    path: '/transport',
    name: 'Transport',
    component: Transport
  },
  {
    path: '/education',
    name: 'Education',
    component: Education
  },
  {
    path: '/tax',
    name: 'Tax',
    component: Tax
  },
  {
    path: '/health',
    name: 'Health',
    component: Health
  },
  {
    path: '/pension',
    name: 'Pension',
    component: Pension
  },
  {
    path: '/licenses',
    name: 'Licenses',
    component: Licenses
  },
  {
    path: '/security',
    name: 'Security',
    component: Security
  },
  {
    path: '/work',
    name: 'Work',
    component: Work
  },
  {
    path: '/culture',
    name: 'Culture',
    component: Culture
  },
  {
    path: '/business',
    name: 'Business',
    component: Business
  },
  {
    path: '/production',
    name: 'Production',
    component: Production
  },
  {
    path: '/information',
    name: 'Information',
    component: Information
  },
  {
    path: '/ecology',
    name: 'Ecology',
    component: Ecology
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
