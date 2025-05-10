<script setup lang="ts">
import LoginForm from './LoginForm.vue'

defineProps({
    loginHeader: String,
    loginDescription: String,
    emailLabel: String,
    passwordLabel: String,
    rememberMeLabel: String,
    forgotPasswordLabel: String,
    loginButtonLabel: String,
    notAppliedYetLabel: String,
    createAccountLabel: String,
})

const COMPANY_NAME = 'feat.'
</script>

<template>
    <div class="mt-[20%] flex flex-col gap-y-9">
        <div class="flex flex-col gap-y-3">
            <h1 class="font-bold text-4xl">
                {{ loginHeader }}
                <span class="italic">{{ COMPANY_NAME }}</span>
            </h1>
            <p class="text-[16px]">{{ loginDescription }}</p>
        </div>
        <LoginForm
            :email-label="emailLabel"
            :password-label="passwordLabel"
            :remember-me-label="rememberMeLabel"
            :forgot-password-label="forgotPasswordLabel"
            :login-button-label="loginButtonLabel"
            :not-applied-yet-label="notAppliedYetLabel"
            :create-account-label="createAccountLabel"
        />
    </div>
</template>
