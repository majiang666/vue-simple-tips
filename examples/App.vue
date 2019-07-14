<template>
  <div id="app">
    <Tips 
    :showFlag="showFlag" 
    :location="location" 
    :distance="distance" 
    :tipsMsg="tipsMsg" 
    :times="times"  />
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      showFlag:true,
      location:"bottom",
      distance:"100px",
      tipsMsg:'系统错误，请重试',
      times:5000
    }
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
