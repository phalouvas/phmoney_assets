
<script lang="ts">

export default {

    data() {
        return {
            form: {
                name: this.store.props.taxtable.name,
                taxtableentry: {
                    account: this.store.props.taxtableentry.account,
                    amount_num: this.store.props.taxtableentry.amount_num,
                    amount_denom: this.store.props.taxtableentry.amount_denom,
                    type: this.store.props.taxtableentry.type,
                },
            },
        };
    },

    methods: {
        async submit() {
            await this.store.post(`${import.meta.env.VITE_ROOT}business/taxtables/update/${this.$route.params.taxtable_pk}`, this.form);
            this.$router.back();
        },
    },
};
</script>

<template>
    <form @submit.prevent="submit" class="p-6">
        <div class="p-3 border">
            <div class="font-bold text-lg">Tax Table</div>

            <div class="font-semibold text-md">Identification</div>
            <div class="flex flex-wrap gap-2">
                <div>
                    <form-label for="name" value="Name*" />
                    <form-input id="name" type="text" v-model="form.name" required />
                </div>
            </div>
        </div>

        <div class="flex gap-2 items-center justify-end mt-4">
            <form-secondary-button @click="$router.push({
                name: 'business.taxtables.entrys.index', params: {
                    taxtable: store.props.taxtable.pk,
                }
            })" title="Tax Table Entries">
                <span class="material-icons-outlined">view_list</span>
            </form-secondary-button>

            <form-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing" title="Save">
                <span class="material-icons-outlined"> save </span>
            </form-button>
        </div>
    </form>
</template>
