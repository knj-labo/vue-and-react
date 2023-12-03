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

const REACT_ROUTER_HISTORY = 'REACT_ROUTER_HISTORY';
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

  // Vue Router の history に React Router の history を設定する
  const handleReactRouterEvent = (event) => {
    console.log('[Vue] React Router の history が変更されました: ', event);
    vueRouter.history.transitionTo(
        route => {
          console.log('[Vue] Vue Router が変更されました: ', route);
        },
        (err) => {
          if (err) {
            console.error(err);
          }
        },
    );
  };

  // REACT_ROUTER_HISTORY イベントを受け取ったら、handleReactRouterEvent を実行する
  window.addEventListener(REACT_ROUTER_HISTORY, handleReactRouterEvent);

  // URL の初期化
  vueRouter.history.getCurrentLocation = () => {
    return window.location.pathname + window.location.search + window.location.hash;
  }
}
export default router
