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

function hackHistoryInVueRouter() {
  // routing が確定する前に、console.log で history が表示されるようにする
  vueRouter.beforeEach((_to, _from, next) => {
    console.log('beforeEach');
    console.log('[Vue] Vue Router の history: ', history);
    next();
  });
  // routing が確定した後に、console.log で history が表示されるようにする
  vueRouter.afterEach(() => {
    console.log('afterEach');
    console.log('[Vue] Vue Router の history: ', history);
  });
}
export default router
