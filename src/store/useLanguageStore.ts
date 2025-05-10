import { defineStore } from 'pinia'
import { ref } from 'vue'

export const ENGLISH_LANG_LABEL = 'EN'
export const HUNGARIAN_LANG_LABEL = 'HU'

export const useLanguageStore = defineStore('languageData', () => {
    const selectedLanguage = ref(ENGLISH_LANG_LABEL)

    function setSelectedLanguage(newLanguage: string) {
        selectedLanguage.value = newLanguage
    }

    return { selectedLanguage, setSelectedLanguage }
})
