import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '@/views/home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: HomeView
  },
  {
    path: '/reactivity',
    name: 'reactivity',
    component: () => import(/* webpackChunkName: "reactivity" */ '@/views/basic/reactivity.vue')
  },
  {
    path: '/model',
    name: 'model',
    component: () => import(/* webpackChunkName: "model" */ '@/views/basic/model.vue')
  },
  {
    path: '/tinymce',
    name: 'tinymceView',
    component: () => import(/* webpackChunkName: "tinymceView" */ '@/views/tinymce-view.vue')
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
