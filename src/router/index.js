import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    meta: {layout: 'main'},
    component: () => import('../views/Home.vue')
  },{
    path: '/people',
    name: 'People',
    meta: {layout: 'main'},
    component: () => import('../views/People.vue')
  },
  {
    path: '/finances',
    name: 'Finances',
    meta: {layout: 'main'},
    component: () => import('../views/Finances.vue')
  },
  {
    path: '/statistics',
    name: 'Statistics',
    meta: {layout: 'main'},
    component: () => import('../views/Statistics.vue')
  },
  {
    path: '/calendar',
    name: 'Calendar',
    meta: {layout: 'main'},
    component: () => import('../views/Calendar.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {layout: 'empty'},
    component: () => import('../views/Login.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
