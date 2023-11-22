<script setup>
import FeedPage from '@/components/FeedPage.vue'
</script>

<template>
  <Suspense>
    <template #fallback>Loading...</template>
    <FeedPage />
  </Suspense>
</template>
