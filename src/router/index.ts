import { store } from '../helpers/store';
import { createRouter, createWebHistory } from 'vue-router'
import DashboardIndex from '../views/dashboard/DashboardIndex.vue'
import axios from 'axios'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/auth/login',
      name: 'auth.login',
      component: () => import('../views/auth/AuthLogin.vue'),
      meta: { transition: 'slide-fade' },
    },
    {
      path: '/auth/register',
      name: 'auth.register',
      component: () => import('../views/auth/AuthRegister.vue'),
    },
    {
      path: '/auth/forgot_password',
      name: 'auth.forgot_password',
      component: () => import('../views/auth/AuthForgotPassword.vue'),
    },
    {
      path: '/phmoney',
      name: 'dashboard',
      component: DashboardIndex,
      meta: { transition: 'slide-fade' },
    },
    {
      path: '/user/profile',
      name: 'user.profile',
      component: () => import('../views/profile/ProfileShow.vue'),
    },
    {
      path: '/user/api-tokens',
      name: 'user.api-tokens',
      component: () => import('../views/api/ApiIndex.vue'),
    },
    {
      path: '/teams/create',
      name: 'teams.create',
      component: () => import('../views/teams/TeamsCreate.vue'),
    },
    {
      path: '/teams/show/:team_pk',
      name: 'teams.show',
      component: () => import('../views/teams/TeamsShow.vue'),
    },
    {
      path: '/accounts/index',
      name: 'accounts.index',
      component: () => import('../views/accounts/AccountsIndex.vue'),
    },
    {
      path: '/accounts/create',
      name: 'accounts.create',
      component: () => import('../views/accounts/AccountsCreate.vue'),
    },
    {
      path: '/accounts/edit/:account_pk',
      name: 'accounts.edit',
      component: () => import('../views/accounts/AccountsEdit.vue'),
    },
    {
      path: '/reconcile/index/:account_pk',
      name: 'reconcile.index',
      component: () => import('../views/reconcile/ReconcileIndex.vue'),
    },
    {
      path: '/transactions/index/:account_pk',
      name: 'transactions.index',
      component: () => import('../views/transactions/TransactionsIndex.vue'),
    },
    {
      path: '/transactions/:account_pk/create',
      name: 'transactions.create',
      component: () => import('../views/transactions/TransactionsCreate.vue'),
    },
    {
      path: '/transactions/:account_pk/view/:transaction_pk',
      name: 'transactions.view',
      component: () => import('../views/transactions/TransactionsView.vue'),
    },
    {
      path: '/transactions/:account_pk/edit/:transaction_pk',
      name: 'transactions.edit',
      component: () => import('../views/transactions/TransactionsEdit.vue'),
    },
    {
      path: '/business/payment/index',
      name: 'business.payment.index',
      component: () => import('../views/business/payment/PaymentIndex.vue'),
    },
    {
      path: '/business/invoices/index',
      name: 'business.invoices.index',
      component: () => import('../views/business/invoices/InvoicesIndex.vue'),
    },
    {
      path: '/business/invoices/create',
      name: 'business.invoices.create',
      component: () => import('../views/business/invoices/InvoicesCreate.vue'),
    },
    {
      path: '/business/invoices/edit/:invoice_pk',
      name: 'business.invoices.edit',
      component: () => import('../views/business/invoices/InvoicesEdit.vue'),
    },
    {
      path: '/business/invoices/post/:invoice_pk',
      name: 'business.invoices.post',
      component: () => import('../views/business/invoices/InvoicesPost.vue'),
    },
    {
      path: '/business/invoices/:invoice_pk/entrys/index',
      name: 'business.invoices.entrys.index',
      component: () => import('../views/business/invoices/entrys/EntrysIndex.vue'),
    },
    {
      path: '/business/invoices/:invoice_pk/entrys/create',
      name: 'business.invoices.entrys.create',
      component: () => import('../views/business/invoices/entrys/EntrysCreate.vue'),
    },
    {
      path: '/business/invoices/:invoice_pk/entrys/edit/:entry_pk',
      name: 'business.invoices.entrys.edit',
      component: () => import('../views/business/invoices/entrys/EntrysEdit.vue'),
    },
    {
      path: '/business/customers/index',
      name: 'business.customers.index',
      component: () => import('../views/business/customers/CustomersIndex.vue'),
    },
    {
      path: '/business/customers/create',
      name: 'business.customers.create',
      component: () => import('../views/business/customers/CustomersCreate.vue'),
    },
    {
      path: '/business/customers/edit/:customer_pk',
      name: 'business.customers.edit',
      component: () => import('../views/business/customers/CustomersEdit.vue'),
    },
    {
      path: '/business/vendors/index',
      name: 'business.vendors.index',
      component: () => import('../views/business/vendors/VendorsIndex.vue'),
    },
    {
      path: '/business/vendors/create',
      name: 'business.vendors.create',
      component: () => import('../views/business/vendors/VendorsCreate.vue'),
    },
    {
      path: '/business/vendors/edit/:vendor_pk',
      name: 'business.vendors.edit',
      component: () => import('../views/business/vendors/VendorsEdit.vue'),
    },
    {
      path: '/business/employees/index',
      name: 'business.employees.index',
      component: () => import('../views/business/employees/EmployeesIndex.vue'),
    },
    {
      path: '/business/employees/create',
      name: 'business.employees.create',
      component: () => import('../views/business/employees/EmployeesCreate.vue'),
    },
    {
      path: '/business/employees/edit/:employee_pk',
      name: 'business.employees.edit',
      component: () => import('../views/business/employees/EmployeesEdit.vue'),
    },
    {
      path: '/business/jobs/index',
      name: 'business.jobs.index',
      component: () => import('../views/business/jobs/JobsIndex.vue'),
    },
    {
      path: '/business/jobs/create',
      name: 'business.jobs.create',
      component: () => import('../views/business/jobs/JobsCreate.vue'),
    },
    {
      path: '/business/jobs/edit/:job_pk',
      name: 'business.jobs.edit',
      component: () => import('../views/business/jobs/JobsEdit.vue'),
    },
    {
      path: '/business/billterms/index',
      name: 'business.billterms.index',
      component: () => import('../views/business/billterms/BilltermsIndex.vue'),
    },
    {
      path: '/business/billterms/create',
      name: 'business.billterms.create',
      component: () => import('../views/business/billterms/BilltermsCreate.vue'),
    },
    {
      path: '/business/billterms/edit/:billterm_pk',
      name: 'business.billterms.edit',
      component: () => import('../views/business/billterms/BilltermsEdit.vue'),
    },
    {
      path: '/business/taxtables/index',
      name: 'business.taxtables.index',
      component: () => import('../views/business/taxtables/TaxtablesIndex.vue'),
    },
    {
      path: '/business/taxtables/create',
      name: 'business.taxtables.create',
      component: () => import('../views/business/taxtables/TaxtablesCreate.vue'),
    },
    {
      path: '/business/taxtables/edit/:taxtable_pk',
      name: 'business.taxtables.edit',
      component: () => import('../views/business/taxtables/TaxtablesEdit.vue'),
    },
    {
      path: '/business/taxtables/:taxtable_pk/entrys/index',
      name: 'business.taxtables.entrys.index',
      component: () => import('../views/business/taxtables/entrys/TaxtablesEntrysIndex.vue'),
    },
    {
      path: '/business/taxtables/:taxtable_pk/entrys/create',
      name: 'business.taxtables.entrys.create',
      component: () => import('../views/business/taxtables/entrys/TaxtablesEntrysCreate.vue'),
    },
    {
      path: '/business/taxtables/:taxtable_pk/entrys/edit/:entry_pk',
      name: 'business.taxtables.entrys.edit',
      component: () => import('../views/business/taxtables/entrys/TaxtablesEntrysEdit.vue'),
    },
    {
      path: '/import/transactions_from_csv/page1',
      name: 'import.transactions_from_csv.page1',
      component: () => import('../views/import/transactions_from_csv/TransactionsFromCsvPage1.vue'),
    },
    {
      path: '/import/transactions_from_csv/page2',
      name: 'import.transactions_from_csv.page2',
      component: () => import('../views/import/transactions_from_csv/TransactionsFromCsvPage2.vue'),
    },
    {
      path: '/import/transactions_from_csv/page3',
      name: 'import.transactions_from_csv.page3',
      component: () => import('../views/import/transactions_from_csv/TransactionsFromCsvPage3.vue'),
    },
    {
      path: '/import/transactions_from_csv/page4',
      name: 'import.transactions_from_csv.page4',
      component: () => import('../views/import/transactions_from_csv/TransactionsFromCsvPage4.vue'),
    },
    {
      path: '/export/transactions_to_csv/index',
      name: 'export.transactions_to_csv.index',
      component: () => import('../views/export/transactions_to_csv/ExportTransactionsToCsv.vue'),
    },
    {
      path: '/book/close/index',
      name: 'book.close.index',
      component: () => import('../views/book/BookCloseIndex.vue'),
    },
    {
      path: '/book/samples/index',
      name: 'book.samples.index',
      component: () => import('../views/book/BookSamplesIndex.vue'),
    },
    {
      path: '/book/download_upload/index',
      name: 'book.download_upload.index',
      component: () => import('../views/book/BookDownloadUploadIndex.vue'),
    },
    {
      path: '/book/settings/index',
      name: 'book.settings.index',
      component: () => import('../views/book/BookSettingsIndex.vue'),
    },    
    {
      path: '/reports',
      name: 'reports.index',
      component: () => import('../views/reports/ReportsIndex.vue'),
    },
    {
      path: '/reports/transactions',
      name: 'reports.transactions',
      component: () => import('../views/reports/ReportsTransactions.vue'),
    },
    {
      path: '/reports/assets_liabilities/assets_columnchart',
      name: 'reports.assets_liabilities.assets_columnchart',
      component: () => import('../views/reports/ReportsChartColumn.vue'),
    },
    {
      path: '/reports/assets_liabilities/assets_piechart',
      name: 'reports.assets_liabilities.assets_piechart',
      component: () => import('../views/reports/ReportsChartPie.vue'),
    },
    {
      path: '/reports/assets_liabilities/balance_sheet',
      name: 'reports.assets_liabilities.balance_sheet',
      component: () => import('../views/reports/ReportsAssetsLiabilitiesBalanceSheet.vue'),
    },
    {
      path: '/reports/assets_liabilities/general_ledger',
      name: 'reports.assets_liabilities.general_ledger',
      component: () => import('../views/reports/ReportsAssetsLiabilitiesGeneralLedger.vue'),
    },
    {
      path: '/reports/assets_liabilities/liabilities_columnchart',
      name: 'reports.assets_liabilities.liabilities_columnchart',
      component: () => import('../views/reports/ReportsChartColumn.vue'),
    },
    {
      path: '/reports/assets_liabilities/liabilities_piechart',
      name: 'reports.assets_liabilities.liabilities_piechart',
      component: () => import('../views/reports/ReportsChartPie.vue'),
    },
    {
      path: '/reports/assets_liabilities/networth_columnchart',
      name: 'reports.assets_liabilities.networth_columnchart',
      component: () => import('../views/reports/ReportsChartColumn.vue'),
    },
    {
      path: '/reports/assets_liabilities/networth_linechart',
      name: 'reports.assets_liabilities.networth_linechart',
      component: () => import('../views/reports/ReportsChartLine.vue'),
    },
    {
      path: '/reports/business/customer_report',
      name: 'reports.business.customer_report',
      component: () => import('../views/reports/ReportsBusinessCustomerReport.vue'),
    },
    {
      path: '/reports/business/customer_summary',
      name: 'reports.business.customer_summary',
      component: () => import('../views/reports/ReportsBusinessCustomerSummary.vue'),
    },
    {
      path: '/reports/business/employee_report',
      name: 'reports.business.employee_report',
      component: () => import('../views/reports/ReportsBusinessEmployeeReport.vue'),
    },
    {
      path: '/reports/business/vendor_report',
      name: 'reports.business.vendor_report',
      component: () => import('../views/reports/ReportsBusinessVendorReport.vue'),
    },
    {
      path: '/reports/chart/column',
      name: 'reports.chart.column',
      component: () => import('../views/reports/ReportsChartColumn.vue'),
    },
    {
      path: '/reports/chart/line',
      name: 'reports.chart.line',
      component: () => import('../views/reports/ReportsChartLine.vue'),
    },
    {
      path: '/reports/chart/pie',
      name: 'reports.chart.pie',
      component: () => import('../views/reports/ReportsChartPie.vue'),
    },
    {
      path: '/reports/income_expense/cash_flow',
      name: 'reports.income_expense.cash_flow',
      component: () => import('../views/reports/ReportsIncomeExpenseCashFlow.vue'),
    },
    {
      path: '/reports/income_expense/cash_flow_columnchart',
      name: 'reports.income_expense.cash_flow_columnchart',
      component: () => import('../views/reports/ReportsChartColumn.vue'),
    },
    {
      path: '/reports/income_expense/expenses_columnchart',
      name: 'reports.income_expense.expenses_columnchart',
      component: () => import('../views/reports/ReportsChartColumn.vue'),
    },
    {
      path: '/reports/income_expense/expenses_piechart',
      name: 'reports.income_expense.expenses_piechart',
      component: () => import('../views/reports/ReportsChartPie.vue'),
    },
    {
      path: '/reports/income_expense/incomeexpense_columnchart',
      name: 'reports.income_expense.incomeexpense_columnchart',
      component: () => import('../views/reports/ReportsChartColumn.vue'),
    },
    {
      path: '/reports/income_expense/incomeexpense_linechart',
      name: 'reports.income_expense.incomeexpense_linechart',
      component: () => import('../views/reports/ReportsChartLine.vue'),
    },
    {
      path: '/reports/income_expense/income_columnchart',
      name: 'reports.income_expense.income_columnchart',
      component: () => import('../views/reports/ReportsChartColumn.vue'),
    },
    {
      path: '/reports/income_expense/income_piechart',
      name: 'reports.income_expense.income_piechart',
      component: () => import('../views/reports/ReportsChartPie.vue'),
    },
    {
      path: '/reports/income_expense/profit_loss',
      name: 'reports.income_expense.profit_loss',
      component: () => import('../views/reports/ReportsIncomeExpenseProfitLoss.vue'),
    },
    {
      path: '/reports/income_expense/trial_balance',
      name: 'reports.income_expense.trial_balance',
      component: () => import('../views/reports/ReportsIncomeExpenseTrialBalance.vue'),
    },
  ]
});

router.beforeEach(async (to, from) => {
  if (
    // make sure the user is authenticated
    !store.user &&
    // ❗️ Avoid an infinite redirect
    (
      to.name !== 'auth.login' &&
      to.name !== 'auth.register' &&
      to.name !== 'auth.forgot_password' 
    )
  ) {

    const response = await axios.get(`${import.meta.env.VITE_ROOT}user`)
      .then((response) => {
        store.user = response.data;
      })
      .catch((error) => {
        store.user = null;
      });

    // redirect the user to the login page
    if (!store.user) {
      return { name: 'auth.login' }
    }
  }
})

export default router
