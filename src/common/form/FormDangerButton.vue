<script lang="ts">
export default {
  props: {
    type: {
      type: String,
      default: "submit",
    },
  },
};
</script>

<template>
  <button :type="type" class=" inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-red-600 hover:bg-red-500 active:bg-red-700 focus:outline-none focus:border-red-700 focus:ring focus:ring-red-100 disabled:opacity-50 transition
    ">
    <slot></slot>
  </button>
</template>
