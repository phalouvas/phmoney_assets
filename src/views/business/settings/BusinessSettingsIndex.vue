<script setup lang="ts">
import BusinessSettingsIndex from '@/components/business/settings/BusinessSettingsIndex.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}teams/${this.store.user.current_team_id}/options/show`);
    },
}
</script>

<template>
  <FormLayout title="Default Settings" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <BusinessSettingsIndex v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
