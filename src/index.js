import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './app'
import router from './router'

Vue.use(VueRouter)

const app = new Vue({
  router,
  render: h => h(App),
})

app.$mount('#app')
