<template>
    <AuthenticatedLayout :auth_user="auth_user">
        <nav class="flex items-center justify-between p-1 mb-3">
            <ol class="inline-flex items-center space-x-1 md:space-x-3">
                <li v-for="ans of ancestors.data" :key="ans.id" class="inline-flex items-center">
                    <Link v-if="!ans.parent_id" :href="route('myFiles')"
                        class="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white">
                    <HomeIcon class="w-4 h-4" />
                    My Files
                    </Link>
                    <div v-else class="flex items-center">
                        <svg aria-hidden="true" class="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <Link :href="route('myFiles', { folder: ans.path })"
                            class="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">
                        {{ ans.name }}
                        </Link>
                    </div>
                </li>
            </ol>

            <div class="flex">
                <!-- <label class="flex items-center mr-3">
                    Only Favourites
                    <Checkbox @change="showOnlyFavourites" v-model:checked="onlyFavourites" class="ml-2" />
                </label> -->
                <!-- <ShareFilesButton :all-selected="allSelected" :selected-ids="selectedIds" /> -->
                <!-- <DownloadFilesButton :all="allSelected" :ids="selectedIds" class="mr-2" /> -->
                <DeleteFilesButton v-if="auth_user.can['Delete Files']" :delete-all="allSelected" :delete-ids="selectedIds" @delete="onDelete" />
            </div>
        </nav>
        <div class="flex-1 overflow-auto">
            <table class="min-w-full">
                <thead class="bg-gray-100 border-b">
                    <tr>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left w-[30px] max-w-[30px] pr-0">
                            <Checkbox @change="onSelectAllChange" v-model:checked="allSelected" />
                        </th>
                        <!-- <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">

                        </th> -->
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Name
                        </th>
                        <th v-if="search" class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Path
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Owner
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Last Modified
                        </th>
                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Size
                        </th>

                        <th class="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                            Click to View
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="file of allFiles.data" :key="file.id" @click="$event => toggleFileSelect(file)"
                        @dblclick="openFolder(file)"
                        class="border-b transition duration-300 ease-in-out hover:bg-blue-100 cursor-pointer"
                        :class="(selected[file.id] || allSelected) ? 'bg-blue-50' : 'bg-white'">
                        <td
                            class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-[30px] max-w-[30px] pr-0">
                            <Checkbox @change="$event => onSelectCheckboxChange(file)" v-model="selected[file.id]"
                                :checked="selected[file.id] || allSelected" />
                        </td>
                        <!-- <td class="px-6 py-4 max-w-[40px] text-sm font-medium text-gray-900 text-yellow-500">
                            <div @click.stop.prevent="addRemoveFavourite(file)">
                                <svg v-if="!file.is_favourite" xmlns="http://www.w3.org/2000/svg" fill="none"
                                    viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                                <svg v-else xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                                    class="w-6 h-6">
                                    <path fill-rule="evenodd"
                                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                        clip-rule="evenodd" />
                                </svg>

                            </div>
                        </td> -->
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 flex items-center">
                            <FileIcon :file="file" />
                            {{ file.name }}
                        </td>
                        <td v-if="search" class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.path }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.owner }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.updated_at }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            {{ file.size }}
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                            <button @click="showViewFileModal(file.id)" class="p-2 bg-blue-500 text-white rounded"
                                v-if="file.mime == 'application/pdf'">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                    class="w-5 h-5">
                                    <path d="M10 12.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                    <path fill-rule="evenodd"
                                        d="M.664 10.59a1.651 1.651 0 0 1 0-1.186A10.004 10.004 0 0 1 10 3c4.257 0 7.893 2.66 9.336 6.41.147.381.146.804 0 1.186A10.004 10.004 0 0 1 10 17c-4.257 0-7.893-2.66-9.336-6.41ZM14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                                        clip-rule="evenodd" />
                                </svg>

                            </button>
                        </td>
                    </tr>
                </tbody>
            </table>

            <div v-if="!allFiles.data.length" class="py-8 text-center text-sm text-gray-400">
                There is no data in this folder
            </div>
            <div ref="loadMoreIntersect"></div>
            <!-- <ViewFileModal :modelValue="viewFileModal.value" @update:modelValue="viewFileModal.value = $event" /> -->



            <!-- Fullscreen Modal -->
            <div v-if="isOpen" class="fixed inset-0 bg-gray-900 bg-opacity-50 z-50">
                <div class="flex items-center justify-center min-h-screen">
                    <div class="bg-white p-5 rounded shadow-lg w-full h-full">
                        <div class="flex justify-between items-center">
                            <h3 class="text-lg leading-6 font-medium text-gray-900">{{ filename }}</h3>
                            <button @click="isOpen = false" class="text-gray-500 hover:text-gray-800">
                                <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                        d="M6 18L18 6M6 6l12 12"></path>
                                </svg>
                            </button>
                        </div>
                        <div class="mt-2">
                            <vue-pdf-app style="height: 90vh;" :pdf="current_pdf"></vue-pdf-app>
                            <!-- Your content here -->
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </AuthenticatedLayout>
</template>

