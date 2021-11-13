import Vue from 'vue'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import Raffle from '../components/Raffle.vue'
Vue.use(VueRouter)
Vue.use(Meta)


const router = new VueRouter({
  mode: 'history',
  routes: [
    { 
      path: '/', 
      name: 'Main',
      component: Main
    },
    {
      path: '/raffle',
      name: 'Raffle',
      component: Raffle
    },
  ]
});
export default router


