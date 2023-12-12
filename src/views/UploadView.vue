<script setup>
import { ref } from 'vue'
const post = ref('')

function onSubmit() {
  console.log(post.value)
  document.getElementById('body').value = ''
}
</script>

<template>
  <!-- <label>Title</label>
    <input type="text" v-model="data.title" />
    <input type="file" accept=".jpg" @change="onImageSelected" />
    <label>Caption</label>
    <input type="text" v-model="data.caption" /> -->
  <textarea id="body" v-model="post" placeholder="what's on your mind"> </textarea>
  <button @click="onSubmit">Post</button>
</template>
