<script setup lang="ts">
import TransactionsIndex from '@/components/transactions/TransactionsIndex.vue'
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}transactions/${this.$route.params.account_pk}`);
  },
}
</script>

<template>
  <FormLayout :title="`Transactions - ${store.props.account ? store.props.account.name : '...'}`">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TransactionsIndex />
    </div>
  </FormLayout>
</template>
