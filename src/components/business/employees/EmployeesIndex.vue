
<script lang="ts">

export default {

    data() {
        return {
            filter: {
                page: 1,
                username: null,
                id: null,
                addr_name: null,
            },
        };
    },

    methods: {
        clear() {
            this.filter = {
                page: 1,
                username: null,
                id: null,
                addr_name: null,
            };
            this.load(1);
        },
        async load(page) {
            this.filter.page = page;
            await this.store.get(`${import.meta.env.VITE_ROOT}business/employees`, this.filter);
        },
        async destroy(employee) {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}business/employees/destroy/${employee.pk}`);
                this.load(1);
            }
        },
    },
};
</script>

<template>
    <div class="p-6 overflow-x-auto">
        <div class="flex flex-wrap gap-2">
            <form-input id="username" name="filter_name" type="text" v-model="filter.username" placeholder="Username..." />
            <form-input id="id" name="filter_id" type="text" v-model="filter.id" placeholder="Employee Number..." />
            <form-input id="addr_name" name="filter_addr_name" type="text" v-model="filter.addr_name"
                placeholder="Address Name..." />
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
                    <th>Employee Name</th>
                    <th>Employee Number</th>
                    <th>Address 1</th>
                    <th>Address 2</th>
                    <th>Phone</th>
                    <th>
                        <form-button @click="$router.push({ name: 'business.employees.create' })" title="Add New">
                            <span class="material-icons-outlined">add</span>
                        </form-button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="store.props.employees" v-for="employee in store.props.employees.data" :key="employee.guid">
                    <td>{{ employee.addr_name }}</td>
                    <td>{{ employee.id }}</td>
                    <td>{{ employee.addr_addr1 }}</td>
                    <td>{{ employee.addr_addr2 }}</td>
                    <td>{{ employee.addr_phone }}</td>
                    <td>
                        <div class="flex">
                            <RouterLink class="text-gray-500 hover:text-gray-300"
                                :to="{ name: 'business.employees.edit', params: { employee_pk: employee.pk } }"
                                title="Edit"><span class="material-icons-outlined">summarize</span>
                            </RouterLink>
                            <RouterLink class="text-sky-500 hover:text-sky-300"
                                :to="{ name: 'business.employees.edit', params: { employee_pk: employee.pk } }"
                                title="Edit"><span class="material-icons-outlined">edit</span>
                            </RouterLink>
                            <div class="text-red-500 hover:text-red-300 hover:cursor-pointer" @click="destroy(employee)"
                                title="Delete">
                                <span class="material-icons-outlined">delete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination v-if="store.props.employees && store.props.employees.total > store.props.employees.per_page"
                    :current="store.props.employees.current_page" :total="store.props.employees.total"
                    :per-page="store.props.employees.per_page" @page-changed="load" />
            </tfoot>
        </table>
    </div>
</template>