<script setup lang="ts">
import VendorsIndex from '@/components/business/vendors/VendorsIndex.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/vendors`);
    }
}
</script>

<template>
  <AppLayout title="Vendors">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <VendorsIndex />
    </div>
  </AppLayout>
</template>
