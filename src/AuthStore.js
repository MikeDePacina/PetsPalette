import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('AuthStore', () => {
  const isAuthenticated = ref(false)
  const token = ref('')
  function logout() {
    isAuthenticated.value = false
  }
  return { isAuthenticated, token, logout }
})
