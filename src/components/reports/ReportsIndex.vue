<template>
  <div class="p-6">
    <table class="table-fixed">
      <tbody>
        <tr>
          <td></td>
          <td>
            <RouterLink :to="{ name: 'reports.account-summary' }">
              Account Summary</RouterLink>
          </td>
          <td>
            <RouterLink :to="{ name: 'reports.transactions' }">
              Transactions Report</RouterLink>
          </td>
        </tr>
        <tr>
          <th colspan="3">Assets & Liabilities</th>
        </tr>
        <tr>
          <td></td>
          <td>
            <RouterLink :to="{ name: 'reports.assets_liabilities.assets_columnchart' }">Assets Column Chart
            </RouterLink>
          </td>
          <td><RouterLink :to="{ name: 'reports.assets_liabilities.assets_piechart' }">Assets Pie Chart
          </RouterLink></td>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.assets_liabilities.balance_sheet' }">Balance Sheet</RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.assets_liabilities.general_ledger' }">General Ledger</RouterLink></td>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.assets_liabilities.liabilities_columnchart' }">Liabilities Chart
          </RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.assets_liabilities.liabilities_piechart' }">Liabilities Piechart
          </RouterLink></td>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.assets_liabilities.networth_columnchart' }">Net Worth Chart
          </RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.assets_liabilities.networth_linechart' }">Net Worth Linechart
          </RouterLink></td>
        </tr>
        <tr>
          <th colspan="3">Business</th>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.business.customer_report' }">Customer Report</RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.business.customer_summary' }">Customer Summary</RouterLink></td>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.business.employee_report' }">Employee Report</RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.business.vendor_report' }">Vendor Report</RouterLink></td>
        </tr>
        <tr>
          <th colspan="3">Income & Expense</th>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.cash_flow' }">Cash Flow</RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.cash_flow_columnchart' }">Cash Flow Column Chart
          </RouterLink></td>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.expenses_columnchart' }">Expenses Column Chart
          </RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.expenses_piechart' }">Expenses Piechart
          </RouterLink></td>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.incomeexpense_columnchart' }">Income & Expense Column Chart
          </RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.incomeexpense_linechart' }">Income & Expense Linechart
          </RouterLink></td>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.income_columnchart' }">Income Column Chart</RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.income_piechart' }">Income Piechart</RouterLink></td>
        </tr>
        <tr>
          <td></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.profit_loss' }">Profit & Loss</RouterLink></td>
          <td><RouterLink :to="{ name: 'reports.income_expense.trial_balance' }">Trial Balance</RouterLink></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>
