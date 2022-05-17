
<script lang="ts">

export default {

    methods: {
        async load(page) {
            await this.store.get(`${import.meta.env.VITE_ROOT}business/taxtables/${this.store.props.taxtable.pk}/taxtableentrys`, {
                page: page,
            });
        },
        async destroy(entry) {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}business/taxtables/${this.store.props.taxtable.pk}/taxtableentrys/destroy/${entry.pk}`);
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
                        <form-button @click="$router.push({ name: 'business.taxtables.entrys.create', params: { taxtable_pk: store.props.taxtable.pk } })" title="Add New">
                            <span class="material-icons-outlined">add</span>
                        </form-button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-if="store.props.taxtableentrys" v-for="entry in store.props.taxtableentrys.data" :key="entry.pk">
                    <td>{{ entry.tax_account.name }}</td>
                    <td>
                        <div class="flex">
                            <RouterLink class="text-sky-500 hover:text-sky-300"
                                :to="{ name: 'business.taxtables.entrys.edit', params: { taxtable_pk: store.props.taxtable.pk, entry_pk: entry.pk } }"
                                title="Edit"><span class="material-icons-outlined">edit</span>
                            </RouterLink>
                            <div class="text-red-500 hover:text-red-300 hover:cursor-pointer" @click="destroy(entry)"
                                title="Delete">
                                <span class="material-icons-outlined">delete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination
                    v-if="store.props.taxtableentrys && (store.props.taxtableentrys.total > store.props.taxtableentrys.per_page)"
                    :current="store.props.taxtableentrys.current_page" :total="store.props.taxtableentrys.total"
                    :per-page="store.props.taxtableentrys.per_page" @page-changed="load" />
            </tfoot>
        </table>
    </div>
</template>