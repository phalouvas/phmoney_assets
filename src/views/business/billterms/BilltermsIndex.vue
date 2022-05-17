<script setup lang="ts">
import BilltermsIndex from '@/components/business/billterms/BilltermsIndex.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/billterms`);
    }
}
</script>

<template>
  <AppLayout title="Bill Terms">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <BilltermsIndex />
    </div>
  </AppLayout>
</template>
