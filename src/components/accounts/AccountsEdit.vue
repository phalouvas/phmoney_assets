<script lang="ts">
export default {
    created() {
        this.form = {
            name: this.store.props.account.name,
            code: this.store.props.account.code,
            description: this.store.props.account.description,
            commodity_scu: this.store.props.account.commodity.fraction,
            hidden: this.store.props.account.hidden ?? false,
            placeholder: this.store.props.account.placeholder ?? false,
            account_type: this.store.props.account.account_type,
            parent_guid: this.store.props.account.parent.guid,
            commodity_guid: this.store.props.account.commodity_guid,
        };
    },
    data: function () {
        return {
            form: {
                name: null,
                code: null,
                description: null,
                commodity_scu: null,
                hidden: false,
                placeholder: false,
                account_type: null,
                parent_guid: null,
                commodity_guid: null,
            },
        };
    },
    methods: {
        async submit() {
            if (this.$route.name === 'accounts.create') {
                await this.store.post(`${import.meta.env.VITE_ROOT}accounts/store`, this.form);
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}accounts/update/${this.$route.params.account_pk}`, this.form);
            }
            if (!this.store.errors) {
                this.$router.back();
            }
        },
    },
}
</script>

<template>
    <form @submit.prevent="submit" class="p-6" v-if="!store.processing">
        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="hidden" value="Hidden" />
                <form-checkbox id="hidden" v-model:checked="form.hidden" />
            </div>

            <div>
                <form-label for="placeholder" value="Placeholder" />
                <form-checkbox id="placeholder" v-model:checked="form.placeholder" />
            </div>
        </div>

        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="name" value="Name" />
                <form-input id="name" type="text" class="mt-1 block w-full" v-model="form.name"  autofocus
                    autocomplete="name" />
            </div>

            <div>
                <form-label for="code" value="Code" />
                <form-input id="code" type="text" class="mt-1 block w-full" v-model="form.code" />
            </div>
        </div>

        <div>
            <form-label for="description" value="Description" />
            <textarea v-model="form.description"
                class="mt-1 p-3 w-full border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm"
                id="description" />
        </div>

        <div class="flex flex-wrap gap-2">
            <div v-if="!store.props.account.guid">
                <form-label for="commodity_select" value="Commodity" />
                <select v-if="form.account_type == 'STOCK' || form.account_type == 'FUND'" id="commodity_select"
                    v-model="form.commodity_guid"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="security in store.props.securities" :key="security.guid" :value="security.guid">{{
                            security.fullname
                    }}
                    </option>
                </select>
                <select v-else id="commodity_select" v-model="form.commodity_guid"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="currency in store.props.currencies" :key="currency.guid" :value="currency.guid">{{
                            currency.fullname
                    }}
                    </option>
                </select>
            </div>

            <div>
                <form-label for="commodity_scu" value="Smallest fraction" />
                <select id="commodity_scu" v-model="form.commodity_scu"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option value="null">Use Commodity Value</option>
                    <option value="1">1</option>
                    <option value="10">1/10</option>
                    <option value="100">1/100</option>
                    <option value="1000">1/1000</option>
                    <option value="10000">1/10000</option>
                    <option value="100000">1/100000</option>
                    <option value="1000000">1/1000000</option>
                    <option value="10000000">1/10000000</option>
                    <option value="100000000">1/100000000</option>
                    <option value="1000000000">1/1000000000</option>
                    <option value="10000000000">1/10000000000</option>
                </select>
            </div>
        </div>
        <div class="flex flex-wrap gap-2">
            <div>
                <form-label for="account_type" value="Account Type" />
                <select id="account_type" v-model="form.account_type"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="account_type in store.props.account_types" :value="account_type">{{
                            account_type
                    }}
                    </option>
                </select>
            </div>
            <div>
                <form-label for="parent_guid" value="Parent Account" />
                <select id="parent_guid" v-model="form.parent_guid"
                    class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                    <option v-for="account in store.props.accounts" :key="account.guid" :value="account.guid">{{
                            account.name_indent
                    }}
                    </option>
                </select>
            </div>
        </div>

        <div class="flex flex-wrap gap-2 mt-4">
            <form-button :class="{ 'opacity-25': store.processing }" :disabled="store.processing" title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </div>
    </form>
</template>