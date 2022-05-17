<script setup lang="ts">
import TeamsCreate from "@/components/teams/TeamsCreate.vue";
</script>

<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}user/profile`);
  },
};
</script>

<template>
  <FormLayout title="Create Team">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <TeamsCreate />
    </div>
  </FormLayout>
</template>
