<script lang="ts">
export default {
    data() {
        return {
            form: {
                upload_file: null,
                delimiter: ',',
                enclosure: '"',
                date_format: "m/d/Y",
                currency_format: '.',
                setting: {
                    pk: 0,
                    name: "No Settings",
                    type: "import_transactions_csv",
                    params: {
                        delimiter: ',',
                        enclosure: '"',
                        date_format: "m/d/Y",
                        currency_format: '.',
                    },
                },
            },
            currency_formats: [".", ","],
            savingSettings: false,
        };
    },

    methods: {
        async submit() {
            let formData = new FormData();
            formData.append("upload_file", this.form.upload_file);
            formData.append("file_path", null);
            formData.append("items", null);
            formData.append("delimiter", this.form.delimiter);
            formData.append("enclosure", this.form.enclosure);
            formData.append("date_format", this.form.date_format);
            formData.append("currency_format", this.form.currency_format);
            formData.append("selected_columns", null);
            await this.store.post(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page3/update`, formData, {
                headers: {
                    "Content-Type": "multipart/form-data",
                }
            });
            this.$router.push({ name: 'import.transactions_from_csv.page3' })
        },

        loadSettings() {
            this.form.delimiter = this.form.setting.params.delimiter;
            this.form.enclosure = this.form.setting.params.enclosure;
            this.form.date_format = this.form.setting.params.date_format;
            this.form.currency_format = this.form.setting.params.currency_format;
        },
        async saveSettings() {
            if (this.form.setting.pk === 0) {
                await this.store.put(`${import.meta.env.VITE_ROOT}settings/store`, this.form);
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}settings/update/${this.form.setting.pk}`, this.form);
            }
            await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page2`);
            this.store.props.import_settings = this.store.props.import_settings;
            this.savingSettings = false
        },
        async deleteSettings() {
            if (this.form.setting.pk != 0) {
                if (confirm("Are you sure you want to delete these settings?")) {
                    await this.store.delete(`${import.meta.env.VITE_ROOT}settings/destroy/${this.form.setting.pk}`);
                    await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page2`);
                    this.form.setting = {
                        pk: 0,
                        name: "No Settings",
                        type: "import_transactions_csv",
                        params: {
                            delimiter: ',',
                            enclosure: '"',
                            date_format: "m/d/Y",
                            currency_format: '.',
                        }
                    };
                    this.store.props.import_settings = this.store.props.import_settings;
                }
            }
        },
    },
}
</script>

<template>
    <div class="p-6">
        <div class="flex gap-2">
            <form-label for="import_settings" value="Select Settings" />
            <select id="import_settings" v-model="form.setting" @change="loadSettings"
                class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                <option v-for="import_setting in store.props.import_settings" :key="import_setting.pk"
                    :value="import_setting">{{
                            import_setting.name
                    }}
                </option>
            </select>
            <form-button @click="savingSettings = true" title="Save Settings">
                <span class="material-icons-outlined"> save </span>
            </form-button>
            <form-secondary-button @click="deleteSettings" title="Delete Settings">
                <span class="material-icons-outlined"> delete </span>
            </form-secondary-button>
        </div>

        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="delimiter" value="Delimiter" />
                <form-input id="delimiter" v-model="form.delimiter" type="text" required />
            </div>
            <div>
                <form-label for="enclosure" value="Enclosure" />
                <form-input id="enclosure" v-model="form.enclosure" type="text" required />
            </div>
            <div>
                <form-label for="date_format" value="Date Format" />
                <form-input id="date_format" v-model="form.date_format" type="text" required />
            </div>
            <div>
                <form-label for="date_format" value="Numbers separator" />
                <select id="currency_format" v-model="form.currency_format"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="currency_format in currency_formats" :value="currency_format">
                        {{ currency_format }}
                    </option>
                </select>
            </div>
        </div>

        <form @submit.prevent="submit">

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

        <!-- Save Settings Modal -->
        <form-dialog-modal :show="savingSettings" @close="savingSettings = false" maxWidth="w-full">
            <template #title>Save Current Import Settings</template>

            <template #content>
                <div>
                    <form-label for="import_settings_name" value="Name" />
                    <form-input id="import_settings_name" v-model="form.setting.name" type="text" placeholder="Name..."
                        required />
                    <input type="hidden" v-model="form.setting.type" />
                </div>
                <div>
                    <form-label for="import_settings_delimiter" value="Delimiter" />
                    <form-input id="import_settings_delimiter" v-model="form.setting.params.delimiter" type="text"
                        required />
                </div>
                <div>
                    <form-label for="import_settings_enclosure" value="Enclosure" />
                    <form-input id="import_settings_enclosure" v-model="form.setting.params.enclosure" type="text"
                        required />
                </div>
                <div>
                    <form-label for="import_settings_date_format" value="Date Format" />
                    <form-input id="import_settings_date_format" v-model="form.setting.params.date_format" type="text"
                        required />
                </div>
                <div>
                    <form-label for="import_settings_date_format" value="Numbers separator" />
                    <select id="import_settings_currency_format" v-model="form.setting.params.currency_format"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="currency_format in currency_formats" :value="currency_format">
                            {{ currency_format }}
                        </option>
                    </select>
                </div>
            </template>

            <template #footer>
                <div class="flex gap-2">
                    <form-button @click="saveSettings"> Save </form-button>
                    <form-secondary-button @click="savingSettings = false">
                        Close
                    </form-secondary-button>
                </div>
            </template>
        </form-dialog-modal>
    </div>
</template>