<script setup lang="ts">
import TransactionsInput from '@/components/transactions/TransactionsInput.vue'
</script>

<script lang="ts">
export default {

  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}transactions/${this.$route.params.account_pk}/view/${this.$route.params.transaction_pk}`);
  },

}

</script>

<template>
  <div class="overflow-x-auto p-6" v-if="store.props.transaction">

    <table class="table-fixed">
      <thead>
        <tr>
          <th>Date</th>
          <th>Num</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{{ store.props.transaction.post_date }}</td>
          <td>{{ store.props.transaction.num }}</td>
          <td>{{ store.props.transaction.description }}</td>
        </tr>
      </tbody>
      <tbody>

      </tbody>
    </table>

    <table class="table-fixed">
      <thead>
        <tr>
          <th>Account</th>
          <th>Action</th>
          <th>Memo</th>
          <th>Reconcile State</th>
          <th>Debit</th>
          <th>Credit</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="split in store.props.splits" :key="split.pk" :split="split" class="hover:bg-sky-50">
          <td>{{ split.account.name }}</td>
          <td>{{ split.action }}</td>
          <td>{{ split.memo }}</td>
          <td>{{ split.reconcile_state }}</td>
          <td>
            <amount-financial :amount="split.debit" :commodity="store.props.account.commodity" />
          </td>
          <td>
            <amount-financial :amount="split.credit" :commodity="store.props.account.commodity" />
          </td>
        </tr>
      </tbody>
      <tfoot>
        <tr>
          <td colspan="6">
            <form-button
              @click="$router.push({ name: 'transactions.edit', params: { account_pk: store.props.account.pk, transaction_pk: store.props.transaction.pk } })"
              title="Edit">
              <span class="material-icons-outlined">edit</span>
            </form-button>
          </td>
        </tr>
      </tfoot>
    </table>

  </div>
</template>
