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
  <button :type="type" class=" inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-sky-600 hover:bg-sky-500 active:bg-sky-700 focus:outline-none focus:border-sky-700 focus:ring focus:ring-sky-100 disabled:opacity-50 transition
    ">
    <slot></slot>
  </button>
</template>
