<script lang="ts">
export default {
    emits: ["reload", "destroy"],

    methods: {
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
}
</script>

<template>
    <div class="p-6 overflow-x-auto">
        <table>
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Action</th>
                    <th>Income Account</th>
                    <th>Quantity</th>
                    <th>Unit Price</th>
                    <th>Discount Type</th>
                    <th>Discount How</th>
                    <th>Discount</th>
                    <th>Taxable?</th>
                    <th>Tax Included?</th>
                    <th>Tax Table</th>
                    <th>Subtotal</th>
                    <th>Tax</th>
                    <th v-if="store.props.invoice.date_posted"></th>
                    <th>
                        <form-button
                            @click="$router.push({ name: 'business.invoices.entrys.create', params: { invoice_pk: store.props.invoice.pk } })"
                            title="Add New">
                            <span class="material-icons-outlined">add</span>
                        </form-button>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="entry in store.props.entrys.data" :key="entry.guid">
                    <td>{{ store.convert_date(entry.date) }}</td>
                    <td>{{ entry.description }}</td>
                    <td>{{ entry.action }}</td>
                    <td>{{ entry.invoice_account.name }}</td>
                    <td>{{ entry.quantity_num / entry.quantity_denom }}</td>
                    <td>{{ entry.i_price_num / entry.i_price_denom }}</td>
                    <td>{{ entry.i_disc_type }}</td>
                    <td>{{ entry.i_disc_how }}</td>
                    <td>{{ entry.i_discount_num / entry.i_discount_denom }}</td>
                    <td v-if="entry.i_taxable">
                        <span class="material-icons-outlined">check_circle</span>
                    </td>
                    <td v-else></td>
                    <td v-if="entry.i_taxincluded">
                        <span class="material-icons-outlined">check_circle</span>
                    </td>
                    <td v-else></td>
                    <td v-if="entry.invoice_taxtable">
                        {{ entry.invoice_taxtable.name }}
                    </td>
                    <td v-else></td>
                    <td>
                        <amount-financial :amount="subtotal(entry)" :commodity="entry.invoice_account.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="tax(entry)" :commodity="entry.invoice_account.commodity" />
                    </td>
                    <td v-if="store.props.invoice.date_posted"></td>
                    <td v-else>
                        <div class="flex">
                            <RouterLink class="text-sky-500 hover:text-sky-300"
                                :to="{ name: 'business.invoices.entrys.edit', params: { invoice_pk: store.props.invoice.pk, entry_pk: entry.pk } }"
                                title="Edit"><span class="material-icons-outlined">edit</span>
                            </RouterLink>
                            <div class="text-red-500 hover:text-red-300 hover:cursor-pointer"
                                @click="$emit('destroy', entry)" title="Delete">
                                <span class="material-icons-outlined">delete</span>
                            </div>
                        </div>
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <Pagination v-if="store.props.entrys.total > store.props.entrys.per_page"
                    :current="store.props.entrys.current_page" :total="store.props.entrys.total"
                    :per-page="store.props.entrys.per_page" @page-changed="load" />
            </tfoot>
        </table>
    </div>
</template>