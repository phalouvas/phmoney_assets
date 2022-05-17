<script lang="ts">
export default {
    data() {
        return {
            form: {
                name: '',
            },
        }
    },

    methods: {
        async submit() {
            await this.store.post(`${import.meta.env.VITE_ROOT}teams`, this.form);
            await this.store.loadUser();
            this.$router.push({name: "dashboard"});
        },
    },
}
</script>

<template>
    <div class="p-6">
        <h3>Team Details</h3>
        <p>Create a new team to collaborate with others on projects.</p>
        <form-label value="Team Owner" />
        <div class="flex items-center mt-2">
            <img class="object-cover w-12 h-12 rounded-full" :src="store.user.profile_photo_url" :alt="store.user.name">

            <div class="ml-4 leading-tight">
                <div>{{ store.user.name }}</div>
                <div class="text-sm text-gray-700">{{ store.user.email }}</div>
            </div>
        </div>
        <form @submit.prevent="submit">
            <div class="flex flex-wrap gap-2">
                <form-label for="name" value="Team Name" />
                <form-input id="name" type="text" class="block w-full mt-1" v-model="form.name" autofocus required />
            </div>

            <form-button class="mt-4" :class="{ 'opacity-25': store.processing }" :disabled="store.processing"
                title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </form>
    </div>
</template>