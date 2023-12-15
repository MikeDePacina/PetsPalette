<script setup>
import { useAuthStore } from '@/AuthStore'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()
auth.logout()
router.push({ path: '/' })
</script>
<template>
  <p>Logging out...</p>
</template>
