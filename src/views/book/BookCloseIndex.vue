<script setup lang="ts">
import BookCloseIndex from '@/components/book/BookCloseIndex.vue'
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}tools/closebook`);
  },
};
</script>

<template>
  <AppLayout title="Close Book" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <BookCloseIndex v-if="store.props.accounts" />
        </div>
  </AppLayout>
</template>
