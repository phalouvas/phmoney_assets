<script lang="ts">

export default {

    data() {
        return {
            form: {
                id: this.store.props.job.id,
                name: this.store.props.job.name,
                reference: this.store.props.job.reference,
                active: this.store.props.job.active,
                rate_num: this.store.props.job.rate.numeric_val_num,
                rate_denom: this.store.props.job.rate.numeric_val_denom,
                owner_type: this.store.props.job.owner_type,
                owner_guid: this.store.props.job.owner_guid,
            },
            rate: this.store.props.job.rate.numeric_val_num / this.store.props.job.rate.numeric_val_denom,
        };
    },

    methods: {
        async submit() {

            this.form.rate_num = this.rate * 1;
            this.form.rate_denom = 1;

            if (this.$route.name === 'business.jobs.create') {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/jobs/store`, this.form);
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/jobs/update/${this.$route.params.job_pk}`, this.form);
            }
            this.$router.back();
        },
    },
};
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <div class="p-3 border">
            <div class="font-bold text-lg">Job</div>

            <div class="font-semibold text-md">Job Information</div>
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="id" value="Job Number" />
                    <form-input id="id" type="text" v-model="form.id" />
                </div>

                <div>
                    <form-label for="name" value="Job Name*" />
                    <form-input id="name" type="text" v-model="form.name" required />
                </div>

                <div>
                    <form-label for="active" value="Active" />
                    <form-checkbox id="active" v-model:checked="form.active" />
                </div>
            </div>

            <div class="font-semibold text-md">Owner Information</div>
            <div class="flex flex-wrap gap-2">
                <form-label for="radio_customer" value="Customer" />
                <form-input type="radio" id="radio_customer" name="radio_name" value="2"
                    :checked="form.owner_type == '2'" v-model="form.owner_type" />
                <form-label for="radio_vendor" value="Vendor" />
                <form-input type="radio" id="radio_vendor" name="radio_name" value="4" :checked="form.owner_type == '4'"
                    v-model="form.owner_type" />
            </div>

            <div class="flex flex-wrap gap-2">
                <div v-if="form.owner_type == '2'">
                    <form-label for="customer" value="&nbsp;" />
                    <select id="customer" v-model="form.owner_guid" required
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="customer in store.props.customers" :key="customer.guid" :value="customer.guid">{{
                                customer.name
                        }}
                        </option>
                    </select>
                </div>

                <div v-if="form.owner_type == '4'">
                    <form-label for="vendor" value="&nbsp;" />
                    <select id="vendor" v-model="form.owner_guid" required
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="vendor in store.props.vendors" :key="vendor.guid" :value="vendor.guid">{{
                                vendor.name
                        }}
                        </option>
                    </select>
                </div>

                <div>
                    <form-label for="rate" value="Rate" />
                    <form-input id="rate" type="number" v-model="rate" min="0" />
                </div>

                <div>
                    <form-label for="reference" value="Billing ID" />
                    <form-input id="reference" type="text" v-model="form.reference" />
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
