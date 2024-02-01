<template>
    <AuthenticatedLayout :auth_user="auth_user">
        <nav class="flex items-center justify-end p-1 mb-3">
            <div>
                <!-- <DownloadFilesButton :all="allSelected" :ids="selectedIds" class="mr-2" :shared-with-me="true" /> -->
                <!-- <Link :href="route('users-model.create')"
                    class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-700 dark:border-gray-600 dark:text-white dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-blue-500 dark:focus:text-white">
                Add user
                </Link> -->

            </div>
        </nav>
        <div class="flex-1 overflow-auto">

            <table class="min-w-full">
                <thead class="bg-gray-100 border-b">
                    <tr>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Name
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Company
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Email
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Date
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="file of users.data" :key="file.id"
                        class="border-b transition duration-300 ease-in-out hover:bg-blue-100 cursor-pointer">

                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.name }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.company }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.email }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.created_at }}
                        </td>
                    </tr>
                </tbody>
                <tfoot>

                    <div class="flex justify-between">
                        <inertia-link :href="users.prev_page_url" v-if="users.prev_page_url">Previous</inertia-link>
                        <inertia-link :href="users.next_page_url" v-if="users.next_page_url">Next</inertia-link>
                    </div>
                </tfoot>
            </table>

            <div v-if="!users.data.length" class="py-8 text-center text-sm text-gray-400">
                There is no data in this folder
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
// Imports
import { HomeIcon } from '@heroicons/vue/20/solid'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { router } from "@inertiajs/vue3";
import { Link } from '@inertiajs/vue3'
import FileIcon from "@/Components/app/FileIcon.vue";
import { computed, onMounted, onUpdated, ref } from "vue";
import { httpGet } from "@/Helper/http-helper.js";
import Checkbox from "@/Components/Checkbox.vue";
import DeleteFilesButton from "@/Components/app/DeleteFilesButton.vue";
import DownloadFilesButton from "@/Components/app/DownloadFilesButton.vue";
import RestoreFilesButton from "@/Components/app/RestoreFilesButton.vue";
import DeleteForeverButton from "@/Components/app/DeleteForeverButton.vue";

// Props & Emit
const props = defineProps({
    users: Object,
    auth_user: Object,
    ancestors: Object
})
// Uses

// Refs
const allSelected = ref(false);
const selected = ref({});



// Computed
const selectedIds = computed(() => Object.entries(selected.value).filter(a => a[1]).map(a => a[0]))

// Methods
// Hooks
onUpdated(() => {
})

onMounted(() => {

})


</script>

<style scoped></style>
