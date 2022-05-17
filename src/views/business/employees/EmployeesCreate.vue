<script setup lang="ts">
import EmployeesEdit from '@/components/business/employees/EmployeesEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/employees/create`);
    },
}
</script>

<template>
  <FormLayout title="Create Employee">
    <div class="bg-white shadow mt-4 prose max-w-none">
            <EmployeesEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
