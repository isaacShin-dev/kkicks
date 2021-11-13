<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>

<template>
  <div id="app">
    <div id="header">
      <main-header/>
    </div>

  <router-view></router-view>

    <div id="footer">
      <main-footer/>
    </div> 
</div>
</template>

<script>
import Main from './components/Main.vue'
import About from './components/About'
import Raffle from './components/Raffle'
import Header from './components/includes/mainHeader.vue'
import Footer from './components/includes/mainFooter.vue'


export default { 
  components: {
    'main-header': Header,
    'main-footer':Footer,
    Main,
    About,
    Raffle

  },
metaInfo: {
    title: 'Tripllo',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' }
    ],
  },


}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  height: 100vw;
}
</style>
