<script lang="ts">

export default {

    data() {
        return {
            form: {
                id: this.store.props.customer.id,
                name: this.store.props.customer.name,
                active: this.store.props.customer.active,
                addr_name: this.store.props.customer.addr_name,
                addr_addr1: this.store.props.customer.addr_addr1,
                addr_addr2: this.store.props.customer.addr_addr2,
                addr_addr3: this.store.props.customer.addr_addr3,
                addr_addr4: this.store.props.customer.addr_addr4,
                addr_phone: this.store.props.customer.addr_phone,
                addr_fax: this.store.props.customer.addr_fax,
                addr_email: this.store.props.customer.addr_email,
                notes: this.store.props.customer.notes,
                shipaddr_name: this.store.props.customer.shipaddr_name,
                shipaddr_addr1: this.store.props.customer.shipaddr_addr1,
                shipaddr_addr2: this.store.props.customer.shipaddr_addr2,
                shipaddr_addr3: this.store.props.customer.shipaddr_addr3,
                shipaddr_addr4: this.store.props.customer.shipaddr_addr4,
                shipaddr_phone: this.store.props.customer.shipaddr_phone,
                shipaddr_fax: this.store.props.customer.shipaddr_fax,
                shipaddr_email: this.store.props.customer.shipaddr_email,
                currency: this.store.props.customer.currency,
                discount_num: this.store.props.customer.discount_num ?? 0,
                discount_denom: this.store.props.customer.discount_denom,
                credit_num: this.store.props.customer.credit_num ?? 0,
                credit_denom: this.store.props.customer.credit_denom,
                terms: this.store.props.customer.terms,
                tax_included: this.store.props.customer.tax_included,
                tax_override: this.store.props.customer.tax_override,
                taxtable: this.store.props.customer.taxtable,
            },
            discount:
                this.store.props.customer.discount_num /
                this.store.props.customer.discount_denom,
            credit:
                this.store.props.customer.credit_num /
                this.store.props.customer.credit_denom,
        };
    },

    methods: {
        async submit() {

            let currency = this.store.props.currencies.find(currency => currency.guid === this.form.currency);
            this.form.discount_num = isNaN(this.discount) ? 0 : this.discount * currency.fraction;
            this.form.discount_denom = currency.fraction;
            this.form.credit_num = isNaN(this.credit) ? 0 : this.credit * currency.fraction;
            this.form.credit_denom = currency.fraction;

            if (this.$route.name === 'business.customers.create') {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/customers/store`, this.form);
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/customers/update/${this.$route.params.customer_pk}`, this.form);
            }
            this.$router.back();
        },
    },
};
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <div class="p-3 border">
            <div class="font-bold text-lg">Customer</div>

            <div class="font-semibold text-md">Identification</div>
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="id" value="Number" />
                    <form-input id="id" type="text" v-model="form.id" />
                </div>

                <div>
                    <form-label for="name" value="Name*" />
                    <form-input id="name" type="text" v-model="form.name" required />
                </div>

                <div>
                    <form-label for="active" value="Active" />
                    <form-checkbox id="active" v-model:checked="form.active" />
                </div>
            </div>

            <div class="font-semibold text-md">Billing Address</div>
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="addr_name" value="Name" />
                    <form-input id="addr_name" type="text" v-model="form.addr_name" />
                </div>
                <div>
                    <form-label for="addr_addr1" value="Address 1" />
                    <form-input id="addr_addr1" type="text" v-model="form.addr_addr1" />
                </div>
                <div>
                    <form-label for="addr_addr2" value="Address 2" />
                    <form-input id="addr_addr2" type="text" v-model="form.addr_addr2" />
                </div>
                <div>
                    <form-label for="addr_addr3" value="Address 3" />
                    <form-input id="addr_addr3" type="text" v-model="form.addr_addr3" />
                </div>
                <div>
                    <form-label for="addr_addr4" value="Address 4" />
                    <form-input id="addr_addr4" type="text" v-model="form.addr_addr4" />
                </div>
                <div>
                    <form-label for="addr_phone" value="Phone" />
                    <form-input id="addr_phone" type="text" v-model="form.addr_phone" />
                </div>
                <div>
                    <form-label for="addr_fax" value="Fax" />
                    <form-input id="addr_fax" type="text" v-model="form.addr_fax" />
                </div>
                <div>
                    <form-label for="addr_email" value="Email" />
                    <form-input id="addr_email" type="text" v-model="form.addr_email" />
                </div>
            </div>

            <div class="font-semibold text-md">Notes</div>
            <div class="flex flex-wrap gap-2">
                <div>
                    <textarea v-model="form.notes"
                        class="mt-1 p-3 w-full border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
                        id="notes" name="notes" />
                </div>
            </div>
        </div>

        <div class="p-3 mt-6 border">
            <div class="font-bold text-lg">Billing Information</div>
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="currency" value="Currency" />
                    <select id="currency" v-model="form.currency" required
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="currency in store.props.currencies" :key="currency.guid" :value="currency.guid">
                            {{
                                    currency.fullname
                            }}
                        </option>
                    </select>
                </div>
                <div>
                    <form-label for="terms" value="Terms" />
                    <select id="terms" v-model="form.terms"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="term in store.props.billterms" :key="term.guid" :value="term.guid">{{
                                term.name
                        }}
                        </option>
                    </select>
                </div>
                <div>
                    <form-label for="discount" value="Discount" />
                    <form-input id="discount" type="number" v-model="discount" min="0" />
                </div>
                <div>
                    <form-label for="credit" value="Credit Limit" />
                    <form-input id="credit" type="number" v-model="credit" step="0.01" min="0" />
                </div>
                <div>
                    <form-label for="tax_included" value="Tax Included" />
                    <select id="tax_included" v-model="form.tax_included"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option value="3">- Use Global -</option>
                        <option value="1">Yes</option>
                        <option value="2">No</option>
                    </select>
                </div>
                <div>
                    <form-label for="taxtable" value="Tax Table" />
                    <select id="terms" v-model="form.taxtable"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="taxtable in store.props.taxtables" :key="taxtable.guid" :value="taxtable.guid">{{
                                taxtable.name
                        }}
                        </option>
                    </select>
                </div>
            </div>
        </div>

        <div class="p-3 mt-6 border">
            <div class="font-bold text-lg">Shipping Address</div>
            <div class="font-semibold text-md">Shipping Information</div>
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="shipaddr_name" value="Name" />
                    <form-input id="shipaddr_name" type="text" v-model="form.shipaddr_name" />
                </div>
                <div>
                    <form-label for="shipaddr_addr1" value="Address 1" />
                    <form-input id="shipaddr_addr1" type="text" v-model="form.shipaddr_addr1" />
                </div>
                <div>
                    <form-label for="shipaddr_addr2" value="Address 2" />
                    <form-input id="shipaddr_addr2" type="text" v-model="form.shipaddr_addr2" />
                </div>
                <div>
                    <form-label for="shipaddr_addr3" value="Address 3" />
                    <form-input id="shipaddr_addr3" type="text" v-model="form.shipaddr_addr3" />
                </div>
                <div>
                    <form-label for="shipaddr_addr4" value="Address 4" />
                    <form-input id="shipaddr_addr4" type="text" v-model="form.shipaddr_addr4" />
                </div>
                <div>
                    <form-label for="shipaddr_phone" value="Phone" />
                    <form-input id="shipaddr_phone" type="text" v-model="form.shipaddr_phone" />
                </div>
                <div>
                    <form-label for="shipaddr_fax" value="Fax" />
                    <form-input id="shipaddr_fax" type="text" v-model="form.shipaddr_fax" />
                </div>
                <div>
                    <form-label for="shipaddr_email" value="Email" />
                    <form-input id="shipaddr_email" type="text" v-model="form.shipaddr_email" />
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
