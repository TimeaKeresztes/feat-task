<script setup lang="ts">
import { ref } from 'vue'
import { setCSRFToken } from '../utils/token'
import { login } from '../utils/login'
import { useUserStore } from '../store/useUserStore'

const userStore = useUserStore()

const email = ref('')
const password = ref('')
const rememberMe = ref(false)

const inputClasses = 'h-10 rounded-[5px] border-[#DED2D9] border-[1px] p-2.5'

const onSubmit = async () => {
    await setCSRFToken()
    const loginRes = await login(email.value, password.value)
    if (loginRes !== null) {
        userStore.setUserData(loginRes.data)
        userStore.auth()
    } else alert('Invalid email or password')
}

defineProps({
    emailLabel: String,
    passwordLabel: String,
    rememberMeLabel: String,
    forgotPasswordLabel: String,
    loginButtonLabel: String,
    notAppliedYetLabel: String,
    createAccountLabel: String,
})
</script>

<template>
    <div class="flex flex-col text-[#828282]">
        <div class="flex flex-col gap-y-1 mb-6">
            <label for="email">{{ emailLabel }}</label>
            <input :class="inputClasses" v-model="email" placeholder="hello@feat.hu" type="email" required />
        </div>
        <div class="flex flex-col gap-y-1 mb-2">
            <label for="password">{{ passwordLabel }}</label>
            <input :class="inputClasses" v-model="password" placeholder="***************" type="password" required />
        </div>
        <div class="flex flex-row justify-between mb-8">
            <div class="flex flex-row items-center gap-2">
                <input type="checkbox" v-model="rememberMe" id="rememberMe" name="rememberMe" />
                <label for="rememberMe" class="text-xs">{{ rememberMeLabel }}</label>
            </div>
            <button class="text-xs text-[#7F265B] font-semibold">{{ forgotPasswordLabel }}</button>
        </div>
        <button @click="onSubmit" class="bg-[#7f256B] text-white font-extrabold py-2 rounded-md mb-9">
            {{ loginButtonLabel }}
        </button>
        <div class="text-[14px] flex flex-row gap-x-2.5">
            <span>{{ notAppliedYetLabel }}</span>
            <a href="#" class="text-[#7F265B] font-semibold">{{ createAccountLabel }}</a>
        </div>
    </div>
</template>
