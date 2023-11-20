<script setup>
import { reactive } from 'vue'
let uploadList = reactive([])
async function getUploads() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const username = response.json()
  uploadList = username
}
</script>
<template>
  <div class="frame">
    <div v-for="user in uploadList" v-bind:key="user.id">
      {{ user }}
    </div>
    <!-- <header>Uploader user</header>
    <div class="stats-container">
      <p>Likes:</p>
    </div>
    <img />
    <p>Caption</p>
    <div class="comment-section"></div> -->
  </div>
</template>

<style>
.frame {
  border: 2px solid black;
}
</style>
