export default [
  {
    name: 'animations',
    path: '/animations',
    component: () => import(/* webpackChunkName: 'animations' */ './index'),
    children: [],
  }
]
