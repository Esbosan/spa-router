import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/modulorum/landing/paginae/DomusPagina.vue'),
    },

    {
      path: '/features',
      name: 'features',
      component: () => import('@/modulorum/landing/paginae/PeculiaritatesPagina.vue'),
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('@/modulorum/landing/paginae/ContactusPagina.vue'),
    },

    {
      path: '/pricing',
      name: 'pricing',
      component: () => import('@/modulorum/landing/paginae/PretiumPagina.vue'),
    },
  ],
})

export default router
