<script setup>
import { useRoute } from 'vue-router'
import { reactive } from 'vue'
const route = useRoute()
const state = reactive({
  item: null,
  numOfLikes: 0
})

async function getItem() {
  console.log('retrieved')
}

function getNumOfLikes(id) {
  return 3 * id
}

state.numOfLikes = getNumOfLikes(route.params.id)
state.item = getItem()

function likePost() {
  console.log('send to SQS')
  return state.numOfLikes++
}
</script>
<template>
  <p>Post {{ route.params.id }}</p>
  <p>Username</p>
  <p>post</p>
  <p>Likes: {{ state.numOfLikes }}</p>
  <button @click="likePost">like</button>
</template>
