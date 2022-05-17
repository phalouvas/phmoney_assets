<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Progress from '@/common/Progress.vue'
import AlertMessage from '@/common/AlertMessage.vue'
</script>

<template>
  <header>
    <div class="wrapper">
      <Progress />
      <AlertMessage :message="store.errors" @close="store.errors = null" />
    </div>
  </header>
  <RouterView />
</template>

<style>
@import '@/assets/tailwind.css';
</style>
