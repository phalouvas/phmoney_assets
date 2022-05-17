
<script setup lang="ts">
import VerticalNavLink from '@/common/VerticalNavLink.vue'
import VerticalDropdown from '@/common/VerticalDropdown.vue'
import Dropdown from '@/common/Dropdown.vue'
import DropdownLink from '@/common/DropdownLink.vue'
import { useRoute } from 'vue-router'
</script>

<script lang="ts">
export default {
    props: {
        title: String,
    },
    data() {
        return {
            route: useRoute(),
        }
    },

    mounted() {
        this.sidebarHandler();
    },

    methods: {

        sidebarHandler() {
            var sideBar = document.getElementById("mobile-nav");
            sideBar.style.transform = "translateX(-260px)";
            if (this.$data.moved) {
                sideBar.style.transform = "translateX(0px)";
                this.$data.moved = false;
            } else {
                sideBar.style.transform = "translateX(-260px)";
                this.$data.moved = true;
            }
        },
    }
};
</script>

<template>
    <div class="bg-sky-50 flex flex-col min-h-screen">

        <div class="w-full flex flex-col sm:flex-row flex-grow overflow-hidden">
            <!-- Large sidebar -->
            <div class="w-1/5 flex-shrink flex-grow-0 p-4 bg-white border-r-2 hidden sm:flex">
                <div class="sticky top-0 w-full">
                    <ul class="space-y-2">
                        <RouterLink :to="{ name: 'dashboard' }" custom
                            v-slot="{ href, route, navigate, isActive, isExactActive }">
                            <VerticalNavLink :active="isActive" :href="href" icon="dashboard" @click="navigate">
                                Dashboard
                            </VerticalNavLink>
                        </RouterLink>
                        <RouterLink :to="{ name: 'accounts.index' }" custom
                            v-slot="{ href, route, navigate, isActive, isExactActive }">
                            <VerticalNavLink :active="isActive" :href="href" icon="account_balance" @click="navigate">
                                Accounts
                            </VerticalNavLink>
                        </RouterLink>
                        <VerticalDropdown align="right" width="48" label="Business" icon="business" :active="
                            route.name == 'business.payment.index' ||
                            route.name == 'business.invoices.index' ||
                            route.name == 'business.customers.index' ||
                            route.name == 'business.vendors.index' ||
                            route.name == 'business.employees.index' ||
                            route.name == 'business.jobs.index' ||
                            route.name == 'business.taxtables.index' ||
                            route.name == 'business.billterms.index' ||
                            route.name == 'business.settings.index'
                        ">
                            <template #content>
                                <RouterLink :to="{ name: 'business.payment.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Process Payment
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.invoices.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Invoices/Bills/Vouchers
                                    </VerticalNavLink>
                                </RouterLink>
                                <hr class="m-2" />
                                <RouterLink :to="{ name: 'business.customers.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Customers
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.vendors.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Vendors
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.employees.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Employees
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.jobs.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Jobs
                                    </VerticalNavLink>
                                </RouterLink>
                                <hr class="m-2" />
                                <RouterLink :to="{ name: 'business.taxtables.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Tax Tables
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.billterms.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Bill Terms
                                    </VerticalNavLink>
                                </RouterLink>
                                <hr class="m-2" />
                                <RouterLink :to="{ name: 'business.settings.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Default Settings
                                    </VerticalNavLink>
                                </RouterLink>
                            </template>
                        </VerticalDropdown>
                        <RouterLink :to="{ name: 'reports.index' }" custom
                            v-slot="{ href, route, navigate, isActive, isExactActive }">
                            <VerticalNavLink :active="isActive" :href="href" icon="summarize" @click="navigate">
                                Reports
                            </VerticalNavLink>
                        </RouterLink>
                        <VerticalDropdown align="right" width="48" label="Import" icon="upload" :active="
                            route.name == 'import.transactions_from_csv.page1'
                        ">
                            <template #content>
                                <RouterLink :to="{ name: 'import.sqlite_database.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Sqlite Database
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'import.transactions_from_csv.page1' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Transactions from Csv
                                    </VerticalNavLink>
                                </RouterLink>
                            </template>
                        </VerticalDropdown>
                    </ul>
                </div>
            </div>

            <!-- Mobile sidebar -->
            <div class="w-64 z-40 absolute bg-white shadow md:h-full flex-col justify-between sm:hidden transition duration-150 ease-in-out"
                id="mobile-nav">
                <div id="openSideBar"
                    class="h-10 w-10 bg-gray-50 absolute right-0 mt-16 -mr-10 flex items-center shadow rounded-tr rounded-br justify-center cursor-pointer"
                    @click="sidebarHandler(true)">
                    <span class="material-icons-outlined">menu</span>
                </div>
                <div class="px-2 h-screen">
                    <ul class="space-y-2">
                        <RouterLink :to="{ name: 'dashboard' }" custom
                            v-slot="{ href, route, navigate, isActive, isExactActive }">
                            <VerticalNavLink :active="isActive" :href="href" icon="dashboard" @click="navigate">
                                Dashboard
                            </VerticalNavLink>
                        </RouterLink>
                        <RouterLink :to="{ name: 'accounts.index' }" custom
                            v-slot="{ href, route, navigate, isActive, isExactActive }">
                            <VerticalNavLink :active="isActive" :href="href" icon="account_balance" @click="navigate">
                                Accounts
                            </VerticalNavLink>
                        </RouterLink>
                        <VerticalDropdown align="right" width="48" label="Business" icon="business" :active="
                            route.name == 'business.payment.index' ||
                            route.name == 'business.invoices.index' ||
                            route.name == 'business.customers.index' ||
                            route.name == 'business.vendors.index' ||
                            route.name == 'business.employees.index' ||
                            route.name == 'business.jobs.index' ||
                            route.name == 'business.taxtables.index' ||
                            route.name == 'business.billterms.index' ||
                            route.name == 'business.settings.index'
                        ">
                            <template #content>
                                <RouterLink :to="{ name: 'business.payment.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Process Payment
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.invoices.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Invoices/Bills/Vouchers
                                    </VerticalNavLink>
                                </RouterLink>
                                <hr class="m-2" />
                                <RouterLink :to="{ name: 'business.customers.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Customers
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.vendors.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Vendors
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.employees.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Employees
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.jobs.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Jobs
                                    </VerticalNavLink>
                                </RouterLink>
                                <hr class="m-2" />
                                <RouterLink :to="{ name: 'business.taxtables.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Tax Tables
                                    </VerticalNavLink>
                                </RouterLink>
                                <RouterLink :to="{ name: 'business.billterms.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Bill Terms
                                    </VerticalNavLink>
                                </RouterLink>
                                <hr class="m-2" />
                                <RouterLink :to="{ name: 'business.settings.index' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Default Settings
                                    </VerticalNavLink>
                                </RouterLink>
                            </template>
                        </VerticalDropdown>
                        <RouterLink :to="{ name: 'reports.index' }" custom
                            v-slot="{ href, route, navigate, isActive, isExactActive }">
                            <VerticalNavLink :active="isActive" :href="href" icon="summarize" @click="navigate">
                                Reports
                            </VerticalNavLink>
                        </RouterLink>
                        <VerticalDropdown align="right" width="48" label="Import" icon="upload" :active="
                            route.name == 'import.transactions_from_csv.page1'
                        ">
                            <template #content>
                                <RouterLink :to="{ name: 'import.transactions_from_csv.page1' }" custom
                                    v-slot="{ href, route, navigate, isActive, isExactActive }">
                                    <VerticalNavLink :active="isActive" :href="href" @click="navigate">
                                        Transactions from Csv
                                    </VerticalNavLink>
                                </RouterLink>
                            </template>
                        </VerticalDropdown>
                    </ul>
                </div>
            </div>

            <main role="main" class="w-full h-full flex-grow p-2 sm:p-8 overflow-auto">
                <!-- Page Heading -->
                <div class="bg-white p-6 shadow text-base font-bold text-sky-600">
                    <slot name="header" v-if="$slots.header"></slot>
                    <h2 v-else>{{ title }}</h2>
                </div>

                <!-- Page Content -->
                <slot></slot>
            </main>
        </div>

    </div>
</template>