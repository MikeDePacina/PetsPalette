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
    <p>{{ props.uploadItem.body }}</p>
    <router-link :to="`/post/${props.uploadItem.id}`">Go to page </router-link>
  </div>
</template>

<style>
.frame {
  border-style: solid;
  padding: 0.5em;
}
</style>
