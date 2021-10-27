import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../components/Main'
import About from '../components/About'
Vue.use(VueRouter)
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
  ]
});
export default router


