<script setup lang="ts">
import TaxtablesEdit from '@/components/business/taxtables/TaxtablesEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/taxtables/edit/${this.$route.params.taxtable_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Edit Tax Table - ${store.props.taxtable ? store.props.taxtable.name : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <TaxtablesEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
