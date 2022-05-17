<template>
    <div class="p-6">

        <h2 class="text-center">
            {{ store.props.company }} {{ store.props.title }} From
            {{ store.convert_date(store.props.date_start) }} to
            {{ store.convert_date(store.props.date_end) }}
        </h2>

        <h3 v-if="store.report_settings.params.customer !== null">{{ store.report_settings.params.customer.name }}</h3>

        <table>
            <thead>
                <th>Date</th>
                <th>Due Date</th>
                <th>Reference</th>
                <th>Type</th>
                <th>Description</th>
                <th>Sale</th>
                <th>Tax</th>
                <th>Debits</th>
                <th>Credits</th>
                <th>Balance</th>
            </thead>
            <tbody>
                <tr v-for="invoice in store.props.invoices" :key="invoice.guid">
                    <td>{{ store.convert_date(invoice.date_opened) }}</td>
                    <td>{{ invoice.due_date }}</td>
                    <td>
                        <RouterLink :to="{name: 'business.invoices.entrys.index', params: {invoice_pk: invoice.pk}}">{{
                                invoice.id
                        }}</RouterLink>
                    </td>
                    <td>{{ invoice.type }}</td>
                    <td>{{ invoice.notes }}</td>
                    <td>
                        <amount-financial :amount="invoice.sale" :commodity="invoice.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="invoice.tax" :commodity="invoice.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="invoice.debits" :commodity="invoice.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="invoice.credits" :commodity="invoice.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="invoice.balance" :commodity="invoice.commodity" />
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <th>Period Totals</th>
                <th colspan="4"></th>
                <th>
                    <amount-financial :amount="store.props.totals.sale" :commodity="store.props.currency" />
                </th>
                <th>
                    <amount-financial :amount="store.props.totals.tax" :commodity="store.props.currency" />
                </th>
                <th>
                    <amount-financial :amount="store.props.totals.debits" :commodity="store.props.currency" />
                </th>
                <th>
                    <amount-financial :amount="store.props.totals.credits" :commodity="store.props.currency" />
                </th>
                <th>
                    <amount-financial :amount="store.props.totals.balance" :commodity="store.props.currency" />
                </th>
            </tfoot>
        </table>
    </div>
</template>