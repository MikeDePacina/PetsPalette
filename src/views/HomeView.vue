<script setup>
import config from 'C:/Users/miked/PetsPalette/config.json'
// async function login() {
//   try{
//     const loginUI = await axios.get(`https://pets-palette.auth.us-east-1.amazoncognito.com/login?client_id=${process.env.CLIENT_ID}&response_type=code&scope=email+openid+phone&redirect_uri=https%3A%2F%2Flocalhost%3A5173%2Ffeed`)
//   }catch(error){
//     console.log(error)
//   }
// }
const loginURL = `${config.LOGIN_URL}response_type=code&client_id=${config.CLIENT_ID}&redirect_uri=${config.REDIRECT_URI}&scope=email`
</script>

<template>
  <a :href="loginURL">Login</a>
  <h1>Home</h1>
</template>
