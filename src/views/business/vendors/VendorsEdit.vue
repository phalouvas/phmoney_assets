<script setup lang="ts">
import VendorsEdit from '@/components/business/vendors/VendorsEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/vendors/edit/${this.$route.params.vendor_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Edit Vendor - ${store.props.vendor ? store.props.vendor.name : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <VendorsEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
