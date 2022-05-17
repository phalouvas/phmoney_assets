<script lang="ts">

export default {
  name: "TreeView",

  data: function () {
    return {
      isOpen: false,
    };
  },

  computed: {
    new_level: function () {
      return this.level + 2;
    },
    indent: function () {
      return "ml-" + this.level;
    },
  },

  props: {
    account: Object,
    level: Number,
  },

  methods: {
    hasChilds: function (account) {
      if (
        account.childs_tree_with_sum &&
        account.childs_tree_with_sum.length > 0
      ) {
        return true;
      } else {
        return false;
      }
    },
    toggle: function () {
      this.isOpen = !this.isOpen;
    },
    destroy(account) {
      if (confirm("Are you sure you want to delete this account? All transactions will also be deleted.")) {
        this.store.delete(`${import.meta.env.VITE_ROOT}accounts/destroy/${account.pk}`, true);
      }      
    },
  },
};
</script>

<template>
  <div class="overflow-auto">
    <div class="grid grid-flow-col md:grid-cols-10 md:gap-4 border-b hover:bg-sky-50">
      <div :class="indent" class="min-w-full truncate md:col-span-6">
        <button
          v-if="hasChilds(account)"
          class="hover:text-gray-500"
          @click="toggle"
        >
          <span v-if="isOpen" class="material-icons-outlined">
            arrow_drop_down
          </span>
          <span v-if="!isOpen" class="material-icons-outlined">
            arrow_right
          </span>
          {{ account.name }}
        </button>
        <span v-else class="ml-7">{{ account.name }}</span>
      </div>
      <div class="hidden md:block">{{ account.account_type }}</div>
      <div class="hidden md:block truncate" :title="account.description">{{ account.description }}</div>
      <amount-financial
        :amount="account.amount_total"
        :commodity="account.commodity"
      />
      <div class="flex">
        <RouterLink
          class="text-sky-500 hover:text-sky-300"
          :to="{name: 'accounts.edit', params: {account_pk: account.pk}}"
          title="Edit"
          ><span class="material-icons-outlined">edit</span>
        </RouterLink>
        <RouterLink
          v-if="!account.placeholder"
          class="text-yellow-500 hover:text-yellow-300"
          :to="{name: 'reconcile.index', params: {account_pk: account.pk}}"
          title="Reconcile"
          ><span class="material-icons-outlined">confirmation_number</span>
        </RouterLink>
        <RouterLink
          v-if="!account.placeholder"
          class="text-gray-500 hover:text-gray-300"
          :to="{name: 'transactions.index', params: {account_pk: account.pk}}"
          title="Transactions"
          ><span class="material-icons-outlined">view_list</span>
        </RouterLink>
        <div
        v-if="account.childs_tree_with_sum.length === 0"
          class="text-red-500 hover:text-red-300 hover:cursor-pointer"
          @click="destroy(account)"
          title="Delete"
        >
          <span class="material-icons-outlined">delete</span>
        </div>
      </div>
    </div>
    <transition-group name="list">
      <tree-view
        v-if="isOpen && hasChilds(account)"
        v-for="child in account.childs_tree_with_sum"
        :key="child"
        :account="child"
        :level="new_level"
      ></tree-view>
    </transition-group>
  </div>
</template>
