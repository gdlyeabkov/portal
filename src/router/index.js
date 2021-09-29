import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import PersonalArea from '../views/PersonalArea.vue'
import Help from '../views/Help.vue'
import Pay from '../views/Pay.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/PersonalArea',
    name: 'PersonalArea',
    component: PersonalArea
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
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
