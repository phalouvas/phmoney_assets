<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}accounts`);
    },
    data() {
        return {
            levels: [0, 1, 2, 3, 4, 5, 6],
        };
    },
    methods: {
        async destroy(account) {
            if (confirm("Are you sure you want to delete this account? All transactions will also be deleted.")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}accounts/destroy/${account.pk}`, true);
                await this.store.get(`${import.meta.env.VITE_ROOT}accounts`);
            }
        },
        is_visible(account) {
            let result = '';
            if (this.store.accounts_filter.name !== null) {
                if (!account.name_simple.toLowerCase().includes(this.store.accounts_filter.name.toLowerCase())) {
                    result = 'hidden'
                }
            }
            if (this.store.accounts_filter.code !== null) {
                if (!account.code.toLowerCase().includes(this.store.accounts_filter.code.toLowerCase())) {
                    result = 'hidden'
                }
            }
            if (this.store.accounts_filter.type !== null) {
                if (account.type !== this.store.accounts_filter.type) {
                    result = 'hidden'
                }
            }
            if (this.store.accounts_filter.level !== null) {
                if (account.level > this.store.accounts_filter.level) {
                    result = 'hidden'
                }
            }
            return result;
        },
        clear() {
            this.store.accounts_filter = {
                name: null,
                code: null,
                type: null,
                level: null,
            };
        }
    }
}
</script>
<template>
    <div class="md:p-6" v-if="!store.processing && store.props.accounts">
        <div class="flex gap-2">
            <form-input id="filter_name" name="filter_name" type="text" v-model="store.accounts_filter.name"
                placeholder="Filter by name..." />
            <form-input id="filter_code" name="filter_code" type="text" v-model="store.accounts_filter.code"
                placeholder="Filter by code..." />
            <select id="filter_type" name="filter_type" v-model="store.accounts_filter.type"
                class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                <option :value="null">- Filter by type -</option>
                <option v-for="filter_type in store.props.account_types" :value="filter_type">
                    {{ filter_type }}
                </option>
            </select>
            <select id="levels" v-model="store.accounts_filter.level"
                class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                <option :value="null">- Show all levels -</option>
                <option v-for="level in levels" :value="level">
                    {{ level }}
                </option>
            </select>
            <form-secondary-button title="Clear" @click="clear">
                <span class="material-icons-outlined"> search_off </span>
            </form-secondary-button>
        </div>
        <table>
            <thead>
                <th>Name</th>
                <th>Code</th>
                <th>Type</th>
                <th>Description</th>
                <th>Balance</th>
                <th>
                    <form-button @click="$router.push({ name: 'accounts.create' })" title="Add New">
                        <span class="material-icons-outlined">add</span>
                    </form-button>
                </th>
            </thead>
            <tbody>
                <tr v-for="account in store.props.accounts" :key="account.guid" :class="is_visible(account)">
                    <td :style="`padding-left: ${account.level}rem`">
                        {{ account.name_simple }}
                    </td>
                    <td>{{ account.code }}</td>
                    <td>{{ account.type }}</td>
                    <td>{{ account.description }}</td>
                    <td>
                        <amount-financial :amount="account.amount_sum" :commodity="account.commodity" />
                    </td>
                    <td>
                        <RouterLink class="text-sky-500 hover:text-sky-300"
                            :to="{ name: 'accounts.edit', params: { account_pk: account.pk } }" title="Edit"><span
                                class="material-icons-outlined">edit</span>
                        </RouterLink>
                        <RouterLink v-if="!account.placeholder" class="text-yellow-500 hover:text-yellow-300"
                            :to="{ name: 'reconcile.index', params: { account_pk: account.pk } }" title="Reconcile">
                            <span class="material-icons-outlined">confirmation_number</span>
                        </RouterLink>
                        <RouterLink v-if="!account.placeholder" class="text-gray-500 hover:text-gray-300"
                            :to="{ name: 'transactions.index', params: { account_pk: account.pk } }"
                            title="Transactions">
                            <span class="material-icons-outlined">view_list</span>
                        </RouterLink>
                        <span class="text-red-500 hover:text-red-300 hover:cursor-pointer material-icons-outlined"
                            @click="destroy(account)" title="Delete">
                            delete
                        </span>
                    </td>
                </tr>
            </tbody>
        </table>
        <div class="grid grid-cols-2 pt-2 border-t font-semibold">
            <div>
                Net Assets:
                <amount-financial :amount="store.props.net_assets" :commodity="store.props.commodity" />
            </div>
            <div>
                Profits:
                <amount-financial :amount="store.props.profits" :commodity="store.props.commodity" />
            </div>
        </div>
    </div>
</template>