export default [
  {
    path: '/verify',
    name: 'verify',
    component: () => import(/* webpackChunkName: 'verify' */ './index'),
    children: [
      {
        path: 'verify-async-function',
        name: 'verify-async-function',
        component: () => import(/* webpackChunkName: 'verify-async-function' */ './verify-async-function.vue'),
      },
      {
        path: 'verify-prev-route-step1',
        name: 'verify-prev-route-step1',
        component: () => import(/* webpackChunkName: 'verify-prev-route-step1' */ './verify-prev-route-step1.vue'),
      },
      {
        path: 'verify-prev-route-step2',
        name: 'verify-prev-route-step2',
        component: () => import(/* webpackChunkName: 'verify-prev-route-step2' */ './verify-prev-route-step2.vue'),
      },
    ],
  },
]
