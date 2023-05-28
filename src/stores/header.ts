import { defineStore } from 'pinia'

export const useHeaderStore = defineStore({
  id: 'header',
  state: () => ({
    isOpen: false
  }),
  getters: {
    getState(state) {
      return state.isOpen
    }
  },
  actions: {
    setState() {
      this.isOpen = !this.isOpen
    }
  }
})
