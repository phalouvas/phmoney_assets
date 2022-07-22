<script setup lang="ts">
import ReportsAccountSummary from '@/components/reports/ReportsAccountSummary.vue'
</script>

<template>
  <ReportLayout title="General Ledger" :show_export_csv="true" :show_export_json="true">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ReportsAccountSummary v-if="store.props.currency && !store.processing" />
    </div>
  </ReportLayout>
</template>
