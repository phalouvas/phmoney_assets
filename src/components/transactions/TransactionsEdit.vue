<script setup lang="ts">
import TransactionsInput from '@/components/transactions/TransactionsInput.vue'
</script>

<script lang="ts">
export default {
  data() {
    return {
      form: {
        guid: null,
        currency_guid: null,
        post_date: null,
        enter_date: null,
        num: null,
        description: null,
        splits: null,
      },
      error_message: null,
    };
  },

  async created() {
    if (this.$route.name === 'transactions.create') {
      await this.store.get(`${import.meta.env.VITE_ROOT}transactions/${this.$route.params.account_pk}/create`);
    } else {
      await this.store.get(`${import.meta.env.VITE_ROOT}transactions/${this.$route.params.account_pk}/edit/${this.$route.params.transaction_pk}`);
    }
    this.form = {
      guid: this.store.props.transaction.guid,
      currency_guid: this.store.props.transaction.currency_guid,
      post_date: this.store.props.transaction.post_date,
      enter_date: this.store.props.transaction.enter_date,
      num: this.store.props.transaction.num,
      description: this.store.props.transaction.description,
      splits: this.store.props.splits,
    };

    this.validate();
  },

  methods: {
    async submit() {
      this.$router.back();
      if (this.store.props.submit_route === 'transactions.store') {
        await this.store.post(`${import.meta.env.VITE_ROOT}transactions/${this.$route.params.account_pk}/store`, this.form);
      } else {
        await this.store.post(`${import.meta.env.VITE_ROOT}transactions/${this.$route.params.account_pk}/update/${this.$route.params.transaction_pk}`, this.form);
      }
    },

    calculate(split) {
      split.account = this.store.props.accounts.find(account => account.guid === split.account_guid);

      // source split
      split.value_denom = split.account.commodity.fraction;
      split.quantity_denom = split.account.commodity.fraction;
      let newValue =
        split.debit * split.value_denom - split.credit * split.value_denom;
      if (newValue > 0) {
        split.debit = Math.abs(newValue / split.value_denom).toFixed(
          split.value_denom.toString().length - 1
        );
      } else {
        split.debit = null;
      }
      if (newValue < 0) {
        split.credit = Math.abs(newValue / split.value_denom).toFixed(
          split.value_denom.toString().length - 1
        );
      } else {
        split.credit = null;
      }
      split.value_num = newValue;
      if (
        split.account.account_type == "STOCK" ||
        split.account.account_type == "FUND"
      ) {
        split.quantity_num = split.shares * split.quantity_denom;
        split.price = Math.abs(
          newValue / split.value_denom / split.shares
        ).toFixed(split.value_denom.toString().length - 1);
      } else {
        split.quantity_num = split.value_num;
        split.price = null;
      }

      this.validate();
    },

    validate() {
      this.error_message = null;
      let result = 0;
      for (let index = 0; index < this.form.splits.length; index++) {
        if (this.form.splits[index].account_guid === null) {
          this.error_message = "Choose account for all the splits.";
        }
        result =
          result +
          parseFloat(
            this.form.splits[index].value_num /
            this.form.splits[index].value_denom
          );
      }
      if (isNaN(result)) {
        return;
      }
      if (result != 0) {
        this.error_message = "The sum of all splits must be zero";
      }
    },

    destroy(index) {
      this.error_message = null;
      this.form.splits.splice(index, 1);
      if (this.form.splits.length < 2) {
        this.error_message = "You must have at least two splits";
      } else {
        this.validate();
      }
    },

    async create() {
      this.error_message = null;
      if (this.$route.name === 'transactions.create') {
        await this.store.get(`${import.meta.env.VITE_ROOT}transactions/${this.$route.params.account_pk}/create`);
      } else {
        await this.store.get(`${import.meta.env.VITE_ROOT}transactions/${this.$route.params.account_pk}/edit/${this.$route.params.transaction_pk}`);
      }
      this.form.splits.push(this.store.props.new_split);
      if (this.form.splits.length < 2) {
        this.error_message = "You must have at least two splits";
      } else {
        this.validate();
      }
    },

    show_error_message(error_message) {
      this.error_message = error_message;
    },
  },
}

</script>

<template>
  <div class="overflow-x-auto" v-if="form.guid">
    <form @submit.prevent="submit" class="p-6">
      <div class="flex flex-wrap gap-2 pb-2">
        <div>
          <form-label for="post_date" value="Date" />
          <form-input id="post_date" type="date" v-model="form.post_date" required />
        </div>

        <div>
          <form-label for="num" value="Num" />
          <form-input id="num" type="text" v-model="form.num" />
        </div>

        <div>
          <form-label for="description" value="Description" />
          <form-input id="description" type="text" v-model="form.description" />
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-7 gap-2 pb-2" v-for="(split, index) in form.splits" :key="index">
        <form-input v-model="split.action" type="text" id="action" name="action" placeholder="Action..." />

        <form-input v-model="split.memo" type="text" id="memo" name="memo" placeholder="Memo..." />

        <select id="parent_guid" v-model="split.account_guid" @change="calculate(split)"
          class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
          <option v-for="prop_account in store.props.accounts" :key="prop_account.pk" :value="prop_account.guid">{{
              prop_account.name
          }}
          </option>
        </select>

        <select id="reconcile_state" v-model="split.reconcile_state"
          class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
          <option v-for="reconcile_state in store.props.reconcile_states" :key="reconcile_state"
            :value="reconcile_state">{{
                reconcile_state
            }}
          </option>
        </select>


        <TransactionsInput v-model="split.debit" :precision="split.precision" @show_error_message="show_error_message"
          id="debit" name="debit" @change="calculate(split)" :class="{ 'bg-gray-100': split.account === null }"
          :disabled="split.account === null" placeholder="Debit..." />

        <TransactionsInput v-model="split.credit" :precision="split.precision" @show_error_message="show_error_message"
          id="credit" name="credit" @change="calculate(split)" :class="{ 'bg-gray-100': split.account === null }"
          :disabled="split.account === null" placeholder="Credit..." />

        <TransactionsInput v-if="
          split.account !== null &&
          (split.account.account_type == 'STOCK' ||
            split.account.account_type == 'FUND')
        " v-model="split.shares" :precision="split.precision_shares" @show_error_message="show_error_message"
          id="shares" name="shares" @change="calculate(split)" placeholder="Shares..." />

        <TransactionsInput v-if="
          split.account !== null &&
          (split.account.account_type == 'STOCK' ||
            split.account.account_type == 'FUND')
        " v-model="split.price" :precision="split.precision_shares" @show_error_message="show_error_message" id="price"
          name="price" @change="calculate" placeholder="Price..." class="bg-gray-100" disabled />

        <div class="flex">
          <div class="text-red-500 hover:text-red-300 hover:cursor-pointer" @click="destroy(index)" title="Delete">
            <span class="material-icons-outlined">delete</span>
          </div>
        </div>
      </div>
      <div v-show="error_message">
        <p class="text-sm text-red-600">
          {{ error_message }}
        </p>
      </div>

      <div class="flex gap-2 items-center justify-end mt-4">
        <form-secondary-button @click="create" title="Create">
          <span class="material-icons-outlined">add</span>
        </form-secondary-button>
        <form-button :class="{ 'opacity-25': store.processing || error_message !== null }"
          :disabled="store.processing || error_message !== null" title="Save">
          <span class="material-icons-outlined"> save </span>
        </form-button>
      </div>
    </form>
  </div>
</template>
