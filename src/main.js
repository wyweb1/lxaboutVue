import Vue from 'vue'
import App from './App'
import router from './router'
import {Button} from 'vant';
Vue.config.productionTip = false
Vue.use(Button);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
