<script setup lang="ts">
import TransactionsFromCsvPage1 from '@/components/import/transactions_from_csv/TransactionsFromCsvPage1.vue'
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page1`);
  },
}
</script>

<template>
  <ImportLayout title="Import Transactions from CSV">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TransactionsFromCsvPage1 />
    </div>
  </ImportLayout>
</template>
