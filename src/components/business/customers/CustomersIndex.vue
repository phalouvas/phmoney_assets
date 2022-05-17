
<script lang="ts">

export default {

    data() {
        return {
            filter: {
                page: 1,
                name: null,
                id: null,
                addr_name: null,
                shipaddr_name: null,
            },
        };
    },

    methods: {
        clear() {
            this.filter = {
                page: 1,
                name: null,
                id: null,
                addr_name: null,
                shipaddr_name: null,
            };
            this.load(1);
        },
        async load(page) {
            this.filter.page = page;
            await this.store.get(`${import.meta.env.VITE_ROOT}business/customers`, this.filter);
        },
        async destroy(customer) {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}business/customers/destroy/${customer.pk}`);
                this.load(1);
            }
        },
    },
};
</script>

<template>
    <div class="p-6 overflow-x-auto">
        <div class="flex flex-wrap gap-2">
            <form-input id="name" name="filter_name" type="text" v-model="filter.name" placeholder="Company Name..." />
            <form-input id="id" name="filter_id" type="text" v-model="filter.id" placeholder="Customer Number..." />
            <form-input id="addr_name" name="filter_addr_name" type="text" v-model="filter.addr_name"
                placeholder="Address Name..." />
            <form-input id="shipaddr_name" name="filter_shipaddr_name" type="text" v-model="filter.shipaddr_name"
                placeholder="Shipping Address Name..." />
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
                    <th>Customer Number</th>
                    <th>Address 1</th>
                    <th>Address 2</th>
                    <th>Phone</th>
                    <th>
                        <form-button @click="$router.push({ name: 'business.customers.create' })" title="Add New">
                            <span class="material-icons-outlined">add</span>
                        </form-button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="store.props.customers" v-for="customer in store.props.customers.data" :key="customer.guid">
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.id }}</td>
                    <td>{{ customer.addr_addr1 }}</td>
                    <td>{{ customer.addr_addr2 }}</td>
                    <td>{{ customer.addr_phone }}</td>
                    <td>
                        <div class="flex">
                            <RouterLink class="text-gray-500 hover:text-gray-300"
                                :to="{ name: 'business.customers.edit', params: { customer_pk: customer.pk } }"
                                title="Edit"><span class="material-icons-outlined">summarize</span>
                            </RouterLink>
                            <RouterLink class="text-sky-500 hover:text-sky-300"
                                :to="{ name: 'business.customers.edit', params: { customer_pk: customer.pk } }"
                                title="Edit"><span class="material-icons-outlined">edit</span>
                            </RouterLink>
                            <div class="text-red-500 hover:text-red-300 hover:cursor-pointer" @click="destroy(customer)"
                                title="Delete">
                                <span class="material-icons-outlined">delete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination v-if="store.props.customers && store.props.customers.total > store.props.customers.per_page"
                    :current="store.props.customers.current_page" :total="store.props.customers.total"
                    :per-page="store.props.customers.per_page" @page-changed="load" />
            </tfoot>
        </table>
    </div>
</template>