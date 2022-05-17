<template>
    <div class="p-6">
        <button-bar @settings="savingSettings = true" />

        <h2 class="text-center">
            {{ store.props.company }} {{ store.props.title }} From
            {{ store.convert_date(store.props.date_start) }} to
            {{ store.convert_date(store.props.date_end) }}
        </h2>

        <h3 v-if="store.report_settings.params.vendor !== null">{{ store.report_settings.params.vendor.name }}</h3>

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
                <tr v-for="bill in store.props.bills" :key="bill.guid">
                    <td>{{ store.convert_date(bill.date_opened) }}</td>
                    <td>{{ bill.due_date }}</td>
                    <td>
                        <RouterLink :to="{ name: 'business.invoices.entrys.index', params: { invoice_pk: bill.pk } }">{{
                                bill.id
                        }}</RouterLink>
                    </td>
                    <td>{{ bill.type }}</td>
                    <td>{{ bill.notes }}</td>
                    <td>
                        <amount-financial :amount="bill.sale" :commodity="bill.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="bill.tax" :commodity="bill.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="bill.debits" :commodity="bill.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="bill.credits" :commodity="bill.commodity" />
                    </td>
                    <td>
                        <amount-financial :amount="bill.balance" :commodity="bill.commodity" />
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