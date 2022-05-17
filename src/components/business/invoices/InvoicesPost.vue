<script lang="ts">
import { store } from "@/helpers/store";

export default {
    data() {
        return {
            form: {
                date_posted: store.convert_date(),
                date_due: store.convert_date(this.store.props.date_due),
                description: null,
                account_guid: null,
                accumulate: true,
            },
        };
    },

    methods: {
        async submit() {

            await this.store.post(`${import.meta.env.VITE_ROOT}business/invoices/post/${this.$route.params.invoice_pk}`, this.form);
            this.$router.back();
        },
    },
}
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <div class="p-3 border">

            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="date_posted" value="Post Date" />
                    <form-input id="date_posted" type="date" v-model="form.date_posted" required />
                </div>

                <div>
                    <form-label for="date_due" value="Due Date" />
                    <form-input id="date_due" type="date" v-model="form.date_due"
                        :class="{ 'opacity-60': store.props.invoice.terms }" :disabled="store.props.invoice.terms"
                        required />
                </div>

                <div>
                    <form-label for="description" value="Description" />
                    <form-input id="description" type="text" v-model="form.description" />
                </div>

                <div>
                    <form-label for="account" value="Post to Account" />
                    <select v-if="store.getInvoiceType() === 'Invoice'" id="account" v-model="form.account_guid"
                        required
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option disabled :value="null">- Select receivable account -</option>
                        <option v-for="i_account in store.props.i_accounts" :key="i_account.guid"
                            :value="i_account.guid">
                            {{ i_account.name }}
                        </option>
                    </select>
                    <select v-else id="account" v-model="form.account_guid" required
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option disabled :value="null">- Select payable account -</option>
                        <option v-for="b_account in store.props.b_accounts" :key="b_account.guid"
                            :value="b_account.guid">
                            {{ b_account.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <form-label for="accumulate" value="Accumulate Splits?" />
                    <form-checkbox id="accumulate" v-model:checked="form.accumulate" />
                </div>

            </div>

        </div>

        <div class="flex gap-2 items-center justify-end mt-4">
            <form-button :class="{ 'opacity-25': form.processing || !form.account_guid }" :disabled="form.processing || !form.account_guid"
                title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </div>
    </form>
</template>