import router from '@/router'
import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    isAuth: false,
    token: null
  }),
  persist: true,
  getters: {
    getAuth(state) {
      return state.isAuth
    },
    getToken(state) {
      return state.token
    }
  },
  actions: {
    setToken(token: any) {
      this.token = token
      this.isAuth = true
    },
    reset() {
      this.token = null
      this.isAuth = false
      router.push({ name: 'home' })
    }
  }
})
