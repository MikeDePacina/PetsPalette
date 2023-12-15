import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import { useAuthStore } from '@/AuthStore'

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
      component: () => import('@/views/FeedView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/upload',
      component: () => import('@/views/UploadView.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/authenticate',
      component: () => import('@/views/AuthView.vue')
    },
    {
      path: '/logout',
      component: () => import('@/views/LogoutView.vue')
    }
  ]
})
router.beforeEach((to, from) => {
  const auth = useAuthStore()
  if (to.meta.requiresAuth && !auth.isAuthenticated)
    //if not authenticated return to home page
    return {
      path: '/'
    }
})
export default router
