import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: () => import('@/pages/Home.vue'),
    },
    {
      path: '/blog',
      name: 'BlogPage',
      component: () => import('@/pages/Blog.vue'),
    },
    {
      path: '/donate',
      name: 'DonatePage',
      component: () => import('@/pages/Donate.vue'),
    },
  ],
})

export default router
