<script lang="ts">
export default {
    async created() {
        await this.load(1);
        this.transfer_account = this.store.props.transfer_accounts[0];
        this.invoice_account = this.store.props.i_accounts[0];
        this.bill_account = this.store.props.b_accounts[0];
    },
    data() {
        return {
            form: {
                item_guid: null,
                post_account_guid: null,
                transfer_account_guid: null,
                post_date: this.moment().format("YYYY-MM-DD"),
                credit: 0,
                debit: 0,
                num: null,
                memo: null,
            },
            filter: {
                page: 1,
                search: null,
                invoice_type: null,
            },
            transfer_account: null,
            invoice_account: null,
            bill_account: null,
            selected: null,
        };
    },

    methods: {
        async load(page) {
            this.filter.page = page;
            await this.store.get(`${import.meta.env.VITE_ROOT}business/payment`, this.filter);
        },
        clear() {
            this.filter = {
                page: 1,
                search: null,
                invoice_type: null,
            };
            this.load(1);
        },
        async submit() {
            this.form.item_guid = this.selected.guid;
            this.form.post_account_guid =
                this.store.getInvoiceType(this.selected) === "Invoice"
                    ? this.invoice_account.guid
                    : this.bill_account.guid;
            this.form.transfer_account_guid = this.transfer_account.guid;
            await this.store.post(`${import.meta.env.VITE_ROOT}business/payment`, this.form);
            this.load(1);
        },
        select_item(item) {
            this.selected = item;
            if (parseFloat(item.amount) > 0) {
                this.form.credit = item.amount;
                this.form.debit = 0;
            } else {
                this.form.credit = 0;
                this.form.debit = -item.amount;
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
        }
    },
}
</script>

<template>
    <div class="p-6 overflow-x-auto">
        <div class="flex flex-wrap gap-2">
            <select v-model="filter.invoice_type" name="invoice_type" id="invoice_type"
                class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                @change="load(1)">
                <option disabled :value="null">Filter by type</option>
                <option>Invoice</option>
                <option>Bill</option>
                <option>Voucher</option>
            </select>

            <form-input id="search" name="search" type="text" v-model="filter.search" placeholder="Search..." />
            <form-button
                title="Search by Invoice ID, or Company Name, or Due Date, or Date Opened, or Billing ID, or Invoice Notes, or Invoice Owner"
                @click="load(1)">
                <span class="material-icons-outlined"> search </span>
            </form-button>
            <form-secondary-button title="Clear" @click="clear">
                <span class="material-icons-outlined"> search_off </span>
            </form-secondary-button>

            <div v-if="this.selected">
                <select v-if="store.getInvoiceType(this.selected) === 'Invoice'" id="invoice_account"
                    v-model="invoice_account" @change="calculate(split)"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option disabled :value="null">Select post account</option>
                    <option v-for="i_account in store.props.i_accounts" :key="i_account.guid" :value="i_account">
                        {{ i_account.name }}
                    </option>
                </select>
                <select v-else id="bill_account" v-model="bill_account" @change="calculate(split)"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option disabled :value="null">Select post account</option>
                    <option v-for="b_account in store.props.b_accounts" :key="b_account.guid" :value="b_account">
                        {{ b_account.name }}
                    </option>
                </select>
            </div>
        </div>

        <table>
            <thead>
                <tr>
                    <th>Num</th>
                    <th>Opened</th>
                    <th>Due</th>
                    <th>Company</th>
                    <th>Posted</th>
                    <th>Type</th>
                    <th>Debit</th>
                    <th>Credit</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="item in store.props.items.data" :key="item.guid">
                    <td>{{ item.id }}</td>
                    <td>{{ item.date_opened }}</td>
                    <td v-if="item.due_date !== null">
                        {{ store.convert_date(item.due_date.timespec_val) }}
                    </td>
                    <td v-else></td>
                    <td>{{ owner(item) }}</td>
                    <td>{{ item.date_posted }}</td>
                    <td>{{ store.getInvoiceType(item) }}</td>
                    <td v-if="store.getInvoiceType(item) === 'Invoice'">
                        <AmountFinancial v-if="parseFloat(item.amount) > 0" :amount="parseFloat(item.amount)"
                            :commodity="invoice_account.commodity" />
                        <span v-else>-</span>
                    </td>
                    <td v-else>
                        <AmountFinancial v-if="parseFloat(item.amount) > 0" :amount="parseFloat(item.amount)"
                            :commodity="bill_account.commodity" />
                        <span v-else>-</span>
                    </td>
                    <td v-if="store.getInvoiceType(item) === 'Invoice'">
                        <AmountFinancial v-if="parseFloat(item.amount) < 0" :amount="parseFloat(-item.amount)"
                            :commodity="invoice_account.commodity" /><span v-else>-</span>
                    </td>
                    <td v-else>
                        <AmountFinancial v-if="parseFloat(item.amount) < 0" :amount="parseFloat(-item.amount)"
                            :commodity="bill_account.commodity" /><span v-else>-</span>
                    </td>
                    <td>
                        <div class="flex">
                            <div v-if="selected !== null && selected.guid === item.guid"
                                class="text-red-gray hover:text-gray-300">
                                <span class="material-icons-outlined">radio_button_checked</span>
                            </div>
                            <div v-else class="text-red-gray hover:text-gray-300 hover:cursor-pointer"
                                @click="select_item(item)">
                                <span class="material-icons-outlined">radio_button_unchecked</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination v-if="store.props.items.total > store.props.items.per_page"
                    :current="store.props.items.current_page" :total="store.props.items.total"
                    :per-page="store.props.items.per_page" @page-changed="load" />
            </tfoot>
        </table>

        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="post_date" value="Date" />
                <form-input id="post_date" type="date" v-model="form.post_date" required />
            </div>
            <div>
                <form-label for="credit" value="Payment" />
                <form-input id="credit" type="number" v-model="form.credit" min="0" required />
            </div>
            <div>
                <form-label for="debit" value="Refund" />
                <form-input id="debit" type="number" v-model="form.debit" min="0" required />
            </div>
            <div>
                <form-label for="num" value="Num" />
                <form-input id="num" type="text" v-model="form.num" />
            </div>
            <div>
                <form-label for="memo" value="Memo" />
                <form-input id="memo" type="text" v-model="form.memo" />
            </div>
            <div>
                <form-label for="transfer_account" value="Transfer Account" />
                <select id="transfer_account" required v-model="invoice_account" @change="calculate(split)"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option disabled :value="null">Select post account</option>
                    <option v-for="account in store.props.transfer_accounts" :key="account.guid" :value="account">
                        {{ account.name }}
                    </option>
                </select>
            </div>
        </div>

        <div class="flex gap-2 items-center justify-end mt-4">
            <form-button :class="{ 'opacity-25': form.processing || selected === null }"
                :disabled="form.processing || selected === null" title="Save" @click="submit">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </div>
    </div>
</template>