<script lang="ts">

export default {

    data() {
        return {
            filter: {
                page: 1,
                id: null,
                billing_id: null,
                owner_name: null,
                only_active: false,
                only_posted: false,
                only_paid: false,
                invoice_type: null,
            },
        };
    },

    methods: {
        clear() {
            this.filter = {
                page: 1,
                id: null,
                billing_id: null,
                owner_name: null,
                only_active: false,
                only_posted: false,
                only_paid: false,
                invoice_type: null,
            };
            this.load(1);
        },
        async load(page) {
            this.filter.page = page;
            await this.store.get(`${import.meta.env.VITE_ROOT}business/invoices`, this.filter);
        },
        async destroy(invoice) {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}business/invoices/destroy/${invoice.pk}`);
                this.load(1);
            }
        },
        owner(invoice) {
            if (invoice.customer) {
                return invoice.customer.name;
            }

            if (invoice.vendor) {
                return invoice.vendor.name;
            }

            if (invoice.employee) {
                return invoice.employee.username;
            }

            if (invoice.job) {
                if (invoice.job.customer) {
                    return invoice.job.customer.name;
                }
                if (invoice.job.vendor) {
                    return invoice.job.vendor.name;
                }
            }
        },
        owner_type(invoice) {
            if (invoice.customer) {
                return 'Invoice';
            }

            if (invoice.vendor) {
                return 'Bill';
            }

            if (invoice.employee) {
                return 'Voucher';
            }

            if (invoice.job) {
                if (invoice.job.customer) {
                    return 'Invoice';
                }
                if (invoice.job.vendor) {
                    return 'Bill';
                }
            }
        },
    },
};
</script>

<template>
    <div class="p-6 overflow-x-auto">
        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="only_active" value="Is Active?" />
                <form-checkbox id="only_active" v-model:checked="filter.only_active" @change="load(1)" />
            </div>
            <div>
                <form-label for="only_posted" value="Is Posted?" />
                <form-checkbox id="only_posted" v-model:checked="filter.only_posted" @change="load(1)" />
            </div>
            <div>
                <form-label for="only_paid" value="Is Paid?" />
                <form-checkbox id="only_paid" v-model:checked="filter.only_paid" @change="load(1)" />
            </div>
            <select v-model="filter.invoice_type" name="invoice_type" id="invoice_type"
                class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
                @change="load(1)">
                <option disabled :value="null">Filter by type</option>
                <option>Invoice</option>
                <option>Bill</option>
                <option>Voucher</option>
            </select>
            <form-input id="invoice_id" name="invoice_id" type="text" v-model="filter.id" placeholder="Num..." />
            <form-input id="billing_id" name="billing_id" type="text" v-model="filter.billing_id"
                placeholder="Billing Id..." />
            <form-input id="owner_name" name="owner_name" type="text" v-model="filter.owner_name"
                placeholder="Owner Name..." />
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
                    <th>Num</th>
                    <th>Opened</th>
                    <th>Due</th>
                    <th>Company</th>
                    <th>Posted</th>
                    <th>Paid</th>
                    <th>Type</th>
                    <th>Billing ID</th>
                    <th>
                        <form-button @click="$router.push({ name: 'business.invoices.create' })" title="Add New">
                            <span class="material-icons-outlined">add</span>
                        </form-button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="store.props.invoices" v-for="invoice in store.props.invoices.data" :key="invoice.guid">
                    <td>{{ invoice.id }}</td>
                    <td>{{ invoice.date_opened }}</td>
                    <td v-if="invoice.due_date !== null">
                        {{ store.convert_date(invoice.due_date.timespec_val) }}
                    </td>
                    <td v-else></td>
                    <td>{{ owner(invoice) }}</td>
                    <td>{{ invoice.date_posted }}</td>
                    <td>
                        <span v-if="invoice.total_splits === '0'"
                            class="material-icons-outlined text-sky-500">check_circle</span>
                        <span v-else class="material-icons-outlined text-red-500">highlight_off</span>
                    </td>
                    <td>{{ owner_type(invoice) }}</td>
                    <td>{{ invoice.billing_id }}</td>
                    <td>
                        <div class="flex">
                            <RouterLink class="text-gray-500 hover:text-gray-300"
                                :to="{ name: 'business.invoices.entrys.index', params: { invoice_pk: invoice.pk } }"
                                title="Entries"><span class="material-icons-outlined">view_list</span>
                            </RouterLink>
                            <RouterLink class="text-sky-500 hover:text-sky-300"
                                :to="{ name: 'business.invoices.edit', params: { invoice_pk: invoice.pk } }"
                                title="Edit"><span class="material-icons-outlined">edit</span>
                            </RouterLink>
                            <div class="text-red-500 hover:text-red-300 hover:cursor-pointer" @click="destroy(invoice)"
                                title="Delete">
                                <span class="material-icons-outlined">delete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination v-if="store.props.invoices && store.props.invoices.total > store.props.invoices.per_page"
                    :current="store.props.invoices.current_page" :total="store.props.invoices.total"
                    :per-page="store.props.invoices.per_page" @page-changed="load" />
            </tfoot>
        </table>
    </div>
</template>