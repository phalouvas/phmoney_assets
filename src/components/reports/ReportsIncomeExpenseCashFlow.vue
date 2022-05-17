<template>
  <div class="p-6">
    <h2 class="text-center">
      {{ store.props.company }} {{ store.props.title }} From
      {{ store.convert_date(store.props.date_start) }} to
      {{ store.convert_date(store.props.date_end) }}
    </h2>

    <div class="border-b">
      <table>
        <thead>
          <tr>
            <th>Selected Accounts</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in store.props.selected_accounts"
            :key="item.guid"
            :item="item"
          >
            <td>{{ item.name }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="border-b">
      <table>
        <thead>
          <tr>
            <th colspan="2">Money into selected accounts comes from</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in store.props.money_in"
            :key="item.guid"
            :item="item"
          >
            <td>{{ item.name }}</td>
            <td>
              <amount-financial
                :amount="item.amount"
                :commodity="item.commodity"
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Money In</td>
            <th>
              <amount-financial
                :amount="store.props.money_in_amount"
                :commodity="store.props.currency"
              />
            </th>
          </tr>
        </tbody>
      </table>
    </div>

    <div class="border-b">
      <table>
        <thead>
          <tr>
            <th colspan="2">Money out of selected accounts goes to</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in store.props.money_out"
            :key="item.guid"
            :item="item"
          >
            <td>{{ item.name }}</td>
            <td>
              <amount-financial
                :amount="item.amount"
                :commodity="item.commodity"
              />
            </td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>Money Out</td>
            <th>
              <amount-financial
                :amount="store.props.money_out_amount"
                :commodity="store.props.currency"
              />
            </th>
          </tr>
          <tr>
            <td>Difference</td>
            <th>
              <amount-financial
                :amount="
                  store.props.money_in_amount - store.props.money_out_amount
                "
                :commodity="store.props.currency"
              />
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
