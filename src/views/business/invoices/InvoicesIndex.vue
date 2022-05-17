<script setup lang="ts">
import InvoicesIndex from '@/components/business/invoices/InvoicesIndex.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/invoices`);
    }
}
</script>

<template>
  <AppLayout title="Invoices">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <InvoicesIndex />
    </div>
  </AppLayout>
</template>
