<script setup lang="ts">
import TaxtablesIndex from '@/components/business/taxtables/TaxtablesIndex.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/taxtables`);
    }
}
</script>

<template>
  <AppLayout title="Tax Tables">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TaxtablesIndex />
    </div>
  </AppLayout>
</template>
