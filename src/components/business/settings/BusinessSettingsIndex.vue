<script lang="ts">
export default {
    data() {
        return {
            form: {
                options: {
                    accounting_period: {
                        date_start: this.store.props.options.accounting_period.date_start,
                        date_end: this.store.props.options.accounting_period.date_end,
                    },
                    business: {
                        company_name: this.store.props.options.business.company_name,
                        company_address: this.store.props.options.business.company_address,
                        company_contact_person:
                            this.store.props.options.business.company_contact_person,
                        company_phone_number: this.store.props.options.business.company_phone_number,
                        company_fax_number: this.store.props.options.business.company_fax_number,
                        company_email_address: this.store.props.options.business.company_email_address,
                        company_website_url: this.store.props.options.business.company_website_url,
                        company_id: this.store.props.options.business.company_id,
                        default_customer_taxtable:
                            this.store.props.options.business.default_customer_taxtable,
                        default_vendor_taxtable:
                            this.store.props.options.business.default_vendor_taxtable,
                    },
                    tax: {
                        tax_number: this.store.props.options.tax.tax_number,
                    },
                    counters: {
                        bill: this.store.props.options.counters.bill,
                        vendor: this.store.props.options.counters.vendor,
                        invoice: this.store.props.options.counters.invoice,
                        job: this.store.props.options.counters.job,
                        employee: this.store.props.options.counters.employee,
                    },
                    counter_formats: {
                        bill: this.store.props.options.counter_formats.bill,
                        vendor: this.store.props.options.counter_formats.vendor,
                        invoice: this.store.props.options.counter_formats.invoice,
                        job: this.store.props.options.counter_formats.job,
                        employee: this.store.props.options.counter_formats.employee,
                    },
                },
            },
        }
    },

    methods: {
        async submit() {
            let team_id = this.store.props.team.id;
            await this.store.put(`${import.meta.env.VITE_ROOT}teams/${team_id}/options/store`, this.form);
            if (this.store.errors === null) {
                this.store.errors = "Settings Saved Successfully!";
            }
            this.$router.back();
        },
    },
}
</script>

