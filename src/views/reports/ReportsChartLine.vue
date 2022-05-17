<script setup lang="ts">
import ReportsChartLine from "@/components/reports/ReportsChartLine.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      extra_params: {
        step_size: "One Month",
      },
    };
  },
};
</script>

<template>
  <ReportLayout title="Line Chart" :extra_params="extra_params">
    <template #settings>
      <div class="flex gap-2">
        <div>
          <form-label for="step_size" value="Step Size" />
          <select
            id="step_size"
            v-model="store.report_settings.params.step_size"
            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            <option>One Day</option>
            <option>One Week</option>
            <option>Two Weeks</option>
            <option>One Month</option>
            <option>Quarter Year</option>
            <option>Half Year</option>
            <option>One Year</option>
          </select>
        </div>
      </div>
    </template>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ReportsChartLine v-if="store.props.currency && !store.processing" />
    </div>
  </ReportLayout>
</template>
