<script setup lang="ts">
import backgroundImage from '../assets/main-bg.svg'
import topLeftGlobe from '../assets/globe-top-left.svg'
import bottomRightGlobe from '../assets/globe-bottom-right.svg'
import { computed } from 'vue'
import { ENGLISH_LANG_LABEL, useLanguageStore } from '../store/useLanguageStore'
import { CONTENT_ENGLISH, CONTENT_HUNGARIAN } from '../config/content'

const languageStore = useLanguageStore()

const sharedBgContent = computed(() =>
    languageStore.selectedLanguage === ENGLISH_LANG_LABEL ? CONTENT_ENGLISH : CONTENT_HUNGARIAN,
)
</script>

<template>
    <div class="relative h-screen text-center px-4">
        <img :src="topLeftGlobe" alt="globe" class="absolute top-0" />
        <img :src="backgroundImage" alt="background image" class="m-auto" />
        <div class="flex flex-col gap-[15px] -mt-[40px]">
            <h1 class="text-3xl font-bold">{{ sharedBgContent.globalTitle }}</h1>
            <p class="text-xl">{{ sharedBgContent.globalDescription }}</p>
        </div>
        <img :src="bottomRightGlobe" alt="Globe" class="absolute bottom-1/6 -right-4" />
    </div>
</template>
