<script lang="ts">
import { onMounted, onUnmounted, ref } from "vue";

export default ({
  props: {
    align: {
      default: "right",
    },
    width: {
      default: "48",
    },
    contentClasses: {
      default: () => ["py-1", "bg-white"],
    },
    label: {
      default: null,
    },
    icon: {
      default: null,
    },
    active: {
      default: false,
    }
  },

  setup() {

    let open = ref(false);

    const closeOnEscape = (e) => {
      if (open.value && e.keyCode === 27) {
        open.value = false;
      }
    };

    onMounted(() => document.addEventListener("keydown", closeOnEscape));
    onUnmounted(() => document.removeEventListener("keydown", closeOnEscape));

    return {
      open,
    };
  },

  mounted() {
    this.open = this.active;
  },

  computed: {
    classes() {
      return "px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:cursor-pointer hover:bg-sky-200";
    },
  },
});
</script>

<template>
  <li>
    <div :class="classes" @click="open = !open">
      <div class="flex items-center">
        <span class="material-icons-outlined">{{ icon }}</span>
        <span class="ml-3">{{ label }}</span>
        <span v-if="open" class="material-icons-outlined">arrow_drop_down</span>
        <span v-else class="material-icons-outlined">arrow_right</span>
      </div>
    </div>
    <div v-show="open">
      <slot name="content"></slot>
    </div>
  </li>
</template>

