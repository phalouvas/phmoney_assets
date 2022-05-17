<script lang="ts">

export default {

    data() {
        return {
            form: {
                id: this.store.props.employee.id,
                username: this.store.props.employee.username,
                active: this.store.props.employee.active,
                addr_name: this.store.props.employee.addr_name,
                addr_addr1: this.store.props.employee.addr_addr1,
                addr_addr2: this.store.props.employee.addr_addr2,
                addr_addr3: this.store.props.employee.addr_addr3,
                addr_addr4: this.store.props.employee.addr_addr4,
                addr_phone: this.store.props.employee.addr_phone,
                addr_fax: this.store.props.employee.addr_fax,
                addr_email: this.store.props.employee.addr_email,
                language: this.store.props.employee.language,
                currency: this.store.props.employee.currency,
                workday_num: this.store.props.employee.workday_num,
                workday_denom: this.store.props.employee.workday_denom,
                rate_num: this.store.props.employee.rate_num,
                rate_denom: this.store.props.employee.rate_denom,
                ccard_guid: this.store.props.employee.ccard_guid,
            },
            workday:
                this.store.props.employee.workday_num /
                this.store.props.employee.workday_denom,
            rate:
                this.store.props.employee.rate_num /
                this.store.props.employee.rate_denom,
        };
    },

    methods: {
        async submit() {

            let currency = this.store.props.currencies.find(currency => currency.guid === this.form.currency);
            this.form.workday_num = this.workday * currency.fraction;
            this.form.workday_denom = currency.fraction;
            this.form.rate_num = this.rate * currency.fraction;
            this.form.rate_denom = currency.fraction;

            if (this.$route.name === 'business.employees.create') {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/employees/store`, this.form);
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/employees/update/${this.$route.params.employee_pk}`, this.form);
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
                <div class="font-bold text-lg">Employee</div>

                <div class="font-semibold text-md">Identification</div>
                <div class="flex flex-wrap gap-2">
                    <div>
                        <form-label for="id" value="Number" />
                        <form-input id="id" type="text" v-model="form.id" />
                    </div>

                    <div>
                        <form-label for="username" value="Username*" />
                        <form-input id="username" type="text" v-model="form.username" required />
                    </div>

                    <div>
                        <form-label for="active" value="Active" />
                        <form-checkbox id="active" v-model:checked="form.active" />
                    </div>
                </div>

                <div class="font-semibold text-md">Billing Address</div>
                <div class="flex flex-wrap gap-2">
                    <div>
                        <form-label for="addr_name" value="Name*" />
                        <form-input id="addr_name" type="text" v-model="form.addr_name" required />
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

                <div class="font-semibold text-md">Interface</div>
                <div class="flex flex-wrap gap-2">
                    <div>
                        <form-label for="language" value="Language" />
                        <form-input id="language" type="text" v-model="form.language" />
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
                        <form-label for="workday" value="Default Hours per Day*" />
                        <form-input id="workday" type="number" v-model="workday" min="0" required />
                    </div>
                    <div>
                        <form-label for="rate" value="Default Rate*" />
                        <form-input id="rate" type="number" v-model="rate" step="0.01" min="0" required />
                    </div>
                    <div>
                        <form-label for="ccard_guid" value="Credit Account" />
                        <select id="terms" v-model="form.ccard_guid"
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
    </div>
</template>
