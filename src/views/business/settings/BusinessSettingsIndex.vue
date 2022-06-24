<script setup lang="ts">
import BusinessSettingsIndex from '@/components/business/settings/BusinessSettingsIndex.vue'
import SqliteDatabaseIndex from '@/components/business/settings/SqliteDatabaseIndex.vue'
</script>

<template>
  <FormLayout title="Default Settings">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <BusinessSettingsIndex />
    </div>
    <div class="bg-white shadow mt-4 prose max-w-none">
      <SqliteDatabaseIndex />
    </div>
  </FormLayout>
</template>
