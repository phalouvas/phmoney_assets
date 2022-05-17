
<script lang="ts">

export default {

    methods: {
        async load(page) {
            await this.store.get(`${import.meta.env.VITE_ROOT}business/billterms`, {
                page: page,
            });
        },
        async destroy(billterm) {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}business/billterms/destroy/${billterm.pk}`);
                this.load(1);
            }
        },
    },
};
</script>

<template>
    <div class="p-6 overflow-x-auto">

        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>
                        <form-button @click="$router.push({ name: 'business.billterms.create' })" title="Add New">
                            <span class="material-icons-outlined">add</span>
                        </form-button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="store.props.billterms" v-for="billterm in store.props.billterms.data" :key="billterm.guid">
                    <td>{{ billterm.name }}</td>
                    <td>
                        <div class="flex">
                            <RouterLink class="text-sky-500 hover:text-sky-300"
                                :to="{ name: 'business.billterms.edit', params: { billterm_pk: billterm.pk } }"
                                title="Edit"><span class="material-icons-outlined">edit</span>
                            </RouterLink>
                            <div class="text-red-500 hover:text-red-300 hover:cursor-pointer" @click="destroy(billterm)"
                                title="Delete">
                                <span class="material-icons-outlined">delete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination
                    v-if="store.props.billterms && (store.props.billterms.total > store.props.billterms.per_page)"
                    :current="store.props.billterms.current_page" :total="store.props.billterms.total"
                    :per-page="store.props.billterms.per_page" @page-changed="load" />
            </tfoot>
        </table>
    </div>
</template>
