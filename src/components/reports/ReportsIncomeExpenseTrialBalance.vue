<template>
  <div class="p-6">

    <h2 class="text-center">
      {{ store.props.company }} {{ store.props.title }}
      For Period Covering {{ store.convert_date(store.props.date_start) }} to {{ store.convert_date(store.props.date_end) }}
    </h2>

    <div class="overflow-x-auto">
      <table>
          <thead>
              <th>Name</th>
              <th>Code</th>
              <th>Debit</th>
              <th>Credit</th>
          </thead>
        <tbody>
          <tr v-for="item in store.props.items" :key="item.guid">
            <td :style="`padding-left: ${item.level}rem`">
              {{ item.name_simple }}
            </td>
              <td>{{item.code}}</td>
            <td>
              <amount-financial
                :amount="item.debit"
                :commodity="item.commodity"
              />
            </td>
            <td>
              <amount-financial
                :amount="item.credit"
                :commodity="item.commodity"
              />
            </td>
          </tr>
          <tr>
            <th></th>
            <th>
              <amount-financial
                :amount="store.props.total_debit"
                :commodity="store.props.currency"
              />
            </th>
            <th>
              <amount-financial
                :amount="store.props.total_credit"
                :commodity="store.props.currency"
              />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>