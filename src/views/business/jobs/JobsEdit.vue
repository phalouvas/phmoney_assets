<script setup lang="ts">
import JobsEdit from '@/components/business/jobs/JobsEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/jobs/edit/${this.$route.params.job_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Edit Job - ${store.props.job ? store.props.job.name : '...'}`" >
    <div class="bg-white shadow mt-4 prose max-w-none">
            <JobsEdit v-if="!store.processing"/>
        </div>
  </FormLayout>
</template>
