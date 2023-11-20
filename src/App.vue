<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import NavBar from '@/components/NavBar.vue'
</script>

<template>
  <header>
    <!-- <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/feed">Feed</RouterLink>
      </nav>
    </div> -->
    <NavBar />
  </header>

  <RouterView />
</template>

<style scoped></style>
