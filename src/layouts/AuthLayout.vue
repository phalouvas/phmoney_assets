<template>
    <div class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100">
        <RouterLink :to="{ name: 'dashboard' }">
            <img alt="Vue logo" class="block h-9 w-auto" src="@/assets/logo.svg" />
        </RouterLink>

        <div class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
            <slot />
        </div>
    </div>
</template>
