// 基于webpack的开发，是基于模块化的开发
import Vue from 'vue';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import './assets/css/index.css';
new Vue({
  el: '#app',
  render: h => h(App)
})
