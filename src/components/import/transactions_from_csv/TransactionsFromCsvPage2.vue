<script lang="ts">
export default {
    data() {
        return {
            form: {
                upload_file: null,
            },
        };
    },

    methods: {
        async submit() {
            let formData = new FormData();
            formData.append("upload_file", this.form.upload_file);
            formData.append("file_path", null);
            formData.append("items", null);
            formData.append("delimiter", ",");
            formData.append("enclosure", '"');
            formData.append("date_format", "m/d/Y");
            formData.append("currency_format", ".");
            formData.append("selected_columns", null);
            await this.store.post(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page3/update`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            this.$router.push({ name: 'import.transactions_from_csv.page3' })
        },
    },
}
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <div>
            <form-label for="upload_file" value="Select a csv file" />
            <form-input id="upload_file" type="file" class="mt-1 block w-full"
                @input="form.upload_file = $event.target.files[0]" required autofocus accept=".csv" />
        </div>

        <div class="flex items-center justify-end mt-4 gap-2">
            <form-secondary-button @click="$router.back()" title="Back">
                <span class="material-icons-outlined">navigate_before</span>
            </form-secondary-button>
            <form-button :class="{ 'opacity-25': store.processing }"
                :disabled="store.processing || form.upload_file === null" title="Next">
                <span class="material-icons-outlined">navigate_next</span>
            </form-button>
        </div>
    </form>
</template>