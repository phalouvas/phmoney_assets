<template>
  <div class="p-6">
    <h2 class="text-center">
      {{ store.props.company }} {{ store.props.title }}
      For Period Covering {{ store.convert_date(store.props.date_start) }} to {{ store.convert_date(store.props.date_end) }}
    </h2>

    <div class="border-b">
      <h3>Revenues</h3>
      <table class="w-full">
        <tr v-for="income in store.props.incomes.items" :key="income.guid">
          <td :style="`padding-left: ${income.level}rem`">
            {{ income.name_simple }}
          </td>
          <td class="text-right" :style="`padding-right: ${income.level}rem`">
            <amount-financial
              v-if="store.props.level == income.level"
              :amount="-income.amount_sum"
              :commodity="income.commodity"
            />
            <amount-financial
              v-else
              :amount="-income.amount"
              :commodity="income.commodity"
            />
          </td>
        </tr>
        <tr>
          <th class="text-left">Total Revenue</th>
          <th class="text-right">
            <amount-financial
              :amount="store.props.incomes.total"
              :commodity="store.props.currency"
            />
          </th>
        </tr>
      </table>
    </div>
    <div class="border-b">
      <h3>Expenses</h3>
      <table class="w-full">
        <tr
          v-for="expense in store.props.expenses.items"
          :key="expense.guid"
        >
          <td :style="`padding-left: ${expense.level}rem`">
            {{ expense.name_simple }}
          </td>
          <td
            class="text-right"
            :style="`padding-right: ${expense.level}rem`"
          >
            <amount-financial
              v-if="store.props.level == expense.level"
              :amount="expense.amount_sum"
              :commodity="expense.commodity"
            />
            <amount-financial
              v-else
              :amount="expense.amount"
              :commodity="expense.commodity"
            />
          </td>
        </tr>
        <tr>
          <th class="text-left">Total Expenses</th>
          <th class="text-right">
            <amount-financial
              :amount="store.props.expenses.total"
              :commodity="store.props.currency"
            />
          </th>
        </tr>
      </table>
    </div>
    <div class="">
      <table class="w-full">
        <tr>
          <th v-if="store.props.net_income >= 0" class="text-left">Net Income for Period</th>
          <th v-else class="text-left">Net Loss for Period</th>
          <th class="text-right">
            <amount-financial
              :amount="store.props.net_income"
              :commodity="store.props.currency"
            />
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>