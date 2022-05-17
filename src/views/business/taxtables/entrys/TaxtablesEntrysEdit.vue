<script setup lang="ts">
import TaxtablesEntrysEdit from '@/components/business/taxtables/entrys/TaxtablesEntrysEdit.vue'
</script>

<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}business/taxtables/${this.$route.params.taxtable_pk}/taxtableentrys/edit/${this.$route.params.entry_pk}`);
    },
}
</script>

<template>
    <FormLayout :title="`Edit Tax Table Entry - ${store.props.taxtableentry ? store.props.taxtableentry.tax_account.name : '...'}`">
        <div class="bg-white shadow mt-4 prose max-w-none">
            <TaxtablesEntrysEdit v-if="!store.processing" />
        </div>
    </FormLayout>
</template>
