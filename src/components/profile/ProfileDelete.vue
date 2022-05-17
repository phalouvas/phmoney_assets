<script setup lang="ts">
import FormDialogModal from '@/common/form/FormDialogModal.vue';
import FormDangerButton from '@/common/form/FormDangerButton.vue';
</script>

<script lang="ts">
export default {
    data() {
        return {
            confirmingUserDeletion: false,
            form: {
                password: '',
            },
            error: null,
        }
    },

    methods: {
        confirmUserDeletion() {
            this.confirmingUserDeletion = true;

            setTimeout(() => this.$refs.password.focus(), 250)
        },

        async deleteUser() {
            await this.store.delete(`${import.meta.env.VITE_ROOT}user`, this.form);
            if (this.store.errors === null) {
                this.$router.push({name: 'auth.login'});
            }
            else {
                this.error = this.store.errors.response.data.message;
                this.$refs.password.focus();
            }
        },

        closeModal() {
            this.confirmingUserDeletion = false

            this.form.reset()
        },
    },
}
</script>

<template>
    <div class="p-6">
        <h3>Delete Account</h3>
        <p>Permanently delete your account.</p>

        <div class="max-w-xl text-sm text-gray-600">
            Once your account is deleted, all of its resources and data will be permanently deleted. Before deleting
            your account, please download any data or information that you wish to retain.
        </div>

        <div class="mt-5">
            <form-danger-button @click="confirmUserDeletion">
                Delete Account
            </form-danger-button>
        </div>

        <!-- Delete Account Confirmation Modal -->
        <FormDialogModal :show="confirmingUserDeletion" @close="closeModal">
            <template #title>
                Delete Account
            </template>

            <template #content>
                Are you sure you want to delete your account? Once your account is deleted, all of its resources and
                data will be permanently deleted. Please enter your password to confirm you would like to permanently
                delete your account.

                <div class="mt-4">
                    <form-input type="password" class="mt-1 block w-3/4" placeholder="Password" ref="password"
                        v-model="form.password" @keyup.enter="deleteUser" />

                    <div v-show="error">
                        <p class="text-sm text-red-600">
                            {{ error }}
                        </p>
                    </div>
                </div>
            </template>

            <template #footer>
                <form-secondary-button @click="closeModal">
                    Cancel
                </form-secondary-button>

                <form-danger-button class="ml-2" @click="deleteUser" :class="{ 'opacity-25': store.processing }"
                    :disabled="store.processing">
                    Delete Account
                </form-danger-button>
            </template>
        </FormDialogModal>

    </div>
</template>