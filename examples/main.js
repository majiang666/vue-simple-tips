import Vue from 'vue'
import App from './App.vue'

// 导入组件
import Tips from './../packages/index'
// 注册组件库
Vue.use(Tips);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
