<script setup lang="ts">
import VendorsEdit from '@/components/business/vendors/VendorsEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/vendors/create`);
    },
}
</script>

<template>
  <FormLayout title="Create Vendor">
    <div class="bg-white shadow mt-4 prose max-w-none">
            <VendorsEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
