<script setup lang="ts">
import ReportsBusinessEmployeeReport from "@/components/reports/ReportsBusinessEmployeeReport.vue";
</script>

<script lang="ts">
export default {
    data() {
        return {
            extra_params: {
                employee: null,
            },
        };
    },
};
</script>

<template>
    <ReportLayout title="Employee Report" :extra_params="extra_params" :show_accounts="false">
        <template #settings>
            <div class="flex gap-2">
                <div>
                    <form-label for="employee" value="Employee" />
                    <select id="employee" v-model="store.report_settings.params.employee"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="employee in store.props.employees" :key="employee.pk" :value="employee">
                            {{ employee.username }}
                        </option>
                    </select>
                </div>
            </div>
        </template>
        <div class="bg-white shadow mt-4 prose max-w-none">
            <ReportsBusinessEmployeeReport v-if="store.props.currency && !store.processing" />
        </div>
    </ReportLayout>
</template>
