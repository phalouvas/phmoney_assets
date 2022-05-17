<script setup lang="ts">
import InvoicesEdit from '@/components/business/invoices/InvoicesEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/invoices/edit/${this.$route.params.invoice_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Edit ${store.props.invoice ? store.getInvoiceType() + ' - ' + store.props.invoice.id : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <InvoicesEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
