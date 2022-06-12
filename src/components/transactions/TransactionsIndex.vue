<script lang="ts">
export default {
    async created() {
        if (this.$route.params.account_pk !== this.store.transactions_filter.account_pk ) {
            this.clear();
        } else {
            await this.load(0);
        }
    },
    methods: {
        clear() {
            this.store.transactions_filter = {
                account_pk: this.$route.params.account_pk,
                page: 1,
                memo: null,
                description: null,
                num: null,
                date_start: null,
                date_end: null,
            };
            this.load(0);
        },
        async load(page: Number) {
            if (page > 0) {
                this.store.transactions_filter.page = page;
            }
            await this.store.get(`${import.meta.env.VITE_ROOT}transactions/${this.$route.params.account_pk}`, this.store.transactions_filter);
        },

        async destroy(split) {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}transactions/${this.store.props.account.pk}/destroy/${split.transaction.pk}`);
                this.load(this.store.transactions_filter.page);
            }
        },

        async duplicate(split) {
            await this.store.get(`${import.meta.env.VITE_ROOT}transactions/${this.store.props.account.pk}/duplicate/${split.transaction.pk}`);
            await this.load(0);
        },

    },
}
</script>

<template>
    <div class="p-6 overflow-x-auto" v-if="store.props.splits !== undefined">
        <div class="flex gap-2">
            <div>
                <form-label for="date_start" value="Start Date" />
                <form-input type="date" id="date_start" name="date_start" v-model="store.transactions_filter.date_start"
                    @change="load(1)" />
            </div>
            <div>
                <form-label for="date_end" value="End Date" />
                <form-input type="date" id="date_end" name="date_end" v-model="store.transactions_filter.date_end"
                    @change="load(1)" />
            </div>
        </div>
        <div class="flex gap-2 pt-2">
            <form-input id="memo" name="memo" type="text" v-model="store.transactions_filter.memo" placeholder="Memo..."
                @change="load(1)" />
            <form-input id="description" name="description" type="text" v-model="store.transactions_filter.description"
                placeholder="Description..." @change="load(1)" />
            <form-input id="num" name="num" type="text" v-model="store.transactions_filter.num" placeholder="Num..."
                @change="load(1)" />
            <form-button title="Search" @click="load(1)">
                <span class="material-icons-outlined"> search </span>
            </form-button>
            <form-secondary-button title="Clear" @click="clear">
                <span class="material-icons-outlined"> search_off </span>
            </form-secondary-button>
        </div>
        <table class="table-fixed" v-if="!store.processing">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Num</th>
                    <th>Description</th>
                    <th>Account</th>
                    <th>R</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th>Balance</th>
                    <th>
                        <form-button
                            @click="$router.push({ name: 'transactions.create', params: { account_pk: store.props.account.pk } })"
                            title="Add New">
                            <span class="material-icons-outlined">add</span>
                        </form-button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="split in store.props.splits.data" :key="split.id" :split="split" class="hover:bg-sky-50">
                    <td>{{ split.transaction.post_date }}</td>
                    <td class="truncate" :title="split.transaction.num">
                        {{ split.transaction.num }}
                    </td>
                    <td class="truncate" :title="split.transaction.description">
                        {{ split.transaction.description }}
                    </td>
                    <td class="truncate" :title="split.transaction.splits[0].account.name"
                        v-if="split.transaction.splits.length == 1">
                        {{ split.transaction.splits[0].account.name }}
                    </td>
                    <td v-else>-- Split Transaction --</td>
                    <td>{{ split.reconcile_state }}</td>
                    <td>
                        <amount-financial :amount="split.debit" :commodity="split.account.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="split.credit" :commodity="split.account.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="split.balance" :commodity="split.account.commodity" />
                    </td>
                    <td>
                        <div class="flex">
                            <div class="text-yellow-500 hover:text-yellow-300 hover:cursor-pointer"
                                @click="duplicate(split)" title="Duplicate">
                                <span class="material-icons-outlined">copy</span>
                            </div>
                            <RouterLink class="text-sky-500 hover:text-sky-300"
                                :to="{ name: 'transactions.edit', params: { account_pk: store.props.account.pk, transaction_pk: split.transaction.pk } }"
                                title="Edit"><span class="material-icons-outlined">edit</span>
                            </RouterLink>
                            <div class="text-red-500 hover:text-red-300 hover:cursor-pointer" @click="destroy(split)"
                                title="Delete">
                                <span class="material-icons-outlined">delete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination v-if="store.props.splits.total > store.props.splits.per_page"
                    :current="store.props.splits.current_page" :total="store.props.splits.total"
                    :per-page="store.props.splits.per_page" @page-changed="load" />
            </tfoot>
        </table>
    </div>
</template>