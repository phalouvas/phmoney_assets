<script lang="ts">
export default {
    data() {
        return {
            form: {
                current_password: '',
                password: '',
                password_confirmation: '',
            },
        }
    },

    methods: {
        async submit() {
            await this.store.put(`${import.meta.env.VITE_ROOT}user/password`, this.form);
            if (this.store.errors === null) {
                this.store.errors = "Saved Successfully!!!"
                await this.store.loadUser();
            }
        },
    },
}
</script>

<template>
    <div class="p-6">
        <h3>Update Password</h3>
        <p>Ensure your account is using a long, random password to stay secure.</p>
        <form @submit.prevent="submit">
        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="current_password" value="Current Password" />
                <form-input id="current_password" type="password" class="mt-1 block w-full"
                    v-model="form.current_password" ref="current_password" autocomplete="current-password" required />
            </div>

            <div>
                <form-label for="password" value="New Password" />
                <form-input id="password" type="password" class="mt-1 block w-full" v-model="form.password"
                    ref="password" autocomplete="new-password" required />
            </div>

            <div>
                <form-label for="password_confirmation" value="Confirm Password" />
                <form-input id="password_confirmation" type="password" class="mt-1 block w-full"
                    v-model="form.password_confirmation" autocomplete="new-password" required />
            </div>
        </div>

        <form-button class="mt-4" :class="{ 'opacity-25': store.processing }" :disabled="store.processing" title="Save">
            <span class="material-icons-outlined"> save </span>
        </form-button>
    </form>
    </div>    
</template>