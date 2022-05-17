<script setup lang="ts">
import FormDialogModal from '@/common/form/FormDialogModal.vue';
</script>

<script lang="ts">
export default {
    data() {
        return {
            createApiTokenForm: {
                name: '',
                permissions: this.store.props.defaultPermissions,
            },

            updateApiTokenForm: {
                permissions: []
            },

            displayingToken: false,
            managingPermissionsFor: null,

            photoPreview: null,
        }
    },

    methods: {
        async createApiToken() {
            try {
                await this.store.axios.post(`${import.meta.env.VITE_ROOT}user/api-tokens`, this.createApiTokenForm);
            } catch (error) {

            }
            await this.store.get(`${import.meta.env.VITE_ROOT}user/api-tokens`);
            this.displayingToken = true
            this.createApiTokenForm = {
                name: '',
                permissions: this.store.props.defaultPermissions,
            };
        },

        manageApiTokenPermissions(token) {
            this.updateApiTokenForm.permissions = token.abilities

            this.managingPermissionsFor = token
        },

        async updateApiToken() {
            try {
                await this.store.axios.put(`${import.meta.env.VITE_ROOT}user/api-tokens/${this.managingPermissionsFor.id}`, this.updateApiTokenForm);
            } catch (error) {

            }
            await this.store.get(`${import.meta.env.VITE_ROOT}user/api-tokens`);
            this.managingPermissionsFor = null;
        },

        async deleteApiToken(token_id) {
            if (confirm("Are you sure you want to delete this item?")) {
                try {
                    await this.store.axios.delete(`${import.meta.env.VITE_ROOT}user/api-tokens/${token_id}`, {});
                } catch (error) {

                }
                await this.store.get(`${import.meta.env.VITE_ROOT}user/api-tokens`);
            }

        },
    },
}
</script>

<template>
    <div>
        <div class="p-6 bg-white shadow mt-4 prose max-w-none">
            <h3>Create API Token</h3>
            <p>API tokens allow third-party services to authenticate with our application on your behalf.</p>
            <form @submit.prevent="createApiToken">
                <!-- Token Name -->
                <div class="col-span-6 sm:col-span-4">
                    <form-label for="name" value="Name" />
                    <form-input id="name" type="text" class="mt-1 block w-full" v-model="createApiTokenForm.name"
                        required autofocus />
                </div>

                <!-- Token Permissions -->
                <div class="col-span-6"
                    v-if="store.props.availablePermissions && store.props.availablePermissions.length > 0">
                    <form-label for="permissions" value="Permissions" />

                    <div class="mt-2 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div v-for="permission in store.props.availablePermissions" :key="permission">
                            <label class="flex items-center">
                                <form-checkbox :value="permission" v-model:checked="createApiTokenForm.permissions" />
                                <span class="ml-2 text-sm text-gray-600">{{ permission }}</span>
                            </label>
                        </div>
                    </div>
                </div>

                <form-button class="mt-4" :class="{ 'opacity-25': store.processing }" :disabled="store.processing"
                    title="Create">
                    <span class="material-icons-outlined"> save_as </span>
                </form-button>
            </form>
        </div>

        <div class="p-6 bg-white shadow mt-4 prose max-w-none"
            v-if="store.props.tokens && store.props.tokens.length > 0">

            <!-- Manage API Tokens -->
            <div class="mt-10 sm:mt-0">
                <h3>Manage API Tokens</h3>
                <p>You may delete any of your existing tokens if they are no longer needed.</p>
                <div class="space-y-6">
                    <div class="flex items-center justify-between border-b" v-for="token in store.props.tokens"
                        :key="token.id">
                        <div>
                            {{ token.name }}
                        </div>

                        <div class="flex items-center">
                            <div class="text-sm text-gray-400" v-if="token.last_used_ago">
                                Last used {{ token.last_used_ago }}
                            </div>

                            <button class="cursor-pointer ml-6 text-sm text-gray-400 underline"
                                @click="manageApiTokenPermissions(token)"
                                v-if="store.props.availablePermissions.length > 0">
                                Permissions
                            </button>

                            <button class="cursor-pointer ml-6 text-sm text-red-500" @click="deleteApiToken(token.id)">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <!-- Token Value Modal -->
        <form-dialog-modal :show="displayingToken" @close="displayingToken = false">
            <template #title>
                API Token
            </template>

            <template #content>
                <div>
                    Please copy your new API token. For your security, it won't be shown again.
                </div>

                <div class="mt-4 bg-gray-100 px-4 py-2 rounded font-mono text-sm text-gray-500"
                    v-if="store.props.jetstream.flash.token">
                    {{ store.props.jetstream.flash.token }}
                </div>
            </template>

            <template #footer>
                <form-secondary-button @click="displayingToken = false">
                    Close
                </form-secondary-button>
            </template>
        </form-dialog-modal>

        <!-- API Token Permissions Modal -->
        <form-dialog-modal :show="managingPermissionsFor" @close="managingPermissionsFor = null">
            <template #title>
                API Token Permissions
            </template>

            <template #content>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div v-for="permission in store.props.availablePermissions" :key="permission">
                        <label class="flex items-center">
                            <form-checkbox :value="permission" v-model:checked="updateApiTokenForm.permissions" />
                            <span class="ml-2 text-sm text-gray-600">{{ permission }}</span>
                        </label>
                    </div>
                </div>
            </template>

            <template #footer>
                <form-secondary-button @click="managingPermissionsFor = null">
                    Cancel
                </form-secondary-button>

                <form-button class="ml-2" @click="updateApiToken" :class="{ 'opacity-25': store.processing }"
                    :disabled="store.processing">
                    Save
                </form-button>
            </template>
        </form-dialog-modal>
    </div>
</template>