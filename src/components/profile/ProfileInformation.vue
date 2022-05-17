<script lang="ts">
export default {
    data() {
        return {
            form: {
                _method: 'PUT',
                name: this.store.user.name,
                email: this.store.user.email,
                photo: null,
            },

            photoPreview: null,
        }
    },

    methods: {
        async submit() {
            await this.store.post(`${import.meta.env.VITE_ROOT}user/profile-information`, this.form);
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
        <h3>Profile Information</h3>
        <p>Update your account's profile information and email address.</p>
        <form @submit.prevent="submit">
            <div class="flex flex-wrap gap-2">
                <!-- Name -->
                <div>
                    <form-label for="name" value="Name" />
                    <form-input id="name" type="text" class="mt-1 block w-full" v-model="form.name"
                        autocomplete="name" required />
                </div>

                <!-- Email -->
                <div>
                    <form-label for="email" value="Email" />
                    <form-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" required />
                </div>
            </div>

            <form-button class="mt-4" :class="{ 'opacity-25': store.processing }" :disabled="store.processing" title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </form>
    </div>
</template>