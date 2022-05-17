<script setup lang="ts">
import evaluate from "evaluator.js";
</script>

<script lang="ts">
export default {
    props: {
        modelValue: {
            required: false,
        },
        precision: {
            type: Number,
            required: true,
        },
    },

    emits: ["update:modelValue", "show_error_message"],

    computed: {
        calculated: {
            get() {
                if (this.modelValue == null) {
                    return null;
                }
                try {
                    let result = evaluate(this.modelValue.toString());
                    return result.toFixed(this.precision);
                } catch (error) {
                    this.$emit("show_error_message", "Somethign is wrong...");
                    return this.modelValue;
                }
            },
            set(newValue) {
                this.$emit("show_error_message", null);
                var result;
                try {
                    result = evaluate(newValue);
                } catch (error) {
                    this.$emit("show_error_message", "Insert a numeric value, or a mathematical expression");
                }

                this.$emit("update:modelValue", result);
            },
        },
    },
}
</script>

<template>
  <form-input
    :value="calculated"
    @change="calculated = $event.target.value"
    type="text"
  />
</template>