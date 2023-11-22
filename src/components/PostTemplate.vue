<script setup>
const props = defineProps({
  uploadItem: {
    type: Object,
    required: true
  }
})
</script>
<template>
  <div class="frame">
    <header>{{ props.uploadItem.name }}</header>
    <h2>{{ props.uploadItem.title }}</h2>
    <img :src="props.uploadItem.url" />
    <RouterLink to="/post/2">Go to page </RouterLink>
    <!-- <div class="stats-container">
      <p>Likes:</p>
      <button >like</button>
    </div>
    <div class="comment-section"></div> -->
  </div>
</template>

<style></style>
