
<script lang="ts">

export default {

    methods: {
        async load(page) {
            await this.store.get(`${import.meta.env.VITE_ROOT}business/taxtables`, {
                page: page,
            });
        },
        async destroy(taxtable) {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}business/taxtables/destroy/${taxtable.pk}`);
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
                        <form-button @click="$router.push({ name: 'business.taxtables.create' })" title="Add New">
                            <span class="material-icons-outlined">add</span>
                        </form-button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="store.props.taxtables" v-for="taxtable in store.props.taxtables.data" :key="taxtable.guid">
                    <td>{{ taxtable.name }}</td>
                    <td>
                        <div class="flex">
                            <RouterLink class="text-gray-500 hover:text-gray-300"
                                :to="{ name: 'business.taxtables.entrys.index', params: { taxtable_pk: taxtable.pk } }"
                                title="Tax Table Entries"><span class="material-icons-outlined">view_list</span>
                            </RouterLink>
                            <RouterLink class="text-sky-500 hover:text-sky-300"
                                :to="{ name: 'business.taxtables.edit', params: { taxtable_pk: taxtable.pk } }"
                                title="Edit"><span class="material-icons-outlined">edit</span>
                            </RouterLink>
                            <div class="text-red-500 hover:text-red-300 hover:cursor-pointer" @click="destroy(taxtable)"
                                title="Delete">
                                <span class="material-icons-outlined">delete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination
                    v-if="store.props.taxtables && (store.props.taxtables.total > store.props.taxtables.per_page)"
                    :current="store.props.taxtables.current_page" :total="store.props.taxtables.total"
                    :per-page="store.props.taxtables.per_page" @page-changed="load" />
            </tfoot>
        </table>
    </div>
</template>