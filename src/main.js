import Vue from 'vue'
import App from './App'
import router from './router'
import {Button} from 'vant';
// 消息提示的环境配置，设置为开发环境或者生产环境,false为开发环境有错误提醒？

Vue.config.productionTip = false
Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,//在根部挂载（注入）路由使整个应用都有路由的功能
  render: h => h(App)
})