<template>
    <div class="p-6">
        <form @submit.prevent="submit">
            <div class="grid grid-cols-6 gap-6">
                <div class="col-span-6 sm:col-span-6">
                    <h4 class="text-md font-bold text-gray-900">Accounting Period</h4>
                </div>

                <div class="col-span-6 sm:col-span-3">
                    <form-label for="accounting_period_date_start" value="Start Date" />
                    <FormDateStart id="accounting_period_date_start" name="accounting_period_date_start"
                        v-model="form.options.accounting_period.date_start" :disabled="!store.props.permissions.canUpdateTeam" />
                </div>
                <div class="col-span-6 sm:col-span-3">
                    <form-label for="accounting_period_date_end" value="End Date" />
                    <FormDateEnd id="accounting_period_date_end" name="accounting_period_date_end"
                        v-model="form.options.accounting_period.date_end" :disabled="!store.props.permissions.canUpdateTeam" />
                </div>

                <div class="col-span-6 sm:col-span-6">
                    <h4 class="text-md font-bold text-gray-900">Business</h4>
                </div>

                <!-- Business Company Name -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="business_company_name" value="Company Name" />

                    <form-input id="business_company_name" type="text" class="mt-1 block w-full"
                        v-model="form.options.business.company_name" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Business Company Address -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="business_company_address" value="Company Address" />

                    <form-input id="business_company_address" type="text" class="mt-1 block w-full"
                        v-model="form.options.business.company_address" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Business Contact Person -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="business_company_contact_person" value="Company Contact Person" />

                    <form-input id="business_company_contact_person" type="text" class="mt-1 block w-full"
                        v-model="form.options.business.company_contact_person" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Business Phone Number -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="business_company_phone_number" value="Company Phone Number" />

                    <form-input id="business_company_phone_number" type="text" class="mt-1 block w-full"
                        v-model="form.options.business.company_phone_number" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Business Fax Number -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="business_company_fax_number" value="Company Fax Number" />

                    <form-input id="business_company_fax_number" type="text" class="mt-1 block w-full"
                        v-model="form.options.business.company_fax_number" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Business Email Number -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="business_company_email_address" value="Company Email Number" />

                    <form-input id="business_company_email_address" type="text" class="mt-1 block w-full"
                        v-model="form.options.business.company_email_address" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Business Website Url -->
                <div class="col-span-6 sm:col-span-4">
                    <form-label for="business_company_website_url" value="Company Website Url" />

                    <form-input id="business_company_website_url" type="text" class="mt-1 block w-full"
                        v-model="form.options.business.company_website_url" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Business Company Id -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="business_company_id" value="Company ID" />

                    <form-input id="business_company_id" type="text" class="mt-1 block w-full"
                        v-model="form.options.business.company_id" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Business Default customer taxtable -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="business_default_customer_taxtable" value="Default Customer Tax Table" />
                    <select id="business_default_customer_taxtable"
                        v-model="form.options.business.default_customer_taxtable"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option :value="null" class="text-gray-500">Select Tax Table</option>
                        <option v-for="taxtable in store.props.taxtables" :key="taxtable.guid" :value="taxtable">
                            {{ taxtable.name }}
                        </option>
                    </select>
                </div>

                <!-- Business Default vendor taxtable -->
                <div class="col-span-6 sm:col-span-4">
                    <form-label for="business_default_vendor_taxtable" value="Default Vendor Tax Table" />
                    <select id="business_default_vendor_taxtable"
                        v-model="form.options.business.default_vendor_taxtable"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option :value="null" class="text-gray-500">Select Tax Table</option>
                        <option v-for="taxtable in store.props.taxtables" :key="taxtable.guid" :value="taxtable">
                            {{ taxtable.name }}
                        </option>
                    </select>
                </div>

                <div class="col-span-6 sm:col-span-6 border-t pt-2">
                    <h4 class="text-md font-bold text-gray-900">Tax</h4>
                </div>

                <!-- Tax Number -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="tax_number" value="Tax Number" />

                    <form-input id="tax_number" type="text" class="mt-1 block w-full"
                        v-model="form.options.tax.tax_number" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <div class="col-span-6 sm:col-span-6 border-t pt-2">
                    <h4 class="text-md font-bold text-gray-900">Counters</h4>
                </div>

                <!-- Bill Number -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="bill_number" value="Bill number" />

                    <form-input id="bill_number" type="number" class="mt-1 block w-full"
                        v-model="form.options.counters.bill" min="0" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Bill Number Format-->
                <div class="col-span-6 sm:col-span-4">
                    <form-label for="bill_number_format" value="Bill number format" />

                    <form-input id="bill_number_format" type="text" class="mt-1 block w-full"
                        v-model="form.options.counter_formats.bill" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Vendor Number -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="vendor_number" value="Vendor number" />

                    <form-input id="vendor_number" type="number" class="mt-1 block w-full"
                        v-model="form.options.counters.vendor" min="0" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Vendor Number Format-->
                <div class="col-span-6 sm:col-span-4">
                    <form-label for="vendor_number_format" value="Vendor number format" />

                    <form-input id="vendor_number_format" type="text" class="mt-1 block w-full"
                        v-model="form.options.counter_formats.vendor" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Invoice Number -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="invoice_number" value="Invoice number" />

                    <form-input id="invoice_number" type="number" class="mt-1 block w-full"
                        v-model="form.options.counters.invoice" min="0" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Invoice Number Format-->
                <div class="col-span-6 sm:col-span-4">
                    <form-label for="vendor_number_format" value="Invoice number format" />

                    <form-input id="invoice_number_format" type="text" class="mt-1 block w-full"
                        v-model="form.options.counter_formats.invoice" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Job Number -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="job_number" value="Job number" />

                    <form-input id="job_number" type="number" class="mt-1 block w-full"
                        v-model="form.options.counters.job" min="0" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Job Number Format-->
                <div class="col-span-6 sm:col-span-4">
                    <form-label for="job_number_format" value="Job number format" />

                    <form-input id="job_number_format" type="text" class="mt-1 block w-full"
                        v-model="form.options.counter_formats.job" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Employee Number -->
                <div class="col-span-6 sm:col-span-2">
                    <form-label for="employee_number" value="Employee number" />

                    <form-input id="employee_number" type="number" class="mt-1 block w-full"
                        v-model="form.options.counters.employee" min="0" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>

                <!-- Employee Number Format-->
                <div class="col-span-6 sm:col-span-4">
                    <form-label for="job_number_format" value="Employee number format" />

                    <form-input id="employee_number_format" type="text" class="mt-1 block w-full"
                        v-model="form.options.counter_formats.employee" :disabled="!store.props.permissions.canUpdateTeam"
                        :class="{ 'opacity-50': !store.props.permissions.canUpdateTeam }" />
                </div>
            </div>

            <form-button class="mt-4" :class="{ 'opacity-25': store.processing }" :disabled="store.processing || !store.props.permissions.canUpdateTeam"
                title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </form>
    </div>
</template>