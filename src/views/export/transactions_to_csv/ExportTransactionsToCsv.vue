<script setup lang="ts">
import ExportTransactionsToCsv from '@/components/export/transactions_to_csv/ExportTransactionsToCsv.vue'
</script>

<template>
  <ImportLayout title="Export Transactions to CSV">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ExportTransactionsToCsv />
    </div>
  </ImportLayout>
</template>
