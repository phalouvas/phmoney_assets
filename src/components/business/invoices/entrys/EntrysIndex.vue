<script setup lang="ts">
import EntrysInvoicesIndex from '@/components/business/invoices/entrys/EntrysInvoicesIndex.vue'
import EntrysBillsIndex from '@/components/business/invoices/entrys/EntrysBillsIndex.vue'
import EntrysVouchersIndex from '@/components/business/invoices/entrys/EntrysVouchersIndex.vue'
</script>

<script lang="ts">

export default {

    data() {
        return {
            filter: {
                page: 1,
                search: null,
            },
        };
    },

    methods: {
        async load(page) {
            this.filter.page = page;
            await this.store.get(`${import.meta.env.VITE_ROOT}business/invoices/${this.$route.params.invoice_pk}/entrys`, this.filter);
        },

        async destroy(entry) {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}business/invoices/${this.$route.params.invoice_pk}/entrys/destroy/${entry.pk}`);
                this.load(1);
            }
        },

        async unpost() {
            if (confirm("Are you sure you want to unpost this invoice?")) {
                await this.store.delete(`${import.meta.env.VITE_ROOT}business/invoices/post/${this.$route.params.invoice_pk}`);
                this.load(1);
            }
        },

        subtotal(entry) {
            let total =
                (entry.quantity_num / entry.quantity_denom) *
                (entry.i_price_num / entry.i_price_denom);
            let discount = entry.i_discount_num / entry.i_discount_denom;
            let tax = this.tax(entry);
            if (entry.i_taxincluded) {
                if (entry.i_disc_type === "VALUE") {
                    return total - discount - tax;
                }
                if (entry.i_disc_type === "PERCENT") {
                    return total - (total * discount) / 100 - tax;
                }
            } else {
                if (entry.i_disc_type === "VALUE") {
                    return total - discount;
                }
                if (entry.i_disc_type === "PERCENT") {
                    return total - (total * discount) / 100;
                }
            }
        },

        tax(entry) {
            if (entry.invoice_taxtable == null || !entry.i_taxable) {
                return 0;
            }
            let tax = 0;
            for (
                let index = 0;
                index < entry.invoice_taxtable.entries.length;
                index++
            ) {
                const item = entry.invoice_taxtable.entries[index];
                let tax_amount = item.amount_num / item.amount_denom;
                if (item.type == 2) {
                    let amount =
                        (entry.quantity_num / entry.quantity_denom) *
                        (entry.i_price_num / entry.i_price_denom);
                    tax = tax + (amount * tax_amount) / 100;
                } else {
                    tax = tax + tax_amount;
                }
            }
            return tax;
        },
    },
};
</script>

<template>
    <div class="p-6 overflow-x-auto" v-if="store.props.invoice">
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="border p-2">
                <div class="font-semibold text-md">Invoice Information</div>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>Type:</div>
                    <div>{{ store.getInvoiceType() }}</div>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>{{ store.getInvoiceType() }} ID:</div>
                    <div>{{ store.props.invoice.pk }}</div>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>Date Opened:</div>
                    <div>{{ store.convert_date(store.props.invoice.date_opened) }}</div>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm" v-if="store.props.invoice.date_posted">
                    <div>Date Posted:</div>
                    <div>{{ store.convert_date(store.props.invoice.date_posted) }}</div>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>Active:</div>
                    <div v-if="store.props.invoice.active">
                        <span class="material-icons-outlined text-sky-500">
                            check_circle
                        </span>
                    </div>
                    <div v-else>
                        <span class="material-icons-outlined text-red-500">
                            highlight_off
                        </span>
                    </div>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>Paid:</div>
                    <div v-if="store.props.invoice.paid">
                        <span class="material-icons-outlined text-sky-500">
                            check_circle
                        </span>
                    </div>
                    <div v-else>
                        <span class="material-icons-outlined text-red-500">
                            highlight_off
                        </span>
                    </div>
                </div>
            </div>
            <div class="border p-2">
                <div class="font-semibold text-md">Billing Information</div>
                <div v-if="
                    store.props.invoice.customer !== null && store.getInvoiceType() === 'Invoice'
                " class="grid grid-cols-2 gap-4 text-sm">
                    <div>Customer:</div>
                    <div>{{ store.props.invoice.customer.name }}</div>
                </div>
                <div v-if="store.props.invoice.job !== null && store.getInvoiceType() === 'Invoice'"
                    class="grid grid-cols-2 gap-4 text-sm">
                    <div>Customer:</div>
                    <div>{{ store.props.invoice.job.customer.name }}</div>
                </div>
                <div v-if="store.props.invoice.vendor !== null && store.getInvoiceType() === 'Bill'"
                    class="grid grid-cols-2 gap-4 text-sm">
                    <div>Vendor:</div>
                    <div>{{ store.props.invoice.vendor.name }}</div>
                </div>
                <div v-if="store.props.invoice.job !== null && store.getInvoiceType() === 'Bill'"
                    class="grid grid-cols-2 gap-4 text-sm">
                    <div>Vendor:</div>
                    <div>{{ store.props.invoice.job.vendor.name }}</div>
                </div>
                <div v-if="
                    store.props.invoice.employee !== null && store.getInvoiceType() === 'Voucher'
                " class="grid grid-cols-2 gap-4 text-sm">
                    <div>Employee:</div>
                    <div>{{ store.props.invoice.employee.username }}</div>
                </div>
                <div v-if="store.props.invoice.job !== null" class="grid grid-cols-2 gap-4 text-sm">
                    <div>Job:</div>
                    <div>{{ store.props.invoice.job.name }}</div>
                </div>
                <div class="grid grid-cols-2 gap-4 text-sm">
                    <div>Billing ID:</div>
                    <div>{{ store.props.invoice.billing_id }}</div>
                </div>
                <div v-if="store.props.invoice.billterm !== null" class="grid grid-cols-2 gap-4 text-sm">
                    <div>Terms:</div>
                    <div>{{ store.props.invoice.billterm.name }}</div>
                </div>
            </div>
            <div class="border p-2">
                <div class="font-semibold text-md">Notes</div>
                <div class="text-sm">{{ store.props.invoice.notes }}</div>
            </div>
        </div>
        <div class="grid grid-cols-1 border p-2 mt-2"
            v-if="store.getInvoiceType() === 'Bill' || store.getInvoiceType() === 'Voucher'">
            <div class="font-semibold text-md">Default Chargeback Project</div>
            <div v-if="store.props.invoice.billto_customer !== null" class="grid grid-cols-2 gap-4 text-sm">
                <div>Customer:</div>
                <div>{{ store.props.invoice.billto_customer.name }}</div>
            </div>
            <div v-if="store.props.invoice.billto_job !== null" class="grid grid-cols-2 gap-4 text-sm">
                <div>Customer:</div>
                <div>{{ store.props.invoice.billto_job.customer.name }}</div>
            </div>
            <div v-if="store.props.invoice.billto_job !== null" class="grid grid-cols-2 gap-4 text-sm">
                <div>Job:</div>
                <div>{{ store.props.invoice.billto_job.name }}</div>
            </div>
        </div>
        <EntrysInvoicesIndex v-if="store.getInvoiceType() === 'Invoice'" @reload="load" @destroy="destroy" />
        <EntrysBillsIndex v-if="store.getInvoiceType() === 'Bill'" @reload="load" @destroy="destroy" />
        <EntrysVouchersIndex v-if="store.getInvoiceType() === 'Voucher'" @reload="load" @destroy="destroy" />
        <div class="flex gap-2 items-center justify-end mt-4">
            <form-secondary-button v-if="store.props.invoice.date_posted" @click="unpost" title="Unpost Invoice">
                <span class="material-icons-outlined">unarchive</span>
            </form-secondary-button>

            <form-button v-else
                @click="$router.push({ name: 'business.invoices.post', params: { invoice_pk: store.props.invoice.pk } })"
                title="Post Invoice" :class="{ 'opacity-60': store.props.entrys.data.length == 0 }"
                :disabled="store.props.entrys.data.length == 0">
                <span class="material-icons-outlined">archive</span>
            </form-button>
        </div>
    </div>
</template>