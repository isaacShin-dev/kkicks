<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-router/dist/vue-router.js"></script>
<template>
  <div id="app">
  <h1>Hello App!</h1>
  <p>
    <!-- 네비게이션을 위해 router-link 컴포넌트를 사용합니다. -->
    <!-- 구체적인 속성은 `to` prop을 이용합니다. -->
    <!-- 기본적으로 `<router-link>`는 `<a>` 태그로 렌더링됩니다.-->
    <!-- <router-link to="/foo">Go to Foo</router-link>
    <router-link to="/bar">Go to Bar</router-link> -->
  </p>
  <!-- 라우트 아울렛 -->
  <!-- 현재 라우트에 맞는 컴포넌트가 렌더링됩니다. -->
  <router-view></router-view>
</div>
</template>

<script>
//import HelloWorld from './components/Main.vue'
import Main from './components/Main.vue'
import About from './components/About'

export default {

  components: {
    Main,
    About
  }
  //,
  // mounted() {
  // request('http://localhost:8080/about', function(error, response, body) { 

  //   window.console.log('error: ', error); 
  //   window.console.log('statusCode: ', response && response.statusCode);
  //   window.console.log('body: ', body); 
  //   });
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
