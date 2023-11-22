<script setup>
import { reactive } from 'vue'
const data = reactive({
  title: '',
  caption: '',
  photo: null
})

function onImageSelected(e) {
  console.log(e)
  data.photo = e.target.files[0]
}
</script>

<template>
  <form>
    <label>Title</label>
    <input type="text" v-model="data.title" />
    <input type="file" accept=".jpg" @change="onImageSelected" />
    <label>Caption</label>
    <input type="text" v-model="data.caption" />
    <button>Upload</button>
  </form>
</template>
