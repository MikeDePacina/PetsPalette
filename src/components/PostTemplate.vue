<script setup>
import { useAuthStore } from '@/AuthStore';
import config from 'C:/Users/miked/PetsPalette/config.json'
import axios from 'axios'
import { ref } from 'vue'
const props = defineProps({
  uploadItem: {
    type: Object,
    required: true
  }
})

const numOfLikes = ref(props.uploadItem.numberOfLikes)
const liked = ref(false)

const auth = useAuthStore();
async function likePost(){
  try {
    const header = {
      'Authorization':`Bearer ${auth.token}`
    }
    const url = `${config.POST_API}/send/${props.uploadItem.id} ${auth.token}`
    const response = await axios.get(url, { header })
    console.log(response.data)
  } catch (error) {
    console.log(error)
  }finally{
    numOfLikes.value++
    liked.value = true
  }
}

</script>
<template>
  <div class="frame">
    <header>{{ props.uploadItem.username }}</header>
    <p>{{ props.uploadItem.body }}</p>
    <p>Number of likes: {{ numOfLikes }}</p>
    <button v-if="!liked" @click="likePost">like the Post</button>
    <p v-else>Already liked the Post</p>
  </div>
</template>

<style>
.frame {
  border-style: solid;
  padding: 0.5em;
}
</style>
