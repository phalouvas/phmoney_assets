<script lang="ts">
export default {
    async created() {
        await this.reload();
    },

    props: {
        title: String,
        extra_params: Object,
        show_accounts: {
            type: Boolean,
            default: true,
        },
        show_date_start: {
            type: Boolean,
            default: true,
        },
        show_date_end: {
            type: Boolean,
            default: true,
        },
        show_export_csv: {
            type: Boolean,
            default: false,
        },
    },

    data() {
        return {
            show_settings: false,
            print: false,
        };
    },

    methods: {
        async reload() {
            let path = this.$route.path.replace(/^\/+/, "");

            if (this.store.report_settings.type !== path) {
                await this.store.get(`${import.meta.env.VITE_ROOT}${path}`, { 'export_csv': false });
                let common_params = {
                    accounts: null,
                    date_start: this.store.user.options.accounting_period.date_start,
                    date_end: this.store.user.options.accounting_period.date_end,
                    title: null,
                    company: null,
                    currency: this.store.props.currency,
                };
                var combined_params = { ...common_params, ...this.extra_params };
                this.store.report_settings = {
                    id: null,
                    team_id: this.store.user.current_team_id,
                    name: null,
                    type: this.store.props.type,
                    params: combined_params,
                    created_at: null,
                    updated_at: null,
                };
            } else {
                let params = { ...this.store.report_settings.params };
                if (params.accounts) {
                    params.accounts = params.accounts.join();
                }
                await this.store.get(`${import.meta.env.VITE_ROOT}${path}`, params);
            }
        },
        async submit() {
            if (this.store.report_settings.id == null) {
                await this.store.put(`${import.meta.env.VITE_ROOT}settings/store`, {
                    setting: this.store.report_settings,
                });
                this.reload();
            } else {
                let report_settings = this.store.report_settings;
                await this.store.post(
                    `${import.meta.env.VITE_ROOT}settings/update/${this.store.report_settings.id
                    }`,
                    { setting: this.store.report_settings }
                );
                this.store.report_settings = report_settings;
                this.reload();
            }
        },
        async deleteSettings() {
            if (confirm("Are you sure you want to delete this item?")) {
                await this.store.delete(
                    `${import.meta.env.VITE_ROOT}settings/destroy/${this.store.report_settings.id
                    }`,
                    null
                );
                this.store.report_settings.id = null;
                this.reload();
            }
        },
        close() {
            this.show_settings = false;
            this.reload();
        },
    },
};
</script>

<template>
    <div class="bg-sky-50 flex flex-col min-h-screen">
        <div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
            <main v-if="show_settings" role="main" class="w-full h-full flex-grow p-2 sm:p-8 overflow-auto">
                <form @submit.prevent="submit" class="p-6" v-if="!store.processing">
                    <div class="bg-white p-6 shadow text-base font-bold text-sky-600">
                        <div class="flex justify-between">
                            <h2>{{ title }}</h2>
                            <div class="flex flex-wrap gap-2">
                                <form-input id="name" v-model="store.report_settings.name" type="text"
                                    placeholder="Settings Name..." required />
                                <form-label for="setting" value="Select Settings" />
                                <select id="import_settings" v-model="store.report_settings"
                                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                    <option v-for="setting in store.props.settings" :key="setting.id" :value="setting">
                                        {{ setting.name }}
                                    </option>
                                </select>
                                <form-button :class="{ 'opacity-25': store.processing }" :disabled="store.processing"
                                    title="Save">
                                    <span class="material-icons-outlined"> save </span>
                                </form-button>
                                <form-secondary-button @click="deleteSettings" title="Delete Settings"
                                    :disabled="store.report_settings.id === null">
                                    <span class="material-icons-outlined"> delete </span>
                                </form-secondary-button>
                                <form-secondary-button @click="close" title="Close">
                                    <span class="material-icons-outlined">close</span>
                                </form-secondary-button>
                            </div>
                        </div>
                    </div>
                    <div class="bg-white shadow mt-4 prose max-w-none p-6">
                        <div class="h-screen">
                            <div class="flex flex-wrap gap-2">
                                <div>
                                    <form-label for="title" value="Title" />
                                    <form-input id="title" name="title" type="text"
                                        v-model="store.report_settings.params.title" placeholder="Title..." />
                                </div>
                                <div>
                                    <form-label for="company" value="Company" />
                                    <form-input id="company" name="company" type="text"
                                        v-model="store.report_settings.params.company" placeholder="Company..." />
                                </div>
                                <div v-if="store.report_settings.params.currency">
                                    <form-label class="currency"
                                        :value="`Report Currency - (${store.report_settings.params.currency.fullname})`" />
                                    <select v-model="store.report_settings.params.currency"
                                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                        <option v-for="currency in store.props.currencies" :key="currency.pk"
                                            :value="currency">
                                            {{ currency.fullname }}
                                        </option>
                                    </select>
                                </div>
                                <div v-if="show_accounts">
                                    <form-label for="accounts" value="Accounts" />
                                    <select multiple v-model="store.report_settings.params.accounts"
                                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                        <option v-for="account in store.props.accounts" :key="account.guid"
                                            :value="account.guid">
                                            {{ account.name_indent }}
                                        </option>
                                    </select>
                                </div>
                                <div v-if="show_date_start">
                                    <form-label for="date_start" value="Start Date" />
                                    <FormDateStart id="date_start" name="date_start"
                                        v-model="store.report_settings.params.date_start" />
                                </div>
                                <div v-if="show_date_end">
                                    <form-label for="date_end" value="End Date" />
                                    <FormDateEnd id="date_end" name="date_end"
                                        v-model="store.report_settings.params.date_end" />
                                </div>
                            </div>
                            <slot name="settings"></slot>
                        </div>
                    </div>
                </form>
            </main>
            <main v-else role="main" class="w-full h-full flex-grow p-2 sm:p-8 overflow-auto">
                <div class="bg-white p-6 shadow text-base font-bold text-sky-600" v-if="!print">
                    <div class="flex justify-between">
                        <h2>{{ title }}</h2>
                        <div class="flex flex-wrap gap-2">
                            <form-button @click="show_settings = true" title="Settings"><span
                                    class="material-icons-outlined">
                                    settings
                                </span></form-button>
                            <form-secondary-button @click="print = true" title="Print">
                                <span class="material-icons-outlined"> print </span>
                            </form-secondary-button>
                            <form-secondary-button title="Export Csv" v-if="show_export_csv">
                                <a :href="`${store.responseURL}&export_csv=true`">
                                    <span class="material-icons-outlined"> file_download </span>
                                </a>
                            </form-secondary-button>
                            <form-secondary-button @click="$router.back()" title="Close">
                                <span class="material-icons-outlined">close</span>
                            </form-secondary-button>
                        </div>
                    </div>
                </div>
                <form-secondary-button v-else @click="print = false" title="Close">
                    <span class="material-icons-outlined"> close </span>
                </form-secondary-button>

                <!-- Page Content -->
                <slot></slot>
            </main>
        </div>
    </div>
</template>
