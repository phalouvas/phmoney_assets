<script setup lang="ts">
import TaxtablesEntrysEdit from '@/components/business/taxtables/entrys/TaxtablesEntrysEdit.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/taxtables/${this.$route.params.taxtable_pk}/taxtableentrys/create`);
    },
}
</script>

<template>
    <FormLayout :title="`Create Tax Table Entry`">
        <div class="bg-white shadow mt-4 prose max-w-none">
            <TaxtablesEntrysEdit v-if="!store.processing" />
        </div>
    </FormLayout>
</template>
