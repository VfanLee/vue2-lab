import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '@/views/home-view.vue')
  },
  {
    path: '/tinymce',
    name: 'tinymceView',
    component: () => import(/* webpackChunkName: "tinymce" */ '@/views/tinymce-view.vue')
  },
  {
    path: '/input',
    name: 'inputView',
    component: () => import(/* webpackChunkName: "input" */ '@/views/input-view.vue')
  },
  {
    path: '*',
    redirect: '/home'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
