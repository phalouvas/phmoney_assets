<script lang="ts">

export default {

    data() {
        return {
            form: {
                taxtable: this.store.props.taxtable.guid,
                account: this.store.props.taxtableentry.account,
                amount_num: this.store.props.taxtableentry.amount_num,
                amount_denom: this.store.props.taxtableentry.amount_denom ?? 100,
                type: this.store.props.taxtableentry.type ?? 1,
            },
            account: this.store.props.taxtableentry.tax_account ?? 1,
            amount: this.store.props.taxtableentry.amount_num / this.store.props.taxtableentry.amount_denom,
        };
    },

    methods: {
        async submit() {
            let denom = 100;
            if (this.form.type == 2) {
                denom = 100000;
            }

            this.form.amount_num = this.amount * denom;
            this.form.amount_denom = denom;

            if (this.$route.name === 'business.taxtables.entrys.create') {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/taxtables/${this.$route.params.taxtable_pk}/taxtableentrys/store`, this.form);
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/taxtables/${this.$route.params.taxtable_pk}/taxtableentrys/update/${this.$route.params.entry_pk}`, this.form);
            }
            this.$router.back();
        },
    },
};
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <div class="p-3 border">
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="type" value="Tax Included" />
                    <select v-model="form.type" name="type" id="type"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option value="1">Percent %</option>
                        <option value="2">Value €</option>
                    </select>
                </div>

                <div>
                    <form-label for="amount" value="Value" />
                    <form-input id="amount" type="number" v-model="amount" min="0" required />
                </div>

                <div>
                    <form-label for="account" value="Account" />
                    <select id="account" v-model="form.account" required
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="account in store.props.accounts" :key="account.guid" :value="account.guid">{{
                                account.name
                        }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex gap-2 items-center justify-end mt-4">
            <form-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </div>
    </form>
</template>