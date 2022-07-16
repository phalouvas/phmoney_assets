<template>
    <div class="p-6">
        <h2 class="text-center">
            {{ store.props.company }} {{ store.props.title }} For Period Covering
            {{ store.convert_date(store.props.date_start) }} to
            {{ store.convert_date(store.props.date_end) }}
        </h2>
        <table class="w-full table-fixed">
            <thead>
                <th><span v-show="store.report_settings.params.date">Account Name</span></th>
                <th><span v-show="store.report_settings.params.date">Account Code</span></th>
                <th><span v-show="store.report_settings.params.date">Date</span></th>
                <th><span v-show="store.report_settings.params.num">Num</span></th>
                <th><span v-show="store.report_settings.params.description">Description</span></th>
                <th><span v-show="store.report_settings.params.memo">Memo</span></th>
                <th class="text-right">Amount</th>
            </thead>
        </table>
        <table class="w-full table-fixed" v-for="item in store.props.rows" :key="item.guid">
            <thead>
                <tr>
                    <th colspan="4">Total for {{ item.code }} {{ item.name }}</th>
                    <th class="text-right">
                        <amount-financial :amount="item.total" :commodity="item.commodity" />
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="split in item.rows" :key="split.split_guid">
                    <td><span v-show="store.report_settings.params.name">{{ split.name }}</span></td>
                    <td><span v-show="store.report_settings.params.code">{{ split.code }}</span></td>
                    <td><span v-show="store.report_settings.params.date">{{ store.convert_date(split.post_date)
                    }}</span></td>
                    <td><span v-show="store.report_settings.params.num">{{ split.num }}</span></td>
                    <td><span v-show="store.report_settings.params.description">{{ split.description }}</span></td>
                    <td><span v-show="store.report_settings.params.memo">{{ split.memo }}</span></td>
                    <td class="text-right">
                        <amount-financial :amount="split.amount" :commodity="item.commodity" />
                    </td>
                </tr>
            </tbody>
        </table>
        <table class="w-full table-fixed">
            <tbody>
                <tr>
                    <th class="text-left">Grand Total</th>
                    <th class="text-right">
                        <amount-financial :amount="store.props.total" :commodity="store.props.currency" />
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>