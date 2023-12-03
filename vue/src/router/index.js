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

// React Router が変更されたらカスタムイベントを発火
window.addEventListener('react-custom-event', (e) => {
  if (e.detail && router.currentRoute.path !== e.detail) {
    console.log('react-custom-event', e.detail)
    router.push(e.detail);
  }
});

// Vue Router が変更されたらカスタムイベントを発火
router.afterEach((to) => {
  // ルートが変更された後にカスタムイベントを発火
  if (to.path === '/about') {
    window.dispatchEvent(new CustomEvent('vue-custom-event', { detail: '/about' }));
  }
});

export default router
