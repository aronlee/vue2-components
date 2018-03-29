
export default [
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: 'demo' */ './index'),
    children: [
      {
        path: 'demo-scroll-load',
        name: 'demo-scroll-load',
        component: () => import(/* webpackChunkName: 'demo-scroll-load' */ './demo-scroll-load.vue'),
      },
      {
        path: 'demo-filter',
        name: 'demo-filter',
        component: () => import(/* webpackChunkName: 'demo-filter' */ './demo-filter.vue'),
      },
      {
        path: 'demo-router-transition',
        name: 'demo-router-transition',
        component: () => import(/* webpackChunkName: 'demo-router-transition' */ './demo-router-transition.vue'),
      },
      {
        path: 'demo-limit-input',
        name: 'demo-limit-input',
        component: () => import(/* webpackChunkName: 'demo-limit-input' */ './demo-limit-input.vue'),
      },
    ],
  },
]
