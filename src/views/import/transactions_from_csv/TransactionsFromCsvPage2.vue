<script setup lang="ts">
import TransactionsFromCsvPage2 from '@/components/import/transactions_from_csv/TransactionsFromCsvPage2.vue'
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page2`);
  },
}
</script>

<template>
  <FormLayout title="Select File">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TransactionsFromCsvPage2 />
    </div>
  </FormLayout>
</template>
