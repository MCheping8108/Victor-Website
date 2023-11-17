import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: '/', name: 'home', component: HomeView},
    {path: '/news', name: 'news', component: () => import('../views/news.vue')},
    {path: '/product1', name: 'product1', component: () => import('../views/product/product1.vue')},
    {path: '/product2', name: 'product2', component: () => import('../views/product/product2.vue')},
    {path: '/product3', name: 'product3', component: () => import('../views/product/product3.vue')},
  ]
})

export default router
