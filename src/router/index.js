import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/form-page',
    name: 'formPage',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/FormPage.vue')
  },
  {
    path: '/two-way-data-binding',
    name: 'twoWayDataBinding',
    component: () => import(/* webpackChunkName: "about" */ '../views/TwoWayDataBinding.vue')
  },
  {
    path: '/computed-properties',
    name: 'computedProperties',
    component: () => import(/* webpackChunkName: "about" */ '../views/ComputedProperties.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
