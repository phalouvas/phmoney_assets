<script lang="ts">
export default {
    data() {
        return {
            form: {
                post_date: this.moment().format("YYYY-MM-DD"),
                income_account_guid: null,
                expense_account_guid: null,
                description: null,
            },
        };
    },

    methods: {
        async submit() {
            if (confirm("Are you sure you want to close book?")) {
                await this.store.post(`${import.meta.env.VITE_ROOT}tools/closebook/store`, this.form);
                this.$router.back();
            }
        },
    },
}
</script>

<template>
    <form @submit.prevent="submit" class="p-6" v-if="!store.processing">
        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="post_date" value="ClosingDate" />
                <form-input id="post_date" type="date" v-model="form.post_date" required />
            </div>
            <div>
                <form-label for="income_account_guid" value="Income Total" />
                <select id="income_account_guid" v-model="form.income_account_guid" required
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="account in store.props.accounts" :key="account.guid" :value="account.guid">{{
                            account.name_indent
                    }}
                    </option>
                </select>
            </div>
            <div>
                <form-label for="income_account_guid" value="Expense Total" />
                <select id="income_account_guid" v-model="form.expense_account_guid" required
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="account in store.props.accounts" :key="account.guid" :value="account.guid">{{
                            account.name_indent
                    }}
                    </option>
                </select>
            </div>
            <div>
                <form-label for="description" value="Description" />
                <form-input id="description" type="text" class="mt-1 block w-full" v-model="form.description"
                    autocomplete="description" />
            </div>
        </div>

        <div class="flex flex-wrap gap-2 mt-4">
            <form-button :class="{ 'opacity-25': store.processing }" :disabled="store.processing" title="Submit">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </div>
    </form>
</template>