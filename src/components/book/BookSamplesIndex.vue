<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}teams/${this.store.user.current_team_id}/samples`);
        this.props = { ...this.store.props };
    },

    data() {
        return {
            props: [],
            form: {
                sample: null,
            },
        };
    },

    methods: {
        async submit() {
            if (confirm("Are you sure you want to load this sample? All existing data will be deleted.")) {
                await this.store.post(`${import.meta.env.VITE_ROOT}teams/${this.store.user.current_team_id}/samples/load`, this.form);
                if (this.store.errors === null) {
                    this.store.errors = "Sample imported succesfully";
                }
            }
        },
    },
}
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <p class="text-red-500">
            Warning: This operation will overwite your database and existing data will be forever deleted.
        </p>

        <div>
            <form-label for="sample" value="Select a template" />
            <select id="sample" required v-model="form.sample"
                class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                <option v-for="sample in props.samples" :value="sample">{{
                        sample
                }}
                </option>
            </select>
        </div>

        <div class="flex items-center justify-end mt-4 gap-2">
            <form-button :class="{ 'opacity-25': store.processing }"
                :disabled="store.processing || form.sample === null" title="Submit">
                <span class="material-icons-outlined">save</span>
            </form-button>
        </div>
    </form>
</template>