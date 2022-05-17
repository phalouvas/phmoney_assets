<script lang="ts">
export default {
    props: {
        title: String,
    },
};
</script>

<template>
    <div class="bg-sky-50 flex flex-col min-h-screen">
        <div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
            <main role="main" class="w-full h-full flex-grow p-2 sm:p-8 overflow-auto">
                <!-- Page Heading -->
                <div class="bg-white p-6 shadow text-base font-bold text-sky-600">
                    <slot name="header" v-if="$slots.header"></slot>
                    <div v-else class="flex justify-between">
                        <h2>{{ title }}</h2>
                        <form-secondary-button @click="$router.back()" title="Close">
                            <span class="material-icons-outlined">close</span>
                        </form-secondary-button>
                    </div>
                </div>

                <!-- Page Content -->
                <slot></slot>
            </main>
        </div>
    </div>
</template>