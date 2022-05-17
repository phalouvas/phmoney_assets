<script setup lang="ts">
import ReportsChartColumn from '@/components/reports/ReportsChartColumn.vue'
import TotalIncome from '@/components/dashboard/TotalIncome.vue'
import TotalExpenses from '@/components/dashboard/TotalExpenses.vue'
import TotalProfit from '@/components/dashboard/TotalProfit.vue'
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}dashboard2`);
  },
}
</script>

<template>
  <AppLayout title="Dashboard">
    <div class="flex flex-wrap gap-4 justify-between mt-4" v-if="!store.processing">
      <TotalIncome />
      <TotalExpenses />
      <TotalProfit />
    </div>
    <div class="bg-white border mt-4">
      <div class="font-bold p-4">Cash Flow</div>
      <ReportsChartColumn v-if="store.props.columns" />
    </div>
  </AppLayout>
</template>
