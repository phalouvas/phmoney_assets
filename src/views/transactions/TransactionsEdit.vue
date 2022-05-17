<script setup lang="ts">
import TransactionsEdit from '@/components/transactions/TransactionsEdit.vue'
</script>

<template>
  <FormLayout :title="`Edit Transaction - ${$route.params.transaction_pk}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <TransactionsEdit/>
        </div>
  </FormLayout>
</template>
