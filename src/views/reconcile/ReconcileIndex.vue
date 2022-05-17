<script setup lang="ts">
import ReconcileIndex from '@/components/reconcile/ReconcileIndex.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}reconcile/${this.$route.params.account_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Reconcile Account - ${store.props.account.name}`" v-if="!store.processing">
    <div class="bg-white shadow mt-4 prose max-w-none">
            <ReconcileIndex/>
        </div>
  </FormLayout>
</template>
