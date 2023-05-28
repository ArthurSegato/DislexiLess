import { createRouter, createWebHistory } from 'vue-router'
import LandingPage from '../views/LandingPage.vue'
import { authGuard } from '@/guards/authGuard'
import { signGuard } from '@/guards/signGuard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: LandingPage
    },
    {
      path: '/legal',
      name: 'legal',
      component: () => import('../views/Legal.vue')
    },
    {
      path: '/auth/signin',
      name: 'signin',
      component: () => import('../views/auth/SignIn.vue'),
      meta: { requiresSign: true }
    },
    {
      path: '/auth/signup',
      name: 'signup',
      component: () => import('../views/auth/SignUp.vue'),
      meta: { requiresSign: true }
    },
    {
      path: '/auth/confirm',
      name: 'confirm',
      component: () => import('../views/auth/Confirm.vue'),
      meta: { requiresSign: true }
    },
    {
      path: '/auth/recover',
      name: 'recover',
      component: () => import('../views/auth/Recover.vue'),
      meta: { requiresSign: true }
    },
    {
      path: '/auth/reset',
      name: 'reset',
      component: () => import('../views/auth/Reset.vue'),
      meta: { requiresSign: true }
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('../views/dashboard/Dashboard.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/settings',
      name: 'settings',
      component: () => import('../views/dashboard/Settings.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/dashboard/info',
      name: 'info',
      component: () => import('../views/dashboard/Info.vue'),
      meta: { requiresAuth: true }
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    authGuard(to, from, next)
  } else if (to.matched.some((record) => record.meta.requiresSign)) {
    signGuard(to, from, next)
  } else {
    next()
  }
})

export default router
