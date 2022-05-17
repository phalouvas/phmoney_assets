<script setup lang="ts">
import InvoicesPost from '@/components/business/invoices/InvoicesPost.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/invoices/post/${this.$route.params.invoice_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Post ${store.props.invoice ? store.getInvoiceType() + ' - ' + store.props.invoice.id : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <InvoicesPost v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
