<script lang="ts">
export default {
    props: ['value']
};
</script>

<template>
    <label class="block font-medium text-sm text-gray-700">
        <span v-if="value">{{ value }}</span>
        <span v-else>
            <slot></slot>
        </span>
    </label>
</template>
