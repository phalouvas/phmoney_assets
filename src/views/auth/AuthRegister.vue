<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>

<script lang="ts">
export default {

    data() {
        return {
            form: {
                name: "",
                email: "",
                password: "",
                password_confirmation: "",
                terms: false,
                captcha_token: "",
            }
        }
    },

    methods: {
        async submit() {
            await this.store.post(`${import.meta.env.VITE_ROOT}register`, this.form);
            console.log(this.store.errors);
            if (this.store.errors === null) {
                this.$router.push({ name: 'dashboard' })
            }
        }
    }
}
</script>

<template>
    <AuthLayout>
        <form @submit.prevent="submit">
      <div>
        <form-label for="name" value="Name" />
        <form-input
          id="name"
          type="text"
          class="mt-1 block w-full"
          v-model="form.name"
          required
          autofocus
          autocomplete="name"
        />
      </div>

      <div class="mt-4">
        <form-label for="email" value="Email" />
        <form-input
          id="email"
          type="email"
          class="mt-1 block w-full"
          v-model="form.email"
          required
          autocomplete="username"
        />
      </div>

      <div class="mt-4">
        <form-label for="password" value="Password" />
        <form-input
          id="password"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password"
          required
          autocomplete="new-password"
        />
      </div>

      <div class="mt-4">
        <form-label for="password_confirmation" value="Confirm Password" />
        <form-input
          id="password_confirmation"
          type="password"
          class="mt-1 block w-full"
          v-model="form.password_confirmation"
          required
          autocomplete="new-password"
        />
      </div>

      <div
        class="mt-4">
        <form-label for="terms">
          <div class="flex items-center">
            <form-checkbox
              name="terms"
              id="terms"
              v-model:checked="form.terms"
            />

            <div class="ml-2">
              I agree to the
              <a
                target="_blank"
                href="route('terms.show')"
                class="underline text-sm text-gray-600 hover:text-gray-900"
                >Terms of Service</a
              >
              and
              <a
                target="_blank"
                href="route('policy.show')"
                class="underline text-sm text-gray-600 hover:text-gray-900"
                >Privacy Policy</a
              >
            </div>
          </div>
        </form-label>
      </div>

      <div class="flex items-center justify-end mt-4">
        <RouterLink
          href="login"
          class="underline text-sm text-gray-600 hover:text-gray-900"
        >
          Already registered?
        </RouterLink>

        <form-button
          class="ml-4"
          :class="{ 'opacity-25': store.processing }"
          :disabled="store.processing"
        >
          Register
        </form-button>
      </div>
    </form>
    </AuthLayout>
</template>