<script setup lang="ts">
import CustomersEdit from '@/components/business/customers/CustomersEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/customers/create`);
    },
}
</script>

<template>
  <FormLayout title="Create Customer">
    <div class="bg-white shadow mt-4 prose max-w-none">
            <CustomersEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
