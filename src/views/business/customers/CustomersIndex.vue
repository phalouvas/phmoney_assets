<script setup lang="ts">
import CustomersIndex from '@/components/business/customers/CustomersIndex.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/customers`);
    }
}
</script>

<template>
  <AppLayout title="Customers">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <CustomersIndex />
    </div>
  </AppLayout>
</template>
