import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('@/views/AboutView.vue')
    },
    {
      path: '/feed',
      component: () => import('@/views/FeedView.vue')
    },
    {
      path: '/post/:id',
      component: () => import('@/views/PostView.vue')
    },
    {
      path: '/upload',
      component: () => import('@/views/UploadView.vue')
    }
  ]
})

export default router
