<script lang="ts">
export default {
    data() {
        return {
            form: {
                sqlite_file: null,
            },
            download_url: `${import.meta.env.VITE_ROOT}teams/${this.store.user.current_team_id}/database/download`,
        };
    },

    methods: {
        async submit() {
            if (confirm("Are you sure you want to upload this file? All existing data will be deleted.")) {
                let formData = new FormData();
                formData.append("sqlite_file", this.form.sqlite_file);
                await this.store.post(`${import.meta.env.VITE_ROOT}teams/${this.store.user.current_team_id}/database/upload`, formData, {
                    headers: {
                        "Content-Type": "multipart/form-data",
                    }
                });
                if (this.store.errors === null) {
                    this.store.errors = "File imported succesfully";
                }
            }
        },
    },
}
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <p>
            Load or save the whole book data as sqlite file. The sqlite file is fully compatible with <a
                href="https://gnucash.org/" target="_blank">GnuCash</a>
        </p>

        <p class="text-red-500">
            Warning: This operation will overwite your database and existing data will be forever deleted.
        </p>

        <div>
            <form-label for="sqlite_file" value="Select a Sqlite file" />
            <form-input id="sqlite_file" type="file" class="mt-1 block w-full"
                @input="form.sqlite_file = $event.target.files[0]" required autofocus />
        </div>

        <div class="flex items-center justify-end mt-4 gap-2">
            <form-secondary-button :class="{ 'opacity-25': store.processing }" :disabled="store.processing"
                title="Download">
                <a :href="download_url">
                    <span class="material-icons-outlined"> download </span>
                </a>
            </form-secondary-button>
            <form-button :class="{ 'opacity-25': store.processing }"
                :disabled="store.processing || form.sqlite_file === null" title="Uploads">
                <span class="material-icons-outlined">upload</span>
            </form-button>
        </div>
    </form>
</template>