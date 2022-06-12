<script setup lang="ts">
import TransactionsIndex from '@/components/transactions/TransactionsIndex.vue'
</script>

<template>
  <FormLayout :title="`Transactions - ${store.props.account ? store.props.account.name : '...'}`">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TransactionsIndex />
    </div>
  </FormLayout>
</template>
