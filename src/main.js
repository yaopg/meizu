import Vue from 'vue'
import App from './App.vue'
import rout from './router/index.js'
import Router from 'vue-router'
import axios from 'axios'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './assets/css/my.css'
Vue.prototype.$axios=axios;

Vue.use(Router)
Vue.use(Mint);
new Vue({
  el: '#app',
  render: h => h(App),
  router:rout
})
