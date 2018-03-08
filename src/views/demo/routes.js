
export default [
  {
    path: '/demo',
    name: 'demo',
    component: () => import(/* webpackChunkName: 'demo' */ './index'),
    children: [
      {
        path: 'demo-filter',
        name: 'demo-filter',
        component: () => import(/* webpackChunkName: 'demo-filter' */ './filter'),
      },
      {
        path: 'demo-router-transition',
        name: 'demo-router-transition',
        component: () => import(/* webpackChunkName: 'demo-router-transition' */ './router-transition'),
      },
      {
        path: 'demo-limit-input',
        name: 'demo-limit-input',
        component: () => import(/* webpackChunkName: 'demo-limit-input' */ './limit-input'),
      },
    ],
  },
]
