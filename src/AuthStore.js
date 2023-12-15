import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAuthStore = defineStore('AuthStore', () => {
  const isAuthenticated = ref(false)
  const token = ref('')
  const cognitoUsername = ref('')
  const username = ref('')
  function logout() {
    isAuthenticated.value = false
  }
  return { isAuthenticated, token, cognitoUsername, username, logout }
})
