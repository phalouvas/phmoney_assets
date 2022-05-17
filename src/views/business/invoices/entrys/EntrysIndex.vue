<script setup lang="ts">
import EntrysIndex from "@/components/business/invoices/entrys/EntrysIndex.vue";
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(
      `${import.meta.env.VITE_ROOT}business/invoices/${this.$route.params.invoice_pk}/entrys`
    );
  },
};
</script>

<template>
  <FormLayout :title="`Entries ${store.props.invoice ? store.getInvoiceType() + ' - ' + store.props.invoice.id : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
      <EntrysIndex />
    </div>
  </FormLayout>
</template>
