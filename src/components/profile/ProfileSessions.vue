<script setup lang="ts">
import FormDialogModal from '@/common/form/FormDialogModal.vue';
</script>

<script lang="ts">
export default {
    data() {
        return {
            confirmingLogout: false,
            form: {
                password: "",
            },
            error: null,
        };
    },
    methods: {
        confirmLogout() {
            this.confirmingLogout = true;
            setTimeout(() => this.$refs.password.focus(), 250);
        },
        async logoutOtherBrowserSessions() {
            await this.store.delete(`${import.meta.env.VITE_ROOT}user/other-browser-sessions`, this.form);
            if (this.store.errors === null) {
                await this.store.loadUser();
                this.closeModal();
            }
            else {
                this.error = this.store.errors.response.data.message;
                this.$refs.password.focus();
            }
        },
        closeModal() {
            this.confirmingLogout = false;
            this.form.password = "";
        },
    },
}
</script>

<template>
    <div class="p-6">
        <h3>Browser Sessions</h3>
        <p>Manage and log out your active sessions on other browsers and devices.</p>

        <div class="max-w-xl text-sm text-gray-600">
            If necessary, you may log out of all of your other browser sessions across all of your devices. Some of your
            recent sessions are listed below; however, this list may not be exhaustive. If you feel your account has
            been compromised, you should also update your password.
        </div>

        <!-- Other Browser Sessions -->
        <div class="mt-5 space-y-6" v-if="store.props.sessions">
            <div class="flex items-center" v-for="(session, i) in store.props.sessions" :key="i">
                <div>
                    <svg fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24"
                        stroke="currentColor" class="w-8 h-8 text-gray-500" v-if="session.agent.is_desktop">
                        <path
                            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z">
                        </path>
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                        fill="none" stroke-linecap="round" stroke-linejoin="round" class="w-8 h-8 text-gray-500" v-else>
                        <path d="M0 0h24v24H0z" stroke="none"></path>
                        <rect x="7" y="4" width="10" height="16" rx="1"></rect>
                        <path d="M11 5h2M12 17v.01"></path>
                    </svg>
                </div>

                <div class="ml-3">
                    <div class="text-sm text-gray-600">
                        {{ session.agent.platform }} - {{ session.agent.browser }}
                    </div>

                    <div>
                        <div class="text-xs text-gray-500">
                            {{ session.ip_address }},

                            <span class="text-sky-500 font-semibold" v-if="session.is_current_device">This device</span>
                            <span v-else>Last active {{ session.last_active }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="flex items-center mt-5">
            <form-button @click="confirmLogout">
                Log Out Other Browser Sessions
            </form-button>
        </div>

        <!-- Log Out Other Devices Confirmation Modal -->
        <FormDialogModal :show="confirmingLogout" @close="closeModal">
            <template #title>
                Log Out Other Browser Sessions
            </template>

            <template #content>
                Please enter your password to confirm you would like to log out of your other browser sessions across
                all of your devices.

                <div class="mt-4">
                    <form-input type="password" class="mt-1 block w-3/4" placeholder="Password" ref="password"
                        v-model="form.password" @keyup.enter="logoutOtherBrowserSessions" />

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

                <form-button class="ml-2" @click="logoutOtherBrowserSessions" :class="{ 'opacity-25': store.processing }"
                    :disabled="store.processing">
                    Log Out Other Browser Sessions
                </form-button>
            </template>
        </FormDialogModal>
    </div>
</template>