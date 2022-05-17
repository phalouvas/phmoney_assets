<script setup lang="ts">
import FormDialogModal from './FormDialogModal.vue'
</script>

<script lang="ts">

export default {
    emits: ['confirmed'],

    props: {
        title: {
            default: 'Confirm Password',
        },
        content: {
            default: 'For your security, please confirm your password to continue.',
        },
        button: {
            default: 'Confirm',
        }
    },

    data() {
        return {
            confirmingPassword: false,
            form: {
                password: '',
                error: '',
            },
            error: null,
        }
    },

    methods: {
        async startConfirmingPassword() {
            let response = await this.store.get(`${import.meta.env.VITE_ROOT}user/confirmed-password-status`);
            if (response.confirmed) {
                this.$emit('confirmed');
            } else {
                this.confirmingPassword = true;
                setTimeout(() => this.$refs.password.focus(), 250)
            }
        },

        async confirmPassword() {
            await this.store.post(`${import.meta.env.VITE_ROOT}user/confirm-password`, {
                password: this.form.password,
            });
            if (this.store.errors === null) {
                this.closeModal()
                this.$nextTick(() => this.$emit('confirmed'));
            } else {
                this.error = this.store.errors.response.data.errors.password[0];
                this.$refs.password.focus()
            }
        },

        closeModal() {
            this.confirmingPassword = false
            this.form.password = '';
            this.form.error = '';
        },
    }
}
</script>

<template>
    <span>
        <span @click="startConfirmingPassword">
            <slot />
        </span>

        <form-dialog-modal :show="confirmingPassword" @close="closeModal">
            <template #title>
                {{ title }}
            </template>

            <template #content>
                {{ content }}

                <div class="mt-4">
                    <form-input type="password" class="mt-1 block w-3/4" placeholder="Password" ref="password"
                        v-model="form.password" @keyup.enter="confirmPassword" />
                    <div v-show="error">
                        <p class="text-sm text-red-600">
                            {{ error }}
                        </p>
                    </div>
                </div>
            </template>

            <template #footer>
                <form-secondary-button @click="closeModal" title="Cancel">
                    <span class="material-icons-outlined"> cancel </span>
                </form-secondary-button>

                <form-button class="ml-2" @click="confirmPassword" :class="{ 'opacity-25': store.processing }"
                    :disabled="store.processing" :title="button">
                    <span class="material-icons-outlined"> check </span>
                </form-button>
            </template>
        </form-dialog-modal>
    </span>
</template>
