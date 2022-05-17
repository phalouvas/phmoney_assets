<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page3`);
        this.form = {
            upload_file: this.store.props.upload_file,
            file_path: this.store.props.file_path,
            items: this.store.props.items,
            delimiter: this.store.props.delimiter,
            enclosure: this.store.props.enclosure,
            date_format: this.store.props.date_format,
            currency_format: this.store.props.currency_format,
            selected_columns: this.store.props.selected_columns,
            skip_errors: null,
            setting: {
                id: 0,
                name: "No Settings",
                type: "import_transactions_csv",
                params: {
                    delimiter: this.store.props.delimiter,
                    enclosure: this.store.props.enclosure,
                    date_format: this.store.props.date_format,
                    currency_format: this.store.props.currency_format,
                },
            },
        };
    },

    data() {
        return {
            form: {
                upload_file: null,
                file_path: null,
                items: null,
                delimiter: null,
                enclosure: null,
                date_format: null,
                currency_format: null,
                selected_columns: null,
                skip_errors: null,
                setting: {
                    id: 0,
                    name: "No Settings",
                    type: "import_transactions_csv",
                    params: {
                        delimiter: null,
                        enclosure: null,
                        date_format: null,
                        currency_format: null,
                    },
                },
            },
            currency_formats: [".", ","],
            source_account: null,
            destination_account: null,
            columns: ["Date", "Num", "Description", "Amount", "Shares"],
            savingSettings: false,
        };
    },

    methods: {
        next() {
            if (confirm("Are you sure you want to proceed to import selected items?")) {
                this.$router.push({ name: "import.transactions_from_csv.page4" });
            }
        },
        async submit() {
            await this.store.post(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page3/update`, this.form);
            await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page3`);
            this.reset();
        },
        reset() {
            this.form.items = this.store.props.items;
            this.form.selected_columns = this.store.props.selected_columns;
        },
        getTrValidClass(item) {
            if (item["is_valid"] === false && item["checked"] === true) {
                return "bg-red-500";
            }
            return "";
        },
        onCheckAll(event) {
            let checked = event.target.checked;
            for (let index = 0; index < this.form.items.length; index++) {
                this.form.items[index].checked = checked;
            }
            this.submit();
        },
        onSourceAccountChange() {
            for (let index = 0; index < this.form.items.length; index++) {
                this.form.items[index].source_account = this.source_account;
            }
            this.submit();
        },
        onDestinationAccountChange() {
            for (let index = 0; index < this.form.items.length; index++) {
                this.form.items[index].destination_account = this.destination_account;
            }
            this.submit();
        },
        loadSettings() {
            this.form.delimiter = this.form.setting.params.delimiter;
            this.form.enclosure = this.form.setting.params.enclosure;
            this.form.date_format = this.form.setting.params.date_format;
            this.form.currency_format = this.form.setting.params.currency_format;
            this.submit();
        },
        async saveSettings() {
            if (this.form.setting.id === 0) {
                await this.store.put(`${import.meta.env.VITE_ROOT}settings/store`, this.form);
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}settings/update/${this.form.setting.id}`, this.form);
            }
            await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page3`);
            this.store.props.import_settings = this.store.props.import_settings;
            this.savingSettings = false
        },
        async deleteSettings() {
            if (this.form.setting.id != 0) {
                if (confirm("Are you sure you want to delete these settings?")) {
                    await this.store.delete(`${import.meta.env.VITE_ROOT}settings/destroy/${this.form.setting.id}`);
                    await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page3`);
                    this.form.setting = {
                        id: 0,
                        name: "No Settings",
                        type: "import_transactions_csv",
                        params: {
                            delimiter: null,
                            enclosure: null,
                            date_format: null,
                            currency_format: null,
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
    <div class="p-6" v-if="store.props !== null">

        <form @submit.prevent="">
            <div class="flex gap-2">
                <form-label for="import_settings" value="Select Settings" />
                <select id="import_settings" v-model="form.setting" @change="loadSettings"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="import_setting in store.props.import_settings" :key="import_setting.id"
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
                    <form-input id="delimiter" v-model="form.delimiter" type="text" @change="submit" required />
                </div>
                <div>
                    <form-label for="enclosure" value="Enclosure" />
                    <form-input id="enclosure" v-model="form.enclosure" type="text" @change="submit" required />
                </div>
                <div>
                    <form-label for="date_format" value="Date Format" />
                    <form-input id="date_format" v-model="form.date_format" type="text" @change="submit" required />
                </div>
                <div>
                    <form-label for="date_format" value="Numbers separator" />
                    <select id="currency_format" v-model="form.currency_format" @change="submit"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option v-for="currency_format in currency_formats" :value="currency_format">
                            {{ currency_format }}
                        </option>
                    </select>
                </div>
            </div>

            <div v-if="!store.processing">
                Total Rows -
                {{ form.items.length }}
            </div>

            <div class="overflow-auto h-screen">
                <table class="table">
                    <thead>
                        <tr>
                            <th>
                                <form-checkbox :id="'index_check_all'" name="index_check_all" @input="onCheckAll" />
                            </th>
                            <th>
                                <select id="source_account_all" v-model="source_account" @change="onSourceAccountChange"
                                    class="max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                    <option v-for="account in store.props.accounts" :key="account.guid" :value="account">
                                        {{ account.name }}
                                    </option>
                                </select>
                            </th>
                            <th>
                                <div class="w-60">
                                    <select id="destination_account_all" v-model="destination_account"
                                        @change="onDestinationAccountChange"
                                        class="max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                        <option v-for="account in store.props.accounts" :key="account.guid" :value="account">
                                            {{ account.name }}
                                        </option>
                                    </select>
                                </div>
                            </th>
                            <th scope="col">#</th>
                            <td v-for="n in store.props.items[0].value.length - 1">
                                <select v-model="form.selected_columns[n - 1]" @change="submit()"
                                    class="max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                    <option v-for="column in columns" :value="column">
                                        {{ column }}
                                    </option>
                                </select>
                            </td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(item, index) in form.items" :class="getTrValidClass(item)">
                            <td>
                                <form-checkbox :id="'index_check' + index" name="index_check"
                                    v-model:checked="item.checked" @change="submit" />
                                <div class="bg-red-500" v-if="item.is_valid === false && item.checked === true">
                                    {{ item.validation_message }}
                                </div>
                            </td>
                            <td>
                                <select :id="`source_account${index}`" v-model="item.source_account" @change="submit"
                                    class="max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                    <option v-for="account in store.props.accounts" :key="account.guid" :value="account">
                                        {{ account.name }}
                                    </option>
                                </select>
                            </td>
                            <td>
                                <select :id="`destination_account${index}`" v-model="item.destination_account"
                                    @change="submit"
                                    class="max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                    <option v-for="account in store.props.accounts" :key="account.guid" :value="account">
                                        {{ account.name }}
                                    </option>
                                </select>
                            </td>
                            <td scope="row">{{ index }}</td>
                            <td class="p-2 border" v-for="value in item.value">
                                {{ value }}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="flex items-center justify-end mt-4 gap-2">
                <div v-show="store.props.can_proceed_message">
                    <p class="text-sm text-red-600">
                        {{ store.props.can_proceed_message }}
                    </p>
                </div>
                <form-secondary-button @click="$router.back()" title="Back">
                    <span class="material-icons-outlined">navigate_before</span>
                </form-secondary-button>
                <form-button :disabled="form.processing || !store.props.can_proceed" @click="next" title="Next">
                    <span class="material-icons-outlined">navigate_next</span>
                </form-button>
                <form-label for="skip_errors" value="Skip Invalid" />
                <form-checkbox id="skip_errors" name="skip_errors" v-model="form.skip_errors" @change="submit" />
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