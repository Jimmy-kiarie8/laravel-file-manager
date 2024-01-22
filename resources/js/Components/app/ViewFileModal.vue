<template>
    <modal :show="modelValue" @show="onShow" @close="closeModal" max-width="sm">

        <vue-pdf-app style="height: 100vh;" pdf="/1.pdf"></vue-pdf-app>

    </modal>
</template>

<script setup>
// Imports
import Modal from "@/Components/Modal.vue";
import TextInput from "@/Components/TextInput.vue";
import InputError from "@/Components/InputError.vue";
import InputLabel from "@/Components/InputLabel.vue";
import {useForm, usePage} from "@inertiajs/vue3";
import SecondaryButton from "@/Components/SecondaryButton.vue";
import PrimaryButton from "@/Components/PrimaryButton.vue";
import {nextTick, ref} from "vue";
import {showSuccessNotification} from "@/event-bus.js";


import VuePdfApp from "vue3-pdf-app";
// import this to use default icons for buttons
import "vue3-pdf-app/dist/icons/main.css";

// Uses
const form = useForm({
    name: '',
    parent_id: null
})
const page = usePage();

// Refs
const folderNameInput = ref(null)

// Props & Emit
const {modelValue} = defineProps({
    modelValue: Boolean
})
const emit = defineEmits(['update:modelValue'])

// Computed
// Methods
function onShow() {
    nextTick(() => folderNameInput.value.focus())
}

function closeModal() {
    emit('update:modelValue')
    form.clearErrors();
    form.reset()
}

// Hooks
</script>

<style scoped>

</style>
