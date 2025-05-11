<script setup lang="ts">
import ContentHeader from './ContentHeader.vue'
import LoggedInContent from './LoggedInContent.vue'
import LoginContent from './LoginContent.vue'
import { computed, onMounted } from 'vue'
import { CONTENT_ENGLISH, CONTENT_HUNGARIAN } from '../config/content'
import { useLanguageStore, ENGLISH_LANG_LABEL } from '../store/useLanguageStore'
import { useUserStore } from '../store/useUserStore'

const userStore = useUserStore()
const languageStore = useLanguageStore()

const pageContent = computed(() =>
    languageStore.selectedLanguage === ENGLISH_LANG_LABEL ? CONTENT_ENGLISH : CONTENT_HUNGARIAN,
)

const isLoggedIn = computed(() => userStore.isLoggedIn)

onMounted(async () => {
    await userStore.auth()
})
</script>

<template>
    <div class="mx-6 text-[#525252]">
        <ContentHeader />
        <div v-if="isLoggedIn === true">
            <LoggedInContent
                :welcome-label="pageContent.welcomeLabel"
                :job-title-label="pageContent.jobTitleLabel"
                :features-label="pageContent.featuresLabel"
                :logout-btn-label="pageContent.logoutLabel"
            />
        </div>
        <div v-else-if="isLoggedIn === false">
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
        <div v-else>Loading...</div>
    </div>
</template>
