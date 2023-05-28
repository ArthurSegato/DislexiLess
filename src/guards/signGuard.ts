import { useUserStore } from '@/stores/user'
import type { NavigationGuard } from 'vue-router'

export const signGuard: NavigationGuard = async (to, from, next) => {
  const userStore = useUserStore()

  if (!userStore.getAuth) next()
  else next('/dashboard')
}
