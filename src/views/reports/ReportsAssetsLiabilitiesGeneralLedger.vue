<script setup lang="ts">
import ReportsAssetsLiabilitiesGeneralLedger from '@/components/reports/ReportsAssetsLiabilitiesGeneralLedger.vue'
</script>

<template>
  <ReportLayout title="General Ledger" :extra_params="extra_params">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ReportsAssetsLiabilitiesGeneralLedger v-if="store.props.currency && !store.processing" />
    </div>
  </ReportLayout>
</template>
