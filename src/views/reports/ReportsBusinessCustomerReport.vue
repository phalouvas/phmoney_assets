<script setup lang="ts">
import ReportsBusinessCustomerReport from "@/components/reports/ReportsBusinessCustomerReport.vue";
</script>

<script lang="ts">
export default {
    data() {
        return {
            extra_params: {
                customer: null,
            },
        };
    },
};
</script>

<template>
    <ReportLayout title="Customer Report" :extra_params="extra_params" :show_accounts="false">
        <template #settings>
            <div class="flex gap-2">
                <div>
                    <form-label for="customer" value="Customer" />
                    <select id="customer" v-model="store.report_settings.params.customer"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="customer in store.props.customers" :key="customer.pk" :value="customer">
                            {{ customer.name }}
                        </option>
                    </select>
                </div>
            </div>
        </template>
        <div class="bg-white shadow mt-4 prose max-w-none">
            <ReportsBusinessCustomerReport v-if="store.props.currency && !store.processing" />
        </div>
    </ReportLayout>
</template>
