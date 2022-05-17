<template>
  <div class="p-6">
    <h2 class="text-center">
      {{ store.props.company }} {{ store.props.title }}
      {{ store.convert_date(store.props.date_end) }}
    </h2>

    <div class="border-b">
      <h3>Assets</h3>
      <table class="w-full">
        <tr v-for="asset in store.props.assets.items" :key="asset.guid">
          <td :style="`padding-left: ${asset.level}rem`">
            {{ asset.name_simple }}
          </td>
          <td class="text-right" :style="`padding-right: ${asset.level}rem`">
            <amount-financial
              v-if="store.props.level == asset.level"
              :amount="asset.amount_sum"
              :commodity="asset.commodity"
            />
            <amount-financial
              v-else
              :amount="asset.amount"
              :commodity="asset.commodity"
            />
          </td>
        </tr>
        <tr>
          <th class="text-left">Total Assets</th>
          <th class="text-right">
            <amount-financial
              :amount="store.props.assets.total"
              :commodity="store.props.currency"
            />
          </th>
        </tr>
      </table>
    </div>
    <div class="border-b">
      <h3>Liabilities</h3>
      <table class="w-full">
        <tr
          v-for="liability in store.props.liabilities.items"
          :key="liability.guid"
        >
          <td :style="`padding-left: ${liability.level}rem`">
            {{ liability.name_simple }}
          </td>
          <td
            class="text-right"
            :style="`padding-right: ${liability.level}rem`"
          >
            <amount-financial
              v-if="store.props.level == liability.level"
              :amount="liability.amount_sum"
              :commodity="liability.commodity"
            />
            <amount-financial
              v-else
              :amount="liability.amount"
              :commodity="liability.commodity"
            />
          </td>
        </tr>
        <tr>
          <th class="text-left">Total Liabilities</th>
          <th class="text-right">
            <amount-financial
              :amount="store.props.liabilities.total"
              :commodity="store.props.currency"
            />
          </th>
        </tr>
      </table>
    </div>
    <div class="border-b">
      <h3>Equity</h3>
      <table class="w-full">
        <tr v-for="equity in store.props.equities.items" :key="equity.guid">
          <td :style="`padding-left: ${equity.level}rem`">
            {{ equity.name_simple }}
          </td>
          <td class="text-right" :style="`padding-right: ${equity.level}rem`">
            <amount-financial
              v-if="store.props.level == equity.level"
              :amount="equity.amount_sum"
              :commodity="equity.commodity"
            />
            <amount-financial
              v-else
              :amount="equity.amount"
              :commodity="equity.commodity"
            />
          </td>
        </tr>
        <tr>
          <th class="text-left">Retained Losses</th>
          <th class="text-right">
            <amount-financial
              :amount="store.props.retained_losses"
              :commodity="store.props.currency"
            />
          </th>
        </tr>
        <tr>
          <th class="text-left">Total Equity</th>
          <th class="text-right">
            <amount-financial
              :amount="store.props.total_equity"
              :commodity="store.props.currency"
            />
          </th>
        </tr>
      </table>
    </div>
    <div class="">
      <table class="w-full">
        <tr>
          <th class="text-left">Total Liabilities & Equity</th>
          <th class="text-right">
            <amount-financial
              :amount="store.props.assets.total"
              :commodity="store.props.currency"
            />
          </th>
        </tr>
      </table>
    </div>
  </div>
</template>
