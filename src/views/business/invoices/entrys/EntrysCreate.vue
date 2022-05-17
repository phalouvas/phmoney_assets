<script setup lang="ts">
import EntrysEditInvoice from '@/components/business/invoices/entrys/EntrysEditInvoice.vue'
import EntrysEditBill from '@/components/business/invoices/entrys/EntrysEditBill.vue'
import EntrysEditVoucher from '@/components/business/invoices/entrys/EntrysEditVoucher.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/invoices/${this.$route.params.invoice_pk}/entrys/create`);
    },
}
</script>

<template>
  <FormLayout :title="`Create ${store.props.invoice ? store.getInvoiceType() + ' Entry' : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <EntrysEditInvoice v-if="store.getInvoiceType() === 'Invoice' "/>
            <EntrysEditBill v-if="store.getInvoiceType() === 'Bill' "/>
            <EntrysEditVoucher v-if="store.getInvoiceType() === 'Voucher' "/>
        </div>
  </FormLayout>
</template>
