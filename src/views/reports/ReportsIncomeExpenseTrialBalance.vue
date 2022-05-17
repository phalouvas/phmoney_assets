<script setup lang="ts">
import ReportsIncomeExpenseTrialBalance from "@/components/reports/ReportsIncomeExpenseTrialBalance.vue";
</script>

<template>
  <ReportLayout title="Trial Balance" :extra_params="{}" :show_export_csv="true">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ReportsIncomeExpenseTrialBalance v-if="store.props.currency && !store.processing" />
    </div>
  </ReportLayout>
</template>
