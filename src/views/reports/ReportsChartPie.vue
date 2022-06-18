<script setup lang="ts">
import ReportsChartPie from "@/components/reports/ReportsChartPie.vue";
</script>

<script lang="ts">
export default {
  data() {
    return {
      extra_params: {
        level: null,
      },
      levels: [null, 0, 1, 2, 3, 4, 5, 6],
    };
  },
};
</script>

<template>
  <ReportLayout title="Pie Chart" :extra_params="extra_params">
    <template #settings>
      <div class="flex gap-2">
        <div>
          <form-label for="levels" value="Levels of subaccounts" />
          <select
            id="levels"
            v-model="store.report_settings.params.level"
            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
          >
            <option v-for="level in levels" :value="level">
              {{ level }}
            </option>
          </select>
        </div>
      </div>
    </template>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ReportsChartPie v-if="store.props.currency && !store.processing" />
    </div>
  </ReportLayout>
</template>
