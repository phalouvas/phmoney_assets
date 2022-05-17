
<script lang="ts">
export default {
  props: {
    modelValue: {
      type: Object,
      required: false,
    },
  },

  data() {
    return {
      selected: {
        filter_date: this.moment().format("YYYY-MM-DD"),
        date_type: "filter_list",
        list_date: { id: "today", name: "Today" },
      },
      list_dates: [
        { id: "today", name: "Today" },
        { id: "end_of_this_month", name: "End of this month" },
        { id: "end_of_previous_month", name: "End of previous month" },
        { id: "end_of_current_quarter", name: "End of current quarter" },
        { id: "end_of_previous_quarter", name: "End of previous quarter" },
        { id: "end_of_this_year", name: "End of this year" },
        { id: "end_of_previous_year", name: "End of previous year" },
        { id: "end_of_accounting_period", name: "End of accounting period" },
      ],
    };
  },

  mounted() {
    if (this.modelValue !== null) {
      this.selected = this.modelValue;
    }
  },

  watch: {
    modelValue(newValue, oldValue) {
      if (newValue !== null) {
        this.selected = newValue;
      }
    },
  },

  methods: {
    submit() {
      this.$emit("update:modelValue", this.selected);
    },

    clear() {
      this.$emit("update:modelValue", null);
    },
  },
};
</script>

<template>
  <div class="flex gap-4">
    <div class="flex gap-2">
      <form-input type="radio" id="radio_date" name="radio_end" value="filter_date"
        :checked="selected.date_type === 'filter_date'" v-model="selected.date_type" />
      <form-input type="date" id="filter_date" name="filter_date" v-model="selected.filter_date"
        :class="{ 'opacity-25': selected.date_type === 'filter_list' }" :disabled="selected.date_type === 'filter_list'"
        @change="submit" />
    </div>
    <div class="flex gap-2">
      <form-input type="radio" id="radio_list" name="radio_end" value="filter_list"
        :checked="selected.date_type === 'filter_list'" v-model="selected.date_type" />
      <select id="list_date" v-model="selected.list_date" :disabled="selected.date_type === 'filter_date'"
        @close="submit"
        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
        <option v-for="list_date in list_dates" :key="list_date.id" :value="list_date">
          {{ list_date.name }}
        </option>
      </select>
    </div>
  </div>
</template>

