<script lang="ts">

export default {

    data() {
        return {
            form: {
                id: this.store.props.vendor.id,
                name: this.store.props.vendor.name,
                active: this.store.props.vendor.active,
                addr_name: this.store.props.vendor.addr_name,
                addr_addr1: this.store.props.vendor.addr_addr1,
                addr_addr2: this.store.props.vendor.addr_addr2,
                addr_addr3: this.store.props.vendor.addr_addr3,
                addr_addr4: this.store.props.vendor.addr_addr4,
                addr_phone: this.store.props.vendor.addr_phone,
                addr_fax: this.store.props.vendor.addr_fax,
                addr_email: this.store.props.vendor.addr_email,
                notes: this.store.props.vendor.notes,
                currency: this.store.props.vendor.currency,
                terms: this.store.props.vendor.terms,
                tax_inc: this.store.props.vendor.tax_inc,
                tax_override: this.store.props.vendor.tax_override,
                tax_table: this.store.props.vendor.tax_table,
            },
        };
    },

    methods: {
        async submit() {

            if (this.$route.name === 'business.vendors.create') {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/vendors/store`, this.form);
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/vendors/update/${this.$route.params.vendor_pk}`, this.form);
            }
            this.$router.back();
        },
    },
};
</script>

<template>
    <div>
        <form @submit.prevent="submit" class="p-6">
            <div class="p-3 border">
                <div class="font-bold text-lg">Vendor</div>

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
                        <textarea v-model="form.notes" class="
                mt-1
                p-3
                w-full
                border-gray-300
                focus:border-sky-300
                focus:ring
                focus:ring-sky-200
                focus:ring-opacity-50
                rounded-md
                shadow-sm
              " id="notes" name="notes" />
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
                            <option v-for="currency in store.props.currencies" :key="currency.guid"
                                :value="currency.guid">{{
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
                        <form-label for="tax_inc" value="Tax Included" />
                        <select id="tax_inc" v-model="form.tax_inc"
                            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                            <option value="3">- Use Global -</option>
                            <option value="1">Yes</option>
                            <option value="2">No</option>
                        </select>
                    </div>
                    <div>
                        <form-label for="tax_table" value="Tax Table" />
                        <select id="terms" v-model="form.tax_table"
                            class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                            <option v-for="tax_table in store.props.taxtables" :key="tax_table.guid"
                                :value="tax_table.guid">{{
                                        tax_table.name
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
    </div>
</template>
