<script setup lang="ts">
import { useUserStore } from '../store/useUserStore'
import { logout } from '../utils/logout'

const userStore = useUserStore()

const onLogOutHandler = () => {
    logout().then(() => userStore.logout())
}

defineProps({
    welcomeLabel: String,
    jobTitleLabel: String,
    featuresLabel: String,
    logoutBtnLabel: String,
})

const { first_name, last_name, job_tile, features } = userStore.userData || {}
</script>

<template>
    <div>
        <div class="flex flex-col gap-y-[10px] mt-[76px] lg:max-w-4/5 max-w-full">
            <h1 class="text-4xl">
                {{ welcomeLabel }}
                <span class="font-bold">{{ first_name }} {{ last_name }}</span>
                <span>!</span>
            </h1>
            <p>
                {{ jobTitleLabel }} <span class="font-bold">{{ job_tile }}</span>
            </p>
            <p>{{ featuresLabel }}</p>

            <div v-for="feature in features" class="flex flex-col mb-3">
                <p :style="{ color: feature.color }" class="font-bold">
                    {{ feature.title }}
                </p>
                <p>{{ feature.description }}</p>
            </div>

            <button @click="onLogOutHandler" class="bg-[#7f256B] text-white font-extrabold py-2 rounded-md mb-9">
                {{ logoutBtnLabel }}
            </button>
        </div>
    </div>
</template>
