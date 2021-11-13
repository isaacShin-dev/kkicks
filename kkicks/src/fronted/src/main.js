import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue' 
import router from "./router" 
import 'bootstrap/dist/css/bootstrap.min.css' 
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Meta from 'vue-meta'

Vue.use(Meta, {
  keyName: 'metaInfo',
  attribute: 'data-vue-meta',
  ssrAttribute: 'data-vue-meta-server-rendered',
  tagIDKeyName: 'vmid',  // 변화시키는 구분 값
  refreshOnceOnNavigation: true
})



Vue.use(BootstrapVue)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

// new Vue({
//   el: '#app',
//   router,
//   template: '<App/>',
//   components: { App },
//   render: h => h(App)
// })

