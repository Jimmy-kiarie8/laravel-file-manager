<template>
    <AuthenticatedLayout :auth_user="auth_user">
        <nav class="flex items-center justify-end p-1 mb-3">
            <div>
                <DownloadFilesButton :all="allSelected" :ids="selectedIds" class="mr-2" :shared-with-me="true" />
            </div>
        </nav>
        <div class="flex-1 overflow-auto">

            <table class="min-w-full">
                <thead class="bg-gray-100 border-b">
                    <tr>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Date
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Description
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Subject type
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Event
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            User
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="file of lastActivity.data" :key="file.id"
                        class="border-b transition duration-300 ease-in-out hover:bg-blue-100 cursor-pointer">

                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.date }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.description }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.subject_type }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.event }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.causer_type }}
                        </td>
                    </tr>
                </tbody>
                <tfoot>

                    <div class="flex justify-between">
                        <Link :href="lastActivity.prev_page_url" v-if="lastActivity.prev_page_url">Previous</Link>
                        <Link :href="lastActivity.next_page_url" v-if="lastActivity.next_page_url">Next</Link>
                    </div>
                </tfoot>
            </table>

            <div v-if="!lastActivity.data.length" class="py-8 text-center text-sm text-gray-400">
                There is no data in this folder
            </div>
        </div>
    </AuthenticatedLayout>
</template>

<script setup>
// Imports
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { computed, onMounted, onUpdated, ref } from "vue";
import DownloadFilesButton from "@/Components/app/DownloadFilesButton.vue";
import { Link } from '@inertiajs/vue3';

// Props & Emit
const props = defineProps({
    files: Object,
    lastActivity: Object,
    folder: Object,
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
