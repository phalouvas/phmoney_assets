<script setup lang="ts">
import JobsIndex from '@/components/business/jobs/JobsIndex.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/jobs`);
    }
}
</script>

<template>
  <AppLayout title="Jobs">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <JobsIndex />
    </div>
  </AppLayout>
</template>
