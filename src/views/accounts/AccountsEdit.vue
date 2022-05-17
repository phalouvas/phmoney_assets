<script setup lang="ts">
import AccountsEdit from '@/components/accounts/AccountsEdit.vue'
</script>

<script lang="ts">
export default {
  async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}accounts/edit/${this.$route.params.account_pk}`);
    },
}
</script>

<template>
  <FormLayout :title="`Edit Account - ${store.props.account.name}`" v-if="!store.processing">
    <div class="bg-white shadow mt-4 prose max-w-none">
            <AccountsEdit/>
        </div>
  </FormLayout>
</template>
