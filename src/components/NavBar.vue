<script setup>
import { useAuthStore } from '@/AuthStore'
import config from 'C:/Users/miked/PetsPalette/config.json'
const auth = useAuthStore()
const loginURL = `${config.LOGIN_URL}response_type=code&client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&scope=email`
const logoutURL = `${config.LOGOUT_URL}client_id=${config.CLIENT_ID}&logout_uri=${config.LOGOUT_REDIRECT}`
</script>
<template>
  <div class="wrapper">
    <p>Pets Palette</p>
    <nav v-if="!auth.isAuthenticated">
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <a :href="loginURL">Login</a>
    </nav>
    <nav v-else>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/about">About</RouterLink>
      <RouterLink to="/feed">Feed</RouterLink>
      <RouterLink to="/upload">Upload</RouterLink>
      <a :href="logoutURL">Logout</a>
    </nav>
  </div>
</template>

<style>
.wrapper {
  display: flex;
  justify-content: space-between;
  /* flex-direction: column; */
}
</style>
