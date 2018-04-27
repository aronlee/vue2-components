import Vue from 'vue'
import VueRouter from 'vue-router'
import demoRoutes from './views/demo/routes'
import verifyRoutes from './views/verify/routes'
import animationsRoutes from './views/animations/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: resolve => import(/* webpackChunkName: "main" */ './views/main').then(resolve),
  },
  ...demoRoutes,
  ...verifyRoutes,
  ...animationsRoutes,
]

const router = new VueRouter({
  mode: 'hash',
  routes,
})

export default router
