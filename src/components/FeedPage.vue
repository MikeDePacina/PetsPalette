<script setup>
import PostTemplate from './PostTemplate.vue'
import { reactive } from 'vue'

async function getPosts() {
  try {
    // Assuming you have functions to fetch data from both APIs
    const userApiResponse = await fetchUserApi()
    const postApiResponse = await fetchPostApi()

    // Assuming the responses are arrays of objects
    // const users = userApiResponse
    const posts = postApiResponse.slice(0, 10) // Cut the response to the first 10 items

    // Combine data from both APIs
    const combinedData = posts.map(({ id, body }, index) => ({
      id: id,
      name: userApiResponse[index].name, // Assuming the user data has a 'name' property
      body: body
    }))

    console.log(combinedData)
    return combinedData
  } catch (error) {
    console.error('Error fetching data:', error)
  }
}

async function fetchUserApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}

async function fetchPostApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  return response.json()
}

const data = reactive({
  uploadList: []
})

data.uploadList = await getPosts()
</script>

<template>
  <PostTemplate v-for="item in data.uploadList" :upload-item="item" v-bind:key="item.name" />
</template>
