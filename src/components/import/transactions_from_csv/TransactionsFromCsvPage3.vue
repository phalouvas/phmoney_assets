<script lang="ts">
export default {
    async created() {
        await this.store.get(`${import.meta.env.VITE_ROOT}import/transactions-from-csv/page3`);
        this.form = {
            upload_file: this.store.props.upload_file,
            file_path: this.store.props.file_path,
            items: [...this.store.props.items],
            delimiter: this.store.props.delimiter,
            enclosure: this.store.props.enclosure,
            date_format: this.store.props.date_format,
            currency_format: this.store.props.currency_format,
            selected_columns: [...this.store.props.selected_columns],
            skip_errors: null,
        };
        this.accounts = [...this.store.props.accounts];
    },

    data() {
        return {
            form: {
                upload_file: null,
                file_path: null,
                items: [],
                selected_columns: [],
                skip_errors: null,
            },
            accounts: [],
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
            for (let index = 0; index < this.form.items.length; index++) {
                this.form.items.length;[index].checked = this.store.props.items[index].checked;
                this.form.items.length;[index].is_valid = this.store.props.items[index].is_valid;
                this.form.items.length;[index].validation_message = this.store.props.items[index].validation_message;
                
            }
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
    },
}
</script>

<template>
    <div class="p-6" v-if="form.items.length > 0">

        <form @submit.prevent="">

            <div class="overflow-auto h-screen">
                <table class="table">
                    <thead>
                        <tr>
                            <th :colspan="form.items[0].value.length + 3">
                                Total Rows - {{ form.items.length }}
                            </th>
                        </tr>
                        <tr>
                            <th>
                                <form-checkbox :id="'index_check_all'" name="index_check_all" @input="onCheckAll" />
                            </th>
                            <th>
                                <select id="source_account_all" v-model="source_account" @change="onSourceAccountChange"
                                    class="max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                    <option v-for="account in accounts" :key="account.guid"
                                        :value="account">
                                        {{ account.name }}
                                    </option>
                                </select>
                            </th>
                            <th>
                                <div class="w-60">
                                    <select id="destination_account_all" v-model="destination_account"
                                        @change="onDestinationAccountChange"
                                        class="max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                        <option v-for="account in accounts" :key="account.guid"
                                            :value="account">
                                            {{ account.name }}
                                        </option>
                                    </select>
                                </div>
                            </th>
                            <th scope="col">#</th>
                            <td v-for="n in form.items[0].value.length - 1">
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
                                    <option v-for="account in accounts" :key="account.guid"
                                        :value="account">
                                        {{ account.name }}
                                    </option>
                                </select>
                            </td>
                            <td>
                                <select :id="`destination_account${index}`" v-model="item.destination_account"
                                    @change="submit"
                                    class="max-w-sm border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                                    <option v-for="account in accounts" :key="account.guid"
                                        :value="account">
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

    </div>
</template>