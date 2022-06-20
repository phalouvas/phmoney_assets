<script setup lang="ts">
import ClosebookIndex from '@/components/tools/closebook/ClosebookIndex.vue'
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}tools/closebook`);
  },
};
</script>

<template>
  <FormLayout title="Close Book" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <ClosebookIndex v-if="store.props.accounts" />
        </div>
  </FormLayout>
</template>
