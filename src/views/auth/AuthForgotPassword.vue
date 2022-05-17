<script setup lang="ts">
import AuthLayout from '@/layouts/AuthLayout.vue'
</script>

<script lang="ts">
export default {
    data() {
        return {
            form: {
                email: ''
            }
        }
    },

    methods: {
        async submit() {
            await this.store.post(`${import.meta.env.VITE_ROOT}forgot-password`, this.form);
        }
    }
}
</script>

<template>
    <AuthLayout>
        <div class="mb-4 text-sm text-gray-600">
            Forgot your password? No problem. Just let us know your email address and we will email you a password reset
            link that will allow you to choose a new one.
        </div>

        <div v-if="store.props.message" class="mb-4 font-medium text-sm text-sky-600">
            {{ store.props.message }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <form-label for="email" value="Email" />
                <form-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required autofocus />
            </div>

            <div class="flex items-center justify-end mt-4">
                <form-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Email Password Reset Link
                </form-button>
            </div>
        </form>
    </AuthLayout>
</template>