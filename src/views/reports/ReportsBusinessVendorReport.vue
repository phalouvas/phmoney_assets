<script setup lang="ts">
import ReportsBusinessVendorReport from "@/components/reports/ReportsBusinessVendorReport.vue";
</script>

<script lang="ts">
export default {
    data() {
        return {
            extra_params: {
                vendor: null,
            },
        };
    },
};
</script>

<template>
    <ReportLayout title="Vendor Report" :extra_params="extra_params" :show_accounts="false">
        <template #settings>
            <div class="flex gap-2">
                <div>
                    <form-label for="vendor" value="Vendor" />
                    <select id="vendor" v-model="store.report_settings.params.vendor"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="vendor in store.props.vendors" :key="vendor.pk" :value="vendor">
                            {{ vendor.name }}
                        </option>
                    </select>
                </div>
            </div>
        </template>
        <div class="bg-white shadow mt-4 prose max-w-none">
            <ReportsBusinessVendorReport v-if="store.props.currency && !store.processing" />
        </div>
    </ReportLayout>
</template>
