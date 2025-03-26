import { createRouter, createWebHashHistory } from 'vue-router'

export const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'landing',
      component: () => import('@/modulorum/landing/layout/LandingLayout.vue'),
      children: [
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
    },

    {
      path: '/auth',

      component: () => import('@/modulorum/auth/paginae/LoginPagina.vue'),
    },
  ],
})

export default router
