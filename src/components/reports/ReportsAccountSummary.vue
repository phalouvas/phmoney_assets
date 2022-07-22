<template>
    <div class="p-6">
        <h2 class="text-center">
            {{ store.props.company }} {{ store.props.title }} Account Summary Covering
            {{ store.convert_date(store.props.date_start) }} to
            {{ store.convert_date(store.props.date_end) }}
        </h2>
        <table>
            <thead>
                <th>Name</th>
                <th>Code</th>
                <th>Type</th>
                <th>Description</th>
                <th>Balance</th>
            </thead>
            <tbody>
                <tr v-for="account in store.props.accounts" :key="account.guid" >
                    <td :style="`padding-left: ${account.level}rem`">
                        {{ account.name_simple }}
                    </td>
                    <td>{{ account.code }}</td>
                    <td>{{ account.type }}</td>
                    <td>{{ account.description }}</td>
                    <td>
                        <amount-financial :amount="account.amount_sum" :commodity="account.commodity" />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>