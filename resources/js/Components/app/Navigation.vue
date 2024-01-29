<template>
    <nav class="min-w-[200px]">
        <Link :href="route('myFiles')" class="h-[80px] px-3 flex items-center gap-3">
            <ApplicationLogo
                class="block h-9 w-auto fill-current text-gray-800"
            />
            LaraStorage
        </Link>
        <div class="px-3">
            <CreateNewDropdown/>

            <div class="py-3">
                <NavLink :href="route('myFiles')" :active="$page.props.route_name === 'myFiles'">My Files</NavLink>
                <NavLink href="/users-model" :active="$page.props.route_name === 'users'" v-if="auth_user.can['View Logs']">User</NavLink>
                <NavLink :href="route('logs')" :active="$page.props.route_name === 'logs'" v-if="auth_user.can['View Logs']">Logs</NavLink>
                <!-- <NavLink :href="route('file.sharedWithMe')" :active="$page.props.route_name === 'file.sharedWithMe'">Shared with me</NavLink>
                <NavLink :href="route('file.sharedByMe')" :active="$page.props.route_name === 'file.sharedByMe'">Shared by me</NavLink>
                <NavLink :href="route('trash')" :active="$page.props.route_name === 'trash'">Trash</NavLink> -->
            </div>
        </div>
    </nav>
</template>

<script setup>
// Imports
import {Link} from '@inertiajs/vue3'
import ApplicationLogo from "@/Components/ApplicationLogo.vue";
import CreateNewDropdown from "@/Components/app/CreateNewDropdown.vue";
import NavLink from "@/Components/NavLink.vue";

// Uses

// Refs

// Props & Emit

const props = defineProps({
    auth_user: Object
})
// Computed

// Methods

// Hooks

</script>

<style scoped>

</style>
