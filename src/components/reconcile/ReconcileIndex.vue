<script lang="ts">
export default {
    data() {
        return {
            form: {
                guids: [],
            },
            date_statement: this.moment().format("YYYY-MM-DD"),
            ending_balance: this.store.props.ending_balance,
            reconciled_balance: 0,
        };
    },

    computed: {
        difference: function () {
            return (
                this.ending_balance -
                this.reconciled_balance -
                this.store.props.starting_balance
            );
        },
    },

    methods: {
        async submit() {
            console.log(this.form.guids);
            this.form.guids = [];
            for (let index = 0; index < this.store.props.credits.length; index++) {
                const element = this.store.props.credits[index];
                if (element.is_reconciled) {
                    this.form.guids.push(element.guid);
                }
            }

            for (let index = 0; index < this.store.props.debits.length; index++) {
                const element = this.store.props.debits[index];
                if (element.is_reconciled) {
                    this.form.guids.push(element.guid);
                }
            }

            if (this.form.guids.length > 0) {
                await this.store.post(`${import.meta.env.VITE_ROOT}reconcile/${this.$route.params.account_pk}/update`, this.form);
            }

            if (!this.store.errors) {
                this.$router.back();
            }
        },
        async reload() {
            await this.store.get(`${import.meta.env.VITE_ROOT}reconcile/${this.$route.params.account_pk}`, { date_statement: this.date_statement });
            this.ending_balance = this.store.props.ending_balance;
        },
        change_reconcile(item) {
            if (item.is_reconciled) {
                this.reconciled_balance =
                    this.reconciled_balance + parseFloat(item.amount);
            } else {
                this.reconciled_balance =
                    this.reconciled_balance - parseFloat(item.amount);
            }
        }
    },
}
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="date_statement" value="Statement Date" />
                <form-input id="date_statement" type="date" v-model="date_statement" required @change="reload" />
            </div>

            <div>
                <form-label for="starting_balance" value="Starting Balance" />
                <form-input id="starting_balance" type="number" v-model="store.props.starting_balance" min="0"
                    class="bg-gray-200" disabled />
            </div>

            <div>
                <form-label for="ending_balance" value="Ending Balance" />
                <form-input id="ending_balance" type="number" v-model="ending_balance" min="0" step="0.01" />
            </div>

            <div>
                <form-label for="reconciled_balance" value="Reconciled Balance" />
                <form-input id="reconciled_balance" type="number" v-model="reconciled_balance" min="0"
                    class="bg-gray-200" disabled />
            </div>

            <div>
                <form-label for="difference" value="Difference" />
                <form-input id="difference" type="number" v-model="difference" min="0" class="bg-gray-200" disabled />
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-2 pt-2 prose max-w-none">
            <div class="border p-2">
                <h3>Funds In</h3>
                <table>
                    <thead>
                        <th>Date</th>
                        <th>Num</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>R</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in store.props.credits" :key="item.guid">
                            <td>{{ store.convert_date(item.transaction.post_date) }}</td>
                            <td>{{ item.transaction.num }}</td>
                            <td>{{ item.transaction.description }}</td>
                            <td>
                                <amount-financial :amount="parseFloat(item.amount)"
                                    :commodity="item.account.commodity" />
                            </td>
                            <td>
                                <form-checkbox :id="`is_reconciled${item.guid}`" v-model:checked="item.is_reconciled"
                                    @change="change_reconcile(item)" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div class="border p-2">
                <h3>Funds Out</h3>
                <table>
                    <thead>
                        <th>Date</th>
                        <th>Num</th>
                        <th>Description</th>
                        <th>Amount</th>
                        <th>R</th>
                    </thead>
                    <tbody>
                        <tr v-for="item in store.props.debits" :key="item.guid">
                            <td>{{ store.convert_date(item.transaction.post_date) }}</td>
                            <td>{{ item.transaction.num }}</td>
                            <td>{{ item.transaction.description }}</td>
                            <td>
                                <amount-financial :amount="parseFloat(item.amount)"
                                    :commodity="item.account.commodity" />
                            </td>
                            <td>
                                <form-checkbox :id="`is_reconciled${item.guid}`" v-model:checked="item.is_reconciled"
                                    @change="change_reconcile(item)" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="flex items-center justify-end mt-4">
            <form-button class="ml-4" :class="{ 'opacity-25': difference !== 0 }" :disabled="difference !== 0"
                title="Submit">
                <span class="material-icons-outlined"> check </span>
            </form-button>
        </div>
    </form>
</template>