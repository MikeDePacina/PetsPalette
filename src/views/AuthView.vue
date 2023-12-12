<script setup>
import { useRoute } from 'vue-router'
import { onBeforeMount } from 'vue'
import axios from 'axios'
import config from 'C:/Users/miked/PetsPalette/config.json'
import { useAuthStore } from 'C:/Users/miked/PetsPalette/src/AuthStore.js'
const route = useRoute()
const auth = useAuthStore()
console.log(route.query.code)

onBeforeMount(getToken)

async function getToken() {
  const tokenEndpoint = `${config.TOKEN_ENDPOINT}`
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: `Basic ${config.BASIC}`
  }
  //request body parameters
  const data = new URLSearchParams()
  data.append('grant_type', 'authorization_code')
  data.append('client_id', `${config.CLIENT_ID}`)
  data.append('code', `${route.query.code}`)
  data.append('redirect_uri', `${config.REDIRECT_URI}`)

  try {
    const response = await axios.post(tokenEndpoint, data, { headers })
    console.log(response.data)
    auth.token = response.data.access_token
    auth.isAuthenticated = true
  } catch (error) {
    console.log(error)
    auth.isAuthenticated = false
  }
}
</script>

<template>
  <p>Authenticating...</p>
</template>
