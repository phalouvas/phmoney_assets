
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "AmountFinancial",

  props: {
    commodity: Object,
    amount: Number|String,
  },

  computed: {
    format_amount: function () {
      if (this.amount === null || this.amount === undefined || !this.commodity) {
          return null;
      }
      let amount = Math.abs(this.amount);
      var denom = this.commodity.fraction.toString().length - 1;
      var code = this.commodity.mnemonic;

      var formatted;
      if (this.commodity.namespace == "CURRENCY") {
        formatted = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: code,
          minimumFractionDigits: denom,
        }).format(amount);
      } else {
        formatted = amount + " " + this.commodity.mnemonic;
      }

      if (this.amount < 0) {
        return "(" + formatted + ")";
      }
      return formatted;
    },
    class_amount: function () {
      if (this.amount < 0) {
        return "text-red-500";
      }
    },
  },
});
</script>

<template>
  <div :class="class_amount">
    {{ format_amount }}
  </div>
</template>
