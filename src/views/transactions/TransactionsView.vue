<script setup lang="ts">
import TransactionsView from '@/components/transactions/TransactionsView.vue'
</script>

<template>
  <FormLayout :title="`View Transaction - ${$route.params.transaction_pk}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <TransactionsView/>
        </div>
  </FormLayout>
</template>
