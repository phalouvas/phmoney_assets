<script setup lang="ts">
import BilltermsEdit from '@/components/business/billterms/BilltermsEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/billterms/edit/${this.$route.params.billterm_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Edit Bill Term - ${store.props.billterm ? store.props.billterm.name : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <BilltermsEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
