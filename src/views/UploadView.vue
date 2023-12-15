<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/AuthStore'
import config from '../../config.json'
import axios from 'axios'

const post = ref('')
const auth = useAuthStore()
const router = useRouter()

async function onSubmit() {
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    }

    const data = {
      username: `${auth.chosenUsername}`,
      cognitoUsername: `${auth.cognitoUsername}`,
      body: `${post.value}`
    }

    const response = await axios.post(`${config.POST_API}`, data, { headers })
    console.log(response.data)
    router.push({path: '/feed'})
  } catch (error) {
    console.log(error)
  }
  console.log(post.value)
  
}
</script>

<template>
  <textarea v-model="post" placeholder="what's on your mind" maxlength="500" minlength="1"> </textarea>
  <button @click="onSubmit">Post</button>
</template>
