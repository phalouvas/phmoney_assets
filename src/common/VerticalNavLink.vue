
<script lang="ts">

export default ({
  props: ["href", "active", "icon"],

  computed: {
    classes() {
      return this.active
        ? "relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-sky-400"
        : "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-sky-200";
    },
  },
});
</script>

<template>
  <li :class="classes">
    <a :href="href">
      <div class="flex items-center">
        <span v-if="icon"
          class="material-icons-outlined"
        >
          {{ icon }}
        </span>
        <span class="ml-3"><slot /></span>
      </div>
    </a>
  </li>
</template>
