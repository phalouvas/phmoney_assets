<script setup lang="ts">
import TransactionsFromCsvPage4 from '@/components/import/transactions_from_csv/TransactionsFromCsvPage4.vue'
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page4`);
  },
}
</script>

<template>
  <FormLayout title="Import Completed">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TransactionsFromCsvPage4 />
    </div>
  </FormLayout>
</template>
