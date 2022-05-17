<template>
    <div class="p-6">

        <h2 class="text-center">
            {{ store.props.company }} {{ store.props.title }} From
            {{ store.convert_date(store.props.date_start) }} to
            {{ store.convert_date(store.props.date_end) }}
        </h2>

        <table>
            <thead>
                <th>Customer</th>
                <th>Profit</th>
                <th>Markup</th>
                <th>Description</th>
                <th>Sales</th>
                <th>Expense</th>
            </thead>
            <tbody>
                <tr v-for="invoice in store.props.invoices" :key="invoice.guid">
                    <td>{{ invoice.name }}</td>
                    <td>
                        <amount-financial :amount="invoice.profits" :commodity="store.props.currency" />
                    </td>
                    <td>{{ invoice.markup }}%</td>
                    <td>
                        <amount-financial :amount="invoice.sales" :commodity="store.props.currency" />
                    </td>
                    <td>
                        <amount-financial :amount="invoice.expenses" :commodity="store.props.currency" />
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <th>Total</th>
                <th colspan="2">
                    <amount-financial :amount="store.props.totals.profits" :commodity="store.props.currency" />
                </th>
                <th>
                    <amount-financial :amount="store.props.totals.sales" :commodity="store.props.currency" />
                </th>
                <th>
                    <amount-financial :amount="store.props.totals.expenses" :commodity="store.props.currency" />
                </th>
            </tfoot>
        </table>
    </div>
</template>