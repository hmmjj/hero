// 基于webpack的开发，是基于模块化的开发
import Vue from 'vue';
import App from './App.vue';

import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';

import router from './routers/index.js';
import MyHttp from './plugins/MyHttp.js';
//注册插件 
//调用插件对象 MyHttp.install方法
Vue.use(MyHttp);
//给vue的原型增加axios成员
// axios.defaults.baseURL = 'http://localhost:3000/';
// Vue.prototype.$http = axios;
new Vue({
  el: '#app',
  render: h => h(App),
  router
})
