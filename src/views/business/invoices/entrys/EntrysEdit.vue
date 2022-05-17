<script setup lang="ts">
import EntrysEditInvoice from '@/components/business/invoices/entrys/EntrysEditInvoice.vue'
import EntrysEditBill from '@/components/business/invoices/entrys/EntrysEditBill.vue'
import EntrysEditVoucher from '@/components/business/invoices/entrys/EntrysEditVoucher.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/invoices/${this.$route.params.invoice_pk}/entrys/edit/${this.$route.params.entry_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Edit ${store.props.invoice ? store.getInvoiceType() + ' Entry - ' + $route.params.entry_pk : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <EntrysEditInvoice v-if="store.getInvoiceType() === 'Invoice' "/>
            <EntrysEditBill v-if="store.getInvoiceType() === 'Bill' "/>
            <EntrysEditVoucher v-if="store.getInvoiceType() === 'Voucher' "/>
        </div>
  </FormLayout>
</template>
