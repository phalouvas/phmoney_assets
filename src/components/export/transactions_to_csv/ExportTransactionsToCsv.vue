<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}export/transactions-to-csv/index`);
        this.props.accounts = [...this.store.props.accounts];
    },

    data() {
        return {
            form: {
                date_start: this.store.user.options.accounting_period.date_start,
                date_end: this.store.user.options.accounting_period.date_end,
                accounts: [],
            },
            props: {
                accounts: [],
            },
        };
    },

    methods: {
        async submit() {
            await this.store.post(`${import.meta.env.VITE_ROOT}export/transactions-to-csv/download`, this.form);

            if (!this.store.errors) {
                this.store.download(this.store.props, 'Transactions.csv', 'text/csv;charset=utf-8;');
            }
        },
    },
}
</script>

<template>
    <div class="p-6">
        <form @submit.prevent="submit">
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="date_start" value="Start Date" />
                    <FormDateStart id="date_start" name="date_start" v-model="form.date_start" />
                </div>
                <div>
                    <form-label for="date_end" value="End Date" />
                    <FormDateEnd id="date_end" name="date_end" v-model="form.date_end" />
                </div>
            </div>
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="accounts" value="Select Accounts" />
                    <select multiple v-model="form.accounts"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="account in props.accounts" :key="account.guid" :value="account.guid">
                            {{ account.name_indent }}
                        </option>
                    </select>
                </div>
            </div>
            <div class="flex items-center justify-end mt-4 gap-2">
                <form-button :class="{ 'opacity-25': store.processing }"
                    :disabled="store.processing || form.upload_file === null" title="download">
                    <span class="material-icons-outlined">download</span>
                </form-button>
            </div>
        </form>

    </div>
</template>