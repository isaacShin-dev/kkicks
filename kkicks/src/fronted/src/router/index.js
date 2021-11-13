import Vue from 'vue'
import Meta from 'vue-meta'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import About from '../components/About'
import Raffle from '../components/Raffle';
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
      path: '/about',
      name: 'About',
      component: About 
    },
    {
      path: '/raffle',
      name: 'Raffle',
      component: Raffle
    },
  ]
});
export default router


