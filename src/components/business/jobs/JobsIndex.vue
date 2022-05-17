
<script lang="ts">

export default {

    data() {
        return {
            filter: {
                page: 1,
                name: null,
                id: null,
                customer_name: null,
                vendor_name: null,
                only_active: false,
            },
        };
    },

    methods: {
        clear() {
            this.filter = {
                page: 1,
                name: null,
                id: null,
                customer_name: null,
                vendor_name: null,
                only_active: false,
            };
            this.load(1);
        },
        async load(page) {
            this.filter.page = page;
            await this.store.get(`${import.meta.env.VITE_ROOT}business/jobs`, this.filter);
        },
        async destroy(job) {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}business/jobs/destroy/${job.pk}`);
                this.load(1);
            }
        },
    },
};
</script>

<template>
    <div class="p-6 overflow-x-auto">
        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="only_active" value="Only Active?" />
                <form-checkbox id="only_active" v-model:checked="filter.only_active" @change="load(1)" />
            </div>
            <form-input id="name" name="filter_name" type="text" v-model="filter.name" placeholder="Job Name..." />
            <form-input id="id" name="filter_id" type="text" v-model="filter.id" placeholder="Job Number..." />
            <form-input id="customer_name" name="filter_customer_name" type="text" v-model="filter.customer_name"
                placeholder="Customer Name..." />
            <form-input id="vendor_name" name="filter_vendor_name" type="text" v-model="filter.vendor_name"
                placeholder="Vendor Name..." />
            <form-button @click="load(1)" title="Search">
                <span class="material-icons-outlined"> search </span>
            </form-button>
            <form-secondary-button title="Clear" @click="clear">
                <span class="material-icons-outlined"> search_off </span>
            </form-secondary-button>
        </div>
        <table>
            <thead>
                <tr>
                    <th>Company Name</th>
                    <th>Job Number</th>
                    <th>Customer</th>
                    <th>Vendor</th>
                    <th>Rate</th>
                    <th>
                        <form-button @click="$router.push({ name: 'business.jobs.create' })" title="Add New">
                            <span class="material-icons-outlined">add</span>
                        </form-button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="store.props.jobs" v-for="job in store.props.jobs.data" :key="job.guid">
                    <td>{{ job.name }}</td>
                    <td>{{ job.id }}</td>
                    <td>
                        <span v-if="job.customer">{{ job.customer.name }}</span>
                    </td>
                    <td>
                        <span v-if="job.vendor">{{ job.vendor.name }}</span>
                    </td>
                    <td>{{ job.rate.numeric_val_num }}</td>
                    <td>
                        <div class="flex">
                            <RouterLink class="text-gray-500 hover:text-gray-300"
                                :to="{ name: 'business.jobs.edit', params: { job_pk: job.pk } }" title="Edit"><span
                                    class="material-icons-outlined">summarize</span>
                            </RouterLink>
                            <RouterLink class="text-sky-500 hover:text-sky-300"
                                :to="{ name: 'business.jobs.edit', params: { job_pk: job.pk } }" title="Edit"><span
                                    class="material-icons-outlined">edit</span>
                            </RouterLink>
                            <div class="text-red-500 hover:text-red-300 hover:cursor-pointer" @click="destroy(job)"
                                title="Delete">
                                <span class="material-icons-outlined">delete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination v-if="store.props.jobs && store.props.jobs.total > store.props.jobs.per_page"
                    :current="store.props.jobs.current_page" :total="store.props.jobs.total"
                    :per-page="store.props.jobs.per_page" @page-changed="load" />
            </tfoot>
        </table>
    </div>
</template>