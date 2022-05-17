<script lang="ts">

export default {

    data() {
        return {
            form: {
                name: this.store.props.billterm.name,
                description: this.store.props.billterm.description,
                type: this.store.props.billterm.type ?? this.store.props.type.value,
                duedays: this.store.props.billterm.duedays,
                discountdays: this.store.props.billterm.discountdays,
                discount_num: this.store.props.billterm.discount_num ?? 0,
                discount_denom: this.store.props.billterm.discount_denom,
                cutoff: this.store.props.billterm.cutoff,
            },
            discount:
                this.store.props.billterm.discount_num /
                this.store.props.billterm.discount_denom,
            type: this.store.props.type,
        };
    },

    methods: {
        async submit() {

            this.form.discount_num = this.discount * 100000;
            this.form.discount_denom = 100000;

            if (this.$route.name === 'business.billterms.create') {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/billterms/store`, this.form);
            } else {
                await this.store.post(`${import.meta.env.VITE_ROOT}business/billterms/update/${this.$route.params.billterm_pk}`, this.form);
            }
            this.$router.back();
        },
    },
};
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <div class="p-3 border">
            <div class="font-semibold text-md">Identification</div>
            <div class="flex flex-wrap gap-2">

                <div>
                    <form-label for="name" value="Name*" />
                    <form-input id="name" type="text" v-model="form.name" required />
                </div>

            </div>

            <div class="font-semibold text-md">Term Definition</div>
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="description" value="Description" />
                    <form-input id="description" type="text" v-model="form.description" />
                </div>

                <div>
                    <form-label for="type" value="Type" />
                    <select v-model="form.type" name="type" id="type"
                        class="border-gray-300 focus:border-sky-300 focus:ring focus:ring-sky-200 focus:ring-opacity-50 rounded-md shadow-sm">
                        <option value="GNC_TERM_TYPE_DAYS">Days</option>
                        <option value="GNC_TERM_TYPE_PROXIMO">Proximo</option>
                    </select>
                </div>

                <div>
                    <form-label for="duedays" value="Due Days" />
                    <form-input id="duedays" type="number" v-model="form.duedays" min="0" required />
                </div>

                <div>
                    <form-label for="discountdays" value="Discount Days" />
                    <form-input id="discountdays" type="number" v-model="form.discountdays" min="0" required />
                </div>

                <div>
                    <form-label for="discount" value="Discount %" />
                    <form-input id="discount" type="number" v-model="discount" min="0" step="0.01" required />
                </div>

                <div v-if="form.type === 'GNC_TERM_TYPE_PROXIMO'">
                    <form-label for="cutoff" value="Cutoff days" />
                    <form-input id="cutoff" type="number" v-model="form.cutoff" min="0" required />
                </div>

            </div>

        </div>

        <div class="flex gap-2 items-center justify-end mt-4">
            <form-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </div>
    </form>
</template>
