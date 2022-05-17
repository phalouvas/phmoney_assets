<template>
  <div
    class="bg-gradient-to-r from-red-600 to-red-400 shadow w-full sm:w-[30%] p-4 text-white rounded prose">
    <div class="flex flex-wrap justify-between">
      <div class="font-bold">Money Out</div>
      <div class="material-icons-outlined">shopping_cart</div>
    </div>
    <amount-financial
      :amount="store.props.total_expenses"
      :commodity="store.props.currency"
    />
    <div class="flex flex-wrap justify-between text-sm pt-4">
      <div>Payables</div>
      <amount-financial
        :amount="store.props.total_payables"
        :commodity="store.props.currency"
      />
    </div>
  </div>
</template>

