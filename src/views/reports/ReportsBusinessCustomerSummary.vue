<script setup lang="ts">
import ReportsBusinessCustomerSummary from "@/components/reports/ReportsBusinessCustomerSummary.vue";
</script>

<template>
  <ReportLayout title="Customer Summary" :extra_params="{}" :show_accounts="false">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ReportsBusinessCustomerSummary v-if="store.props.currency && !store.processing" />
    </div>
  </ReportLayout>
</template>
