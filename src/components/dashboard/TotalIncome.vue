<template>
  <div class="bg-gradient-to-r from-sky-600 to-sky-400 shadow w-full sm:w-[30%] p-4 text-white rounded prose">
    <div class="flex flex-wrap justify-between">
      <div class="font-bold">Money In</div>
      <div class="material-icons-outlined">payments</div>
    </div>
    <AmountFinancial :amount="store.props.total_income" :commodity="store.props.currency" />
    <div class="flex flex-wrap justify-between text-sm pt-4">
      <div>Receivables</div>
      <AmountFinancial :amount="store.props.total_receivables" :commodity="store.props.currency" />
    </div>
  </div>
</template>
