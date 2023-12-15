<script setup>
import PostTemplate from './PostTemplate.vue'
import { reactive } from 'vue'
import { useAuthStore } from '@/AuthStore'
import config from '../../config.json'
import axios from 'axios'
import { ref } from 'vue'

const auth = useAuthStore()

async function setUsername() {
  try {
    auth.username = username.value
    const body = {
      cognitoUsername: `${auth.cognitoUsername}`,
      chosenUsername: `${auth.username}`
    }
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    }
    const response = await axios.post(config.USER_API, body, { headers })
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }
}
const username = ref('')
async function getPosts(){
  try {
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${auth.token}`
    }
    const response = await axios.get(config.POST_API, { headers })
    if(response.data){
      console.log(response.data)
      return response.data.posts
    }
  } catch (error) {
    console.log(error)
  }
}


const data = reactive({
  uploadList: []
})

data.uploadList = await getPosts()
</script>

<template>
  <div v-if="auth.username == ''">
    <label>First time user, pick a username: </label>
    <input v-model="username" type="text" max="255" />
    <button @click="setUsername">Choose username</button>
  </div>

  <PostTemplate v-else v-for="item in data.uploadList" :upload-item="item" v-bind:key="item.id" />
</template>
