<script setup lang="ts">
import ApiTokenManager from "@/components/api/ApiTokenManager.vue";
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}user/api-tokens`);
  },
};
</script>

<template>
  <FormLayout title="API Tokens">
    <ApiTokenManager v-if="!store.processing"/>
  </FormLayout>
</template>
