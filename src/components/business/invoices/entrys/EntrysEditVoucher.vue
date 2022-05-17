<script lang="ts">
export default {
    data() {
        return {
            form: {
                date: this.store.props.entry.date,
                date_entered: this.store.props.entry.date_entered,
                description: this.store.props.entry.description,
                action: this.store.props.entry.action,
                b_acct: this.store.props.entry.b_acct,
                b_taxable: this.store.props.entry.b_taxable,
                b_taxincluded: this.store.props.entry.b_taxincluded,
                quantity_num: this.store.props.entry.quantity_num,
                quantity_denom: this.store.props.entry.quantity_denom,
                b_price_num: this.store.props.entry.b_price_num,
                b_price_denom: this.store.props.entry.b_price_denom,
                b_taxtable: this.store.props.entry.b_taxtable,
                billable: this.store.props.entry.billable,
            },
            quantity:
                this.store.props.entry.quantity_num /
                this.store.props.entry.quantity_denom,
            price:
                this.store.props.entry.b_price_num /
                this.store.props.entry.b_price_denom,
            tax: null,
        };
    },

    computed: {
        subtotal() {
            let entry = this.form;
            let total = this.quantity * this.price;
            let tax = this.tax;
            if (entry.i_taxincluded) {
                return total - tax;
            } else {
                return total;
            }
        },

        commodity() {
            let account = this.store.props.b_accounts.find(
                (element) => element.guid === this.form.b_acct
            );
            if (account) {
                return account.commodity;
            }
            return null;
        },
    },

    mounted() {
        this.calculate_tax();
    },

    methods: {
        async submit() {
            this.form.quantity_num = this.quantity * this.form.quantity_denom;
            this.form.b_price_num = this.price * this.form.b_price_denom;

            if (this.$route.name === "business.invoices.entrys.create") {
                await this.store.post(
                    `${import.meta.env.VITE_ROOT}business/invoices/${this.$route.params.invoice_pk}/entrys/store`,
                    this.form
                );
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/invoices/${this.$route.params.invoice_pk}/entrys/update/${this.$route.params.entry_pk}`,
                    this.form
                );
            }
            this.$router.back();
        },

        calculate_tax() {
            if (this.form.b_taxtable === null || this.form.b_taxable === false) {
                this.tax = 0;
                return;
            }

            let bill_taxtable = this.$page.props.taxtables.find(
                (element) => element.guid === this.form.b_taxtable
            );

            let tax = 0;
            for (let index = 0; index < bill_taxtable.entries.length; index++) {
                const item = bill_taxtable.entries[index];
                let tax_amount = item.amount_num / item.amount_denom;
                if (item.type == 2) {
                    tax = tax + (this.quantity * this.price * tax_amount) / 100;
                } else {
                    tax = tax + tax_amount;
                }
            }
            this.tax = tax;
        },
    },
};
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <div class="p-3 border">
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="date_opened" value="Date" />
                    <form-input id="date_opened" type="date" v-model="form.date" required />
                </div>

                <div>
                    <form-label for="description" value="Description" />
                    <form-input id="description" type="text" v-model="form.description" />
                </div>

                <div>
                    <form-label for="action" value="Action" />
                    <select id="action" v-model="form.action"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option :value="null">- Select an action -</option>
                        <option v-for="action in store.props.actions" :value="action">
                            {{ action }}
                        </option>
                    </select>
                </div>

                <div>
                    <form-label for="bill_account" value="Expense Account" />
                    <select id="bill_account" v-model="form.b_acct" required
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="b_account in store.props.b_accounts" :key="b_account.guid"
                            :value="b_account.guid">
                            {{ b_account.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <form-label for="quantity" value="Quantity" />
                    <form-input id="quantity" type="number" v-model="quantity" min="0" @change="calculate_tax" />
                </div>

                <div>
                    <form-label for="price" value="Unit Price" />
                    <form-input id="price" type="number" v-model="price" min="0" @change="calculate_tax" />
                </div>

                <div>
                    <form-label for="billable" value="Billable?" />
                    <select id="billable" name="billable" v-model="form.billable"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        @change="calculate_tax">
                        <option :value="false">No</option>
                        <option :value="true">Yes</option>
                    </select>
                </div>

                <div>
                    <form-label for="subtotal" value="Subtotal" />
                    <amount-financial v-if="commodity" :amount="subtotal" :commodity="commodity" />
                </div>

                <div>
                    <form-label for="tax" value="Tax" />
                    <amount-financial v-if="commodity" :amount="tax" :commodity="commodity" />
                </div>
            </div>
        </div>

        <div class="flex gap-2 items-center justify-end mt-4">
            <form-button :class="{ 'opacity-25': form.processing || form.b_acct === undefined }"
                :disabled="form.processing || form.b_acct === undefined" title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </div>
    </form>
</template>