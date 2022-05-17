<script setup lang="ts">
import EmployeesIndex from '@/components/business/employees/EmployeesIndex.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/employees`);
    }
}
</script>

<template>
  <AppLayout title="Employees">
    <div class="bg-white shadow mt-4 prose max-w-none">
      <EmployeesIndex />
    </div>
  </AppLayout>
</template>
