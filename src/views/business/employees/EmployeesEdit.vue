<script setup lang="ts">
import EmployeesEdit from '@/components/business/employees/EmployeesEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/employees/edit/${this.$route.params.employee_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Edit Employee - ${store.props.employee ? store.props.employee.name : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <EmployeesEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
