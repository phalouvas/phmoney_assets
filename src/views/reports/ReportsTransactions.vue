<script setup lang="ts">
import ReportsTransactions from '@/components/reports/ReportsTransactions.vue'
</script>

<script lang="ts">
export default {
  data() {
        return {
            extra_params: {
              "name": true,
              "code": true,
              "date": true,
              "num": true,
              "description": true,
              "memo": true
            },
        }
    },
}
</script>

<template>
  <ReportLayout title="Transactions Report" :extra_params="extra_params" :show_export_csv="true" :show_export_json="true">
    <template #settings>
      <div class="font-bold">Display</div>
      <div class="flex gap-2">
        <div>
          <form-label for="filter_name" value="Account Name" />
          <form-checkbox id="filter_name" v-model:checked="store.report_settings.params.name" />
        </div>
        <div>
          <form-label for="filter_code" value="Account Code" />
          <form-checkbox id="filter_code" v-model:checked="store.report_settings.params.code" />
        </div>
        <div>
          <form-label for="filter_date" value="Date" />
          <form-checkbox id="filter_date" v-model:checked="store.report_settings.params.date" />
        </div>
        <div>
          <form-label for="filter_num" value="Num" />
          <form-checkbox id="filter_num" v-model:checked="store.report_settings.params.num" />
        </div>
        <div>
          <form-label for="filter_description" value="Description" />
          <form-checkbox id="filter_description" v-model:checked="store.report_settings.params.description" />
        </div>
        <div>
          <form-label for="filter_memo" value="Memo" />
          <form-checkbox id="filter_memo" v-model:checked="store.report_settings.params.memo" />
        </div>
      </div>
    </template>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <ReportsTransactions v-if="store.props.currency && !store.processing" />
    </div>
  </ReportLayout>
</template>
