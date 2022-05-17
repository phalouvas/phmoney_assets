<script setup lang="ts">
import BilltermsEdit from '@/components/business/billterms/BilltermsEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/billterms/create`);
    },
}
</script>

<template>
  <FormLayout title="Create Bill Term">
    <div class="bg-white shadow mt-4 prose max-w-none">
            <BilltermsEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
