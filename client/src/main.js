/*
入口JS
*/
import Vue from 'vue';
import App from './App';
import router from './router';
import store from './store';

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router, // 使用 vue-router
  store // 使用 vuex
});
