<template>
  <div id="app">
    <Tips 
    :showFlag="showFlag" 
    :location="location" 
    :distance="distance" 
    :tipsMsg="tipsMsg" />
    <img alt="Vue logo" src="./assets/logo.png" @click="showTips">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'app',
  data(){
    return{
      showFlag:false,
      location:"bottom",
      distance:"100px",
      tipsMsg:'系统错误，请重试'
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    showTips(){
      this.showFlag = true;
      setTimeout(() => {
        this.showFlag = false;
      },2000)
    }
  },
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
