<script setup lang="ts">
import { useLanguageStore } from '../store/useLanguageStore'
import { ENGLISH_LANG_LABEL, HUNGARIAN_LANG_LABEL } from '../store/useLanguageStore'

const languageStore = useLanguageStore()
</script>

<template>
    <div class="flex gap-x-4">
        <button
            :class="languageStore.selectedLanguage === ENGLISH_LANG_LABEL ? 'font-bold' : ''"
            @click="languageStore.setSelectedLanguage(ENGLISH_LANG_LABEL)"
        >
            {{ ENGLISH_LANG_LABEL }}
        </button>
        <button
            :class="languageStore.selectedLanguage === HUNGARIAN_LANG_LABEL ? 'font-bold' : ''"
            @click="languageStore.setSelectedLanguage(HUNGARIAN_LANG_LABEL)"
        >
            {{ HUNGARIAN_LANG_LABEL }}
        </button>
    </div>
</template>
