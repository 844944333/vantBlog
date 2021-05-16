import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/vantui/index'
/* 引入初始化 css */
import 'reset-css'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
