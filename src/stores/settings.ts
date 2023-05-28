import { defineStore } from 'pinia'

export const useSettingsStore = defineStore({
  id: 'settings',
  state: () => ({
    isEditing: false,
    user: {
      name: '',
      email: '',
      phone: '',
      password: ''
    }
  }),
  getters: {
    getEditing(state) {
      return state.isEditing
    }
  },
  actions: {
    startEditing() {
      this.isEditing = true
    },
    stopEditing() {
      this.isEditing = false
    }
  }
})
