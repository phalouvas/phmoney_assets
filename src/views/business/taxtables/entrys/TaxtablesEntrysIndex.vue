<script setup lang="ts">
import TaxtablesEntrysIndex from '@/components/business/taxtables/entrys/TaxtablesEntrysIndex.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/taxtables/${this.$route.params.taxtable_pk}/taxtableentrys`);
    },
}
</script>

<template>
    <FormLayout :title="`Tax Table Entries - ${store.props.taxtable ? store.props.taxtable.name : '...'}`">
        <div class="bg-white shadow mt-4 prose max-w-none">
            <TaxtablesEntrysIndex v-if="!store.processing" />
        </div>
    </FormLayout>
</template>
