<template>
  <div class="p-6">
    <div class="grid grid-cols-2 prose max-w-none border-b">
      <h3></h3>
      <ul>
        <li>
          <RouterLink :to="{ name: 'reports.transactions' }">
            Transactions Report</RouterLink
          >
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-2 prose max-w-none border-b">
      <h3>Assets & Liabilities</h3>
      <ul>
        <li>
          <RouterLink
            :to="{ name: 'reports.assets_liabilities.assets_columnchart' }"
            >Assets Column Chart
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.assets_liabilities.assets_piechart' }"
            >Assets Pie Chart
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.assets_liabilities.balance_sheet' }"
            >Balance Forecast (pending)
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.assets_liabilities.balance_sheet' }"
            >Balance Sheet</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.assets_liabilities.balance_sheet' }"
            >General Journal (pending)
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.assets_liabilities.general_ledger' }"
            >General Ledger</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.assets_liabilities.balance_sheet' }"
            >Investment Portfolio (pending)</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.assets_liabilities.liabilities_columnchart' }"
            >Liabilities Chart
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.assets_liabilities.liabilities_piechart' }"
            >Liabilities Piechart
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.assets_liabilities.networth_columnchart' }"
            >Net Worth Chart
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.assets_liabilities.networth_linechart' }"
            >Net Worth Linechart
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.assets_liabilities.balance_sheet' }"
            >Price Scatterplot (pending)
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.assets_liabilities.balance_sheet' }"
            >Security Piechart (pending)
          </RouterLink>
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-2 prose max-w-none border-b">
      <h3>Business (pending)</h3>
      <ul>
        <li>
          <RouterLink :to="{ name: 'reports.business.customer_report' }"
            >Customer Report</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.business.customer_summary' }"
            >Customer Summary</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.business.employee_report' }"
            >Employee Report</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.business.vendor_report' }"
            >Vendor Report</RouterLink
          >
        </li>
      </ul>
    </div>

    <div class="grid grid-cols-2 prose max-w-none border-b">
      <h3>Income & Expense</h3>
      <ul>
        <li>
          <RouterLink :to="{ name: 'reports.income_expense.cash_flow' }"
            >Cash Flow</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.income_expense.cash_flow_columnchart' }"
            >Cash Flow Column Chart
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.assets_liabilities.balance_sheet' }"
            >Equity Statement (pending)
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.income_expense.expenses_columnchart' }"
            >Expenses Column Chart
          </RouterLink>
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.income_expense.expenses_piechart' }"
            >Expenses Piechart
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.income_expense.incomeexpense_columnchart' }"
            >Income & Expense Column Chart
          </RouterLink>
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.income_expense.incomeexpense_linechart' }"
            >Income & Expense Linechart</RouterLink
          >
        </li>
        <li>
          <RouterLink
            :to="{ name: 'reports.income_expense.income_columnchart' }"
            >Income Column Chart</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.income_expense.income_piechart' }"
            >Income Piechart</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.assets_liabilities.balance_sheet' }"
            >Income and GST Statement (pending)</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.income_expense.profit_loss' }"
            >Profit & Loss</RouterLink
          >
        </li>
        <li>
          <RouterLink :to="{ name: 'reports.income_expense.trial_balance' }"
            >Trial Balance</RouterLink
          >
        </li>
      </ul>
    </div>
  </div>
</template>
