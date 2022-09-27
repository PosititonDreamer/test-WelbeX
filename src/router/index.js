import Vue from 'vue'
import VueRouter from 'vue-router'
import routesView from '@/views/routes/routes'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'routes',
    component: routesView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