<script setup>
// Imports
import { HomeIcon } from '@heroicons/vue/20/solid'
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout.vue";
import { router, useForm, usePage } from "@inertiajs/vue3";
import { Link } from '@inertiajs/vue3'
import FileIcon from "@/Components/app/FileIcon.vue";
import { computed, onMounted, onUpdated, ref } from "vue";
import { httpGet, httpPost } from "@/Helper/http-helper.js";
import Checkbox from "@/Components/Checkbox.vue";
import DeleteFilesButton from "@/Components/app/DeleteFilesButton.vue";
// import DownloadFilesButton from "@/Components/app/DownloadFilesButton.vue";
import { emitter, ON_SEARCH, showSuccessNotification } from "@/event-bus.js";
//import ShareFilesButton from "@/Components/app/ShareFilesButton.vue";
import { all } from "axios";
import ViewFileModal from "@/Components/app/ViewFileModal.vue";


import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";


const viewFileModal = ref(false)

// Uses
const page = usePage();

// Refs
const allSelected = ref(false);
const onlyFavourites = ref(false);
const isOpen = ref(false);

const selected = ref({});
const loadMoreIntersect = ref(null)
let search = ref('');
let current_pdf = ref('');
let filename = ref('');
// Props & Emit
const props = defineProps({
    files: Object,
    folder: Object,
    ancestors: Object,
    auth_user: Object
})

const allFiles = ref({
    data: props.files.data,
    next: props.files.links.next
})
let params = null;


// Computed
const selectedIds = computed(() => Object.entries(selected.value).filter(a => a[1]).map(a => a[0]))

// Methods
function openFolder(file) {
    if (!file.is_folder) {
        return;
    }

    router.visit(route('myFiles', { folder: file.path }))
}

function showViewFileModal(id) {
    let url = route('file.download');
    const p = new URLSearchParams();
    p.append('ids[]', id)
    p.append('parent_id', props.folder?.id);

    httpGet(url + '?' + p.toString())
        .then(res => {
            console.log(res);
            if (!res.url) return;

            current_pdf.value = res.url; // Use .value for Vue 3 ref
            filename.value = res.filename;
            isOpen.value = true;
        })
}


function showViewFileModal1(data) {
    this.isOpen = true
    this.current_pdf = data
}


function loadMore() {
    console.log("load more");
    console.log(allFiles.value.next);

    if (allFiles.value.next === null) {
        return
    }

    httpGet(allFiles.value.next)
        .then(res => {
            allFiles.value.data = [...allFiles.value.data, ...res.data]
            allFiles.value.next = res.links.next
        })
}

function onSelectAllChange() {
    allFiles.value.data.forEach(f => {
        selected.value[f.id] = allSelected.value
    })
}

function toggleFileSelect(file) {
    selected.value[file.id] = !selected.value[file.id]
    onSelectCheckboxChange(file)
}

function onSelectCheckboxChange(file) {
    if (!selected.value[file.id]) {
        allSelected.value = false;
    } else {
        let checked = true;

        for (let file of allFiles.value.data) {
            if (!selected.value[file.id]) {
                checked = false;
                break;
            }
        }

        allSelected.value = checked

    }
}

function onDelete() {
    allSelected.value = false
    selected.value = {}
}

function addRemoveFavourite(file) {

    httpPost(route('file.addToFavourites'), { id: file.id })
        .then(() => {
            file.is_favourite = !file.is_favourite
            showSuccessNotification('Selected files have been added to favourites')
        })
        .catch(async (er) => {
            console.log(er.error.message);
        })
}

function showOnlyFavourites() {
    if (onlyFavourites.value) {
        params.set('favourites', 1)
    } else {
        params.delete('favourites')
    }
    router.get(window.location.pathname + '?' + params.toString())
}

// Hooks
onUpdated(() => {
    allFiles.value = {
        data: props.files.data,
        next: props.files.links.next
    }
})

onMounted(() => {
    params = new URLSearchParams(window.location.search)
    onlyFavourites.value = params.get('favourites') === '1'

    search.value = params.get('search')
    emitter.on(ON_SEARCH, (value) => {
        search.value = value
    })

    const observer = new IntersectionObserver((entries) => entries.forEach(entry => entry.isIntersecting && loadMore()), {
        rootMargin: '-250px 0px 0px 0px'
    })

    observer.observe(loadMoreIntersect.value)
})


</script>

<style>#toolbarViewer button {
    display: none !important;
}</style>
