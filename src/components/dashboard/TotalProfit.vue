<template>
  <div class="bg-gradient-to-r from-green-600 to-green-400 shadow w-full sm:w-[30%] p-4 text-white rounded prose">
    <div class="flex flex-wrap justify-between">
      <div class="font-bold">Net Flow</div>
      <div class="material-icons-outlined">savings</div>
    </div>
    <amount-financial
      :amount="store.props.total_profit"
      :commodity="store.props.currency"
    />
    <div class="flex flex-wrap justify-between text-sm pt-4">
      <div>Upcoming</div>
      <amount-financial
        :amount="store.props.total_upcoming"
        :commodity="store.props.currency"
      />
    </div>
  </div>
</template>
