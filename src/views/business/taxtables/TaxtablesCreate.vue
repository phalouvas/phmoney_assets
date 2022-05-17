<script setup lang="ts">
import TaxtablesCreate from '@/components/business/taxtables/TaxtablesCreate.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/taxtables/create`);
    },
}
</script>

<template>
  <FormLayout title="Create Tax Table">
    <div class="bg-white shadow mt-4 prose max-w-none">
            <TaxtablesCreate v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
