<script setup lang="ts">
import AccountsTreeView from '@/components/accounts/AccountsTreeView.vue'
</script>
<script lang="ts">
export default {
  async created() {
    await this.store.get(`${import.meta.env.VITE_ROOT}accounts`);
  },
}
</script>
<template>
    <div class="md:p-6" v-if="!store.processing">
        <div class="grid grid-flow-col md:grid-cols-10 md:gap-4 border-b">
            <div class="min-w-full truncate md:col-span-6 font-bold">Account Name</div>
            <div class="hidden md:block font-bold">Type</div>
            <div class="hidden md:block font-bold">Description</div>
            <div class="font-bold">Balance</div>
            <div class="p-2">
                <form-button @click="$router.push({ name: 'accounts.create' })" title="Add New">
                    <span class="material-icons-outlined">add</span>
                </form-button>
            </div>
        </div>
        <AccountsTreeView v-for="account in store.props.accounts" :key="account.id" :account="account" :level="0" />
        <div class="grid grid-cols-2 pt-2 border-t font-semibold">
            <div>
                Net Assets:
                <amount-financial :amount="store.props.net_assets" :commodity="store.props.commodity" />
            </div>
            <div>
                Profits:
                <amount-financial :amount="store.props.profits" :commodity="store.props.commodity" />
            </div>
        </div>
    </div>
</template>