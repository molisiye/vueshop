/*
路由器对象模块
*/

import Vue from 'vue';
import VueRouter from 'vue-router';
import Msite from '../pages/Msite/Msite';
import Order from '../pages/Order/Order';
import Search from '../pages/Search/Search';
import Profile from '../pages/Profile/Profile';

// 申明使用插件
Vue.use(VueRouter);

export default new VueRouter({
  // 所有路由
  routes: [
    { path: '/msite', component: Msite },
    { path: '/order', component: Order },
    { path: '/search', component: Search },
    { path: '/profile', component: Profile },
  ],
});
