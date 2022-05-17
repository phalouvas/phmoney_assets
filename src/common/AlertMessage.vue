
<script lang="ts">
export default {
  props: ["message", "authenticated"],
  emits: ["close"],

  data() {
    return {
      timeout: null,
    };
  },
  watch: {
    message(value) {
      if (value !== null) {
        setTimeout(() => {
          this.$emit('close');
        }, 3000);
      }
    },
  },

  computed: {
    message_formatted() {
      if (this.message === null) {
        return null;
      }
      let message = this.message;
      if (this.message.response) {
        message = this.message.response.statusText;
        if (this.message.response.data.message) {
          message = this.message.response.data.message;
          if (this.message.response.data.errors) {
              message = '';
            for (var k in this.message.response.data.errors) {
              if (this.message.response.data.errors.hasOwnProperty(k)) {
                message = message + this.message.response.data.errors[k] + ' ';
              }
            }
          }
        }
      }
      return message;
    },
  },

};
</script>

<template>
  <div v-show="message" class="fixed z-50 border border-red-300 bg-sky-100 shadow rounded-md p-4 my-4 w-full mx-auto">
    <div class="flex space-x-4">
      <div class="animate-pulse material-icons-outlined text-red-500">
        error
      </div>
      <div class="flex-1 space-y-6 py-1">
        {{ message_formatted }}
      </div>
      <div class="material-icons-outlined hover:cursor-pointer text-gray-500" @click="$emit('close')">
        close
      </div>
    </div>
  </div>
</template>
