<script lang="ts">
export default {
    data() {
        return {
            form: {
                date: this.store.props.entry.date,
                date_entered: this.store.props.entry.date_entered,
                description: this.store.props.entry.description,
                action: this.store.props.entry.action,
                i_acct: this.store.props.entry.i_acct,
                i_taxable: this.store.props.entry.i_taxable,
                i_taxincluded: this.store.props.entry.i_taxincluded,
                quantity_num: this.store.props.entry.quantity_num,
                quantity_denom: this.store.props.entry.quantity_denom,
                i_price_num: this.store.props.entry.i_price_num,
                i_price_denom: this.store.props.entry.i_price_denom,
                i_discount_num: this.store.props.entry.i_discount_num,
                i_discount_denom: this.store.props.entry.i_discount_denom,
                i_disc_type: this.store.props.entry.i_disc_type,
                i_disc_how: this.store.props.entry.i_disc_how,
                i_taxtable: this.store.props.entry.i_taxtable,
            },
            quantity:
                this.store.props.entry.quantity_num /
                this.store.props.entry.quantity_denom,
            price:
                this.store.props.entry.i_price_num /
                this.store.props.entry.i_price_denom,
            discount:
                this.store.props.entry.i_discount_num /
                this.store.props.entry.i_discount_denom,
            tax: null,
        };
    },

    computed: {
        subtotal() {
            let entry = this.form;
            let total = this.quantity * this.price;
            let discount = this.discount;
            let tax = this.tax;
            if (entry.i_taxincluded) {
                if (entry.i_disc_type === "VALUE") {
                    return total - discount - tax;
                }
                if (entry.i_disc_type === "PERCENT") {
                    return total - (total * discount) / 100 - tax;
                }
            } else {
                if (entry.i_disc_type === "VALUE") {
                    return total - discount;
                }
                if (entry.i_disc_type === "PERCENT") {
                    return total - (total * discount) / 100;
                }
            }
        },

        commodity() {
            let account = this.store.props.i_accounts.find(
                (element) => element.guid === this.form.i_acct
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
            this.form.i_price_num = this.price * this.form.i_price_denom;
            this.form.i_discount_num = this.discount * this.form.i_discount_denom;

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
            if (this.form.i_taxtable === null || this.form.i_taxable === false) {
                this.tax = 0;
                return;
            }

            let invoice_taxtable = this.store.props.taxtables.find(
                (element) => element.guid === this.form.i_taxtable
            );

            let tax = 0;
            for (let index = 0; index < invoice_taxtable.entries.length; index++) {
                const item = invoice_taxtable.entries[index];
                let tax_amount = item.amount_num / item.amount_denom;
                if (item.type == 2) {
                    tax = tax + (this.quantity * this.price * tax_amount / 100);
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
                    <form-label for="invoice_account" value="Income Account" />
                    <select id="invoice_account" v-model="form.i_acct" required
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="i_account in store.props.i_accounts" :key="i_account.guid"
                            :value="i_account.guid">
                            {{ i_account.name }}
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
                    <form-label for="discount_type" value="Discount Type" />
                    <select v-model="form.i_disc_type"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="discount_type in store.props.discount_types" :key="discount_type.value"
                            :value="discount_type.value">
                            {{ discount_type.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <form-label for="discount_how" value="Discount How" />
                    <select v-model="form.i_disc_how"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="discount_how in store.props.discount_hows" :key="discount_how.value"
                            :value="discount_how.value">
                            {{ discount_how.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <form-label for="discount" value="Discount" />
                    <form-input id="discount" type="number" v-model="discount" min="0" />
                </div>

                <div>
                    <form-label for="taxable" value="Taxable?" />
                    <select id="taxable" name="taxable" v-model="form.i_taxable"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        @change="calculate_tax">
                        <option :value="false">No</option>
                        <option :value="true">Yes</option>
                    </select>
                </div>

                <div>
                    <form-label for="taxincluded" value="Tax Included?" />
                    <select id="taxincluded" name="taxincluded" v-model="form.i_taxincluded"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option :value="false">No</option>
                        <option :value="true">Yes</option>
                    </select>
                </div>

                <div>
                    <form-label for="taxtable" value="Tax Table" />
                    <select id="taxtable" name="taxtable" v-model="form.i_taxtable"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        @change="calculate_tax">
                        <option :value="null" class="text-gray-500">
                            Select Tax Table
                        </option>
                        <option v-for="taxtable in store.props.taxtables" :key="taxtable.guid" :value="taxtable.guid">
                            {{ taxtable.name }}
                        </option>
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
            <form-button :class="{ 'opacity-25': form.processing || form.i_acct === undefined }"
                :disabled="form.processing || form.i_acct === undefined" title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </div>
    </form>
</template>