<template>
  <div class="p-6">
    <h2 class="text-center">
      {{ store.props.company }} {{ store.props.title }} From
      {{ store.convert_date(store.props.date_start) }} to
      {{ store.convert_date(store.props.date_end) }}
    </h2>

    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Num</th>
          <th>Description</th>
          <th>Memo</th>
          <th>Debit</th>
          <th>Credit</th>
          <th>Balance</th>
        </tr>
      </thead>
    </table>

    <div
      class="border-b"
      v-for="item in store.props.items"
      :key="item.account.guid"
      :split="item"
    >
      <table>
        <thead>
          <tr>
            <td colspan="6">
              {{ item.account.code }} {{ item.account.name }} Balance b/f
            </td>
            <td>
              <amount-financial
                :amount="item.balance_bf"
                :commodity="item.account.commodity"
              />
            </td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="split in item.splits" :key="split.guid" :split="split">
            <td>{{ split.post_date }}</td>
            <td>{{ split.num }}</td>
            <td>{{ split.description }}</td>
            <td>{{ split.memo }}</td>
            <td v-if="split.debit">
              <amount-financial
                :amount="split.debit"
                :commodity="item.account.commodity"
              />
            </td>
            <td v-else></td>
            <td v-if="split.credit">
              <amount-financial
                :amount="split.credit"
                :commodity="item.account.commodity"
              />
            </td>
            <td v-else></td>
            <td>
              <amount-financial
                :amount="split.balance"
                :commodity="item.account.commodity"
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <th colspan="6">
              Total for {{ item.account.code }} {{ item.account.name }}
            </th>
            <th>
              <amount-financial
                :amount="item.total"
                :commodity="item.account.commodity"
              />
            </th>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</template>
