<script setup lang="ts">
import FormConfirmsPassword from '@/common/form/FormConfirmsPassword.vue';
import FormDangerButton from '@/common/form/FormDangerButton.vue';
</script>

<script lang="ts">
export default {
    data() {
        return {
            enabling: false,
            disabling: false,

            qrCode: null,
            recoveryCodes: [],
        }
    },

    methods: {
        async enableTwoFactorAuthentication() {
            this.enabling = true
            await this.store.post(`${import.meta.env.VITE_ROOT}user/two-factor-authentication`, {});
            if (this.store.errors === null) {
                await this.showQrCode();
                await this.showRecoveryCodes();
            }
            this.enabling = false
            this.store.loadUser();
        },

        async showQrCode() {
            let response = await this.store.get(`${import.meta.env.VITE_ROOT}user/two-factor-qr-code`);
            this.qrCode = response.svg;
        },

        async showRecoveryCodes() {
            let response = await this.store.get(`${import.meta.env.VITE_ROOT}user/two-factor-recovery-codes`);
            this.recoveryCodes = response
        },

        async regenerateRecoveryCodes() {
            await this.store.post(`${import.meta.env.VITE_ROOT}user/two-factor-recovery-codes`);
            this.showRecoveryCodes()
        },

        async disableTwoFactorAuthentication() {
            this.disabling = true
            await this.store.delete(`${import.meta.env.VITE_ROOT}user/two-factor-authentication`);
            this.disabling = false
            this.store.loadUser();
        },
    },

    computed: {
        twoFactorEnabled() {
            return !this.enabling && this.store.user.two_factor_enabled
        }
    }
}
</script>

<template>
    <div class="p-6">
        <h3>Two Factor Authentication</h3>
        <p>Add additional security to your account using two factor authentication.</p>

        <h4 v-if="twoFactorEnabled">
            You have enabled two factor authentication.
        </h4>

        <p v-else>
            You have not enabled two factor authentication.
        </p>

        <div class="mt-3 max-w-xl text-sm text-gray-600">
            <p>
                When two factor authentication is enabled, you will be prompted for a secure, random token during
                authentication. You may retrieve this token from your phone's Google Authenticator application.
            </p>
        </div>

        <div v-if="twoFactorEnabled">
            <div v-if="qrCode">
                <div class="mt-4 max-w-xl text-sm text-gray-600">
                    <p class="font-semibold">
                        Two factor authentication is now enabled. Scan the following QR code using your phone's
                        authenticator application.
                    </p>
                </div>

                <div class="mt-4" v-html="qrCode">
                </div>
            </div>

            <div v-if="recoveryCodes.length > 0">
                <div class="mt-4 max-w-xl text-sm text-gray-600">
                    <p class="font-semibold">
                        Store these recovery codes in a secure password manager. They can be used to recover access to
                        your account if your two factor authentication device is lost.
                    </p>
                </div>

                <div class="grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg">
                    <div v-for="code in recoveryCodes" :key="code">
                        {{ code }}
                    </div>
                </div>
            </div>
        </div>

        <div class="mt-5">
            <div v-if="!twoFactorEnabled">
                <form-confirms-password @confirmed="enableTwoFactorAuthentication">
                    <form-button type="button" :class="{ 'opacity-25': enabling }" :disabled="enabling">
                        Enable
                    </form-button>
                </form-confirms-password>
            </div>

            <div v-else>
                <form-confirms-password @confirmed="regenerateRecoveryCodes">
                    <form-secondary-button class="mr-3" v-if="recoveryCodes.length > 0">
                        Regenerate Recovery Codes
                    </form-secondary-button>
                </form-confirms-password>

                <form-confirms-password @confirmed="showRecoveryCodes">
                    <form-secondary-button class="mr-3" v-if="recoveryCodes.length === 0">
                        Show Recovery Codes
                    </form-secondary-button>
                </form-confirms-password>

                <form-confirms-password @confirmed="disableTwoFactorAuthentication">
                    <FormDangerButton :class="{ 'opacity-25': disabling }" :disabled="disabling">
                        Disable
                    </FormDangerButton>
                </form-confirms-password>
            </div>
        </div>
    </div>
</template>