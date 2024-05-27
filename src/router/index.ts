import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Welcome',
    component: () => import('../components/Welcome.vue'),
    meta: {
      title: 'Welcome',
    },
  },
  {
    path: '/Login',
    name: 'Login',
    component: () => import('../components/Login.vue'),
    meta: {
      title: 'Login',
    },
  },
  {
    path: '/Home',
    name: 'Home',
    component: () => import('../components/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/Search',
    name: 'Search',
    component: () => import('../components/Search.vue'),
    meta: {
      title: 'Search',
    },
  },
  {
    path: '/ProductDetaills',
    name: 'ProductDetaills',
    component: () => import('../components/ProductDetaills.vue'),
    meta: {
      title: 'ProductDetaills',
    },
  }
  ,
  {
    path: '/Profile',
    name: 'Profile',
    component: () => import('../components/Profile.vue'),
    meta: {
      title: 'Profile',
    },
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router