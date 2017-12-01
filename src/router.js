import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: resolve => import(/* webpackChunkName: "main" */ './views/main').then(resolve),
    meta: {
      title: 'document',
    },
  },
]

const router = new VueRouter({
  mode: 'hash',
  // mode: 'history',
  routes,
  // scrollBehavior (to, from, savedPosition) {
  //   // window.scrollTo(0, 0) // TODO: // 这个方法有bug？
  //   if (savedPosition) {
  //     return savedPosition
  //   } else if (to.hash) {
  //     return {
  //       selector: to.hash
  //     }
  //   } else {
  //     return { x: 0, y: 0 }
  //   }
  // }
})

export default router