import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../pages/HomePage.vue'
import About from '../pages/AboutPage.vue'
import Edit from '../pages/EditPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: About,
  },
  {
    path: '/edit',
    name: 'edit',
    component: Edit,
  }
]

const router = new VueRouter({
  mode: 'abstract',
  base: process.env.BASE_URL,
  routes
})

// React Routerからのナビゲーションを処理するメソッド
window.vueRouterSync = (navigate) => {
  router.beforeEach((to, from, next) => {
    // React RouterのURLに同期する
    if (window.location.pathname !== to.path) {
      navigate(to.path);
    }
    next();
  });
};

export default router
