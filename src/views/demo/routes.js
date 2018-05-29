
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
        children: [
          {
            path: 'page-1',
            name: 'demo-router-transition-page-1',
            component: () => import(/* webpackChunkName: 'demo-router-transition-page-1' */ './demo-router-transition-children/page1.vue'),
          },
          {
            path: 'page-2',
            name: 'demo-router-transition-page-2',
            component: () => import(/* webpackChunkName: 'demo-router-transition-page-2' */ './demo-router-transition-children/page2.vue'),
          },
          {
            path: 'page-3',
            name: 'demo-router-transition-page-3',
            component: () => import(/* webpackChunkName: 'demo-router-transition-page-3' */ './demo-router-transition-children/page3.vue'),
          },
          {
            path: 'page-4',
            name: 'demo-router-transition-page-4',
            component: () => import(/* webpackChunkName: 'demo-router-transition-page-4' */ './demo-router-transition-children/page4.vue'),
          },
          {
            path: 'page-5',
            name: 'demo-router-transition-page-5',
            component: () => import(/* webpackChunkName: 'demo-router-transition-page-5' */ './demo-router-transition-children/page5.vue'),
          },
        ],
      },
      {
        path: 'demo-limit-input',
        name: 'demo-limit-input',
        component: () => import(/* webpackChunkName: 'demo-limit-input' */ './demo-limit-input.vue'),
      },
      {
        path: 'demo-dropdown-menu',
        name: 'demo-dropdown-menu',
        component: () => import(/* webpackChunkName: 'demo-dropdown-menu' */ './demo-dropdown-menu.vue'),
      },
    ],
  },
]
