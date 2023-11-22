<script setup>
import PostTemplate from './PostTemplate.vue'
import { reactive } from 'vue'

async function getUploads() {
  try {
    // Assuming you have functions to fetch data from both APIs
    const userApiResponse = await fetchUserApi()
    const imageApiResponse = await fetchImageApi()

    // Assuming the responses are arrays of objects
    const users = userApiResponse
    const images = imageApiResponse.slice(0, 10) // Cut the response to the first 10 items

    // Combine data from both APIs
    const combinedData = images.map(({ url, title }, index) => ({
      name: users[index].name, // Assuming the user data has a 'name' property
      url,
      title: title
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

async function fetchImageApi() {
  const response = await fetch('https://jsonplaceholder.typicode.com/photos')
  return response.json()
}

const data = reactive({
  uploadList: []
})

data.uploadList = await getUploads()
</script>

<template>
  <PostTemplate v-for="item in data.uploadList" :upload-item="item" v-bind:key="item.name" />
</template>
