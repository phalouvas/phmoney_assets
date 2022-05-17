<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>

<script lang="ts">
export default {

    data() {
        return {
            form: {
                email: '',
                password: '',
                remember: false
            }
        }
    },

    methods: {
        async submit() {
            await this.store.post(`${import.meta.env.VITE_ROOT}login`, this.form);
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
                <form-label for="email" value="Email" />
                <form-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus
                    autocomplete="username" />
            </div>

            <div class="mt-4">
                <form-label for="password" value="Password" />
                <form-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" required
                    autocomplete="current-password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <form-checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="flex items-center justify-end mt-4">
                <RouterLink :to="{ name: 'auth.forgot_password' }" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Forgot your password?
                </RouterLink>

                <form-button class="ml-4" :class="{ 'opacity-25': store.processing }" :disabled="store.processing">
                    Log in
                </form-button>
            </div>

            <div class="flex items-center justify-begin mt-4">
                <RouterLink :to="{ name: 'auth.register' }" class="underline text-sm text-gray-600 hover:text-gray-900">
                    Don't have an account?
                </RouterLink>
            </div>
        </form>
    </AuthLayout>
</template>

