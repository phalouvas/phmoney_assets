<script lang="ts">
export default {
    props: ['team', 'permissions'],

    data() {
        return {
            form: {
                name: this.team.name,
            },
        }
    },

    methods: {
        async submit() {
            try {
                await this.store.axios.put(`${import.meta.env.VITE_ROOT}teams/${this.$route.params.team_pk}`, this.form);
            } catch (error) {
                
            }
            await this.store.get(`${import.meta.env.VITE_ROOT}teams/${this.$route.params.team_pk}`);
        },
    },
}
</script>

<template>
    <div class="p-6">
        <h3>Team Name</h3>
        <p>The team's name and owner information.</p>
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
                <form-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" required
                    :disabled="!permissions.canUpdateTeam" :class="{ 'opacity-50': !permissions.canUpdateTeam }" />
            </div>

            <form-button class="mt-4" :class="{ 'opacity-25': store.processing }" :disabled="store.processing"
                title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </form>
    </div>
</template>