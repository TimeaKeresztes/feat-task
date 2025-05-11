import { defineStore } from 'pinia'
import { ref } from 'vue'
import { type User } from '../types/user'
import { validateUser } from '../utils/validate-user'

export const useUserStore = defineStore('userData', () => {
    const isLoggedIn = ref(false)
    const userData = ref<User | null>(null)

    async function setUserData(user: User) {
        userData.value = user
    }

    async function auth() {
        const userData = await validateUser()
        if (userData !== null) {
            isLoggedIn.value = true
            setUserData(userData.data)
        }
        return userData
    }

    async function logout() {
        isLoggedIn.value = false
        userData.value = null
    }

    return { userData, setUserData, auth, isLoggedIn, logout }
})
