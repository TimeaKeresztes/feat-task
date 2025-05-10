<script lang="ts" setup>
import { computed } from 'vue'
import { content_english, content_hungarian } from '../config/content'
import { ENGLISH_LANG_LABEL, useLanguageStore } from '../store/useLanguageStore'
import LoginContent from './LoginContent.vue'
import ContentHeader from './ContentHeader.vue'

const languageStore = useLanguageStore()

const pageContent = computed(() =>
    languageStore.selectedLanguage === ENGLISH_LANG_LABEL ? content_english : content_hungarian,
)
</script>

<template>
    <div class="mx-6 text-[#525252]">
        <ContentHeader />
        <LoginContent
            :login-header="pageContent.loginHeader"
            :login-description="pageContent.loginDescription"
            :email-label="pageContent.emailLabel"
            :password-label="pageContent.passwordLabel"
            :remember-me-label="pageContent.rememberMeLabel"
            :forgot-password-label="pageContent.forgotPasswordLabel"
            :login-button-label="pageContent.loginButtonLabel"
            :not-applied-yet-label="pageContent.notAppliedYetLabel"
            :create-account-label="pageContent.createAccountLabel"
        />
    </div>
</template>
