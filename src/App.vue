<script setup lang="ts">
import SharedBackground from './components/SharedBackground.vue'
import PageContent from './components/PageContent.vue'
</script>

<template>
    <main class="grid grid-cols-12 h-screen">
        <div class="col-span-6 col-start-2 hidden lg:block">
            <SharedBackground />
        </div>
        <div class="col-span-10 col-start-2 lg:col-span-4 bg-white">
            <PageContent />
        </div>
    </main>
</template>
