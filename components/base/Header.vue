<script setup lang="ts">
defineProps<{
    title: string,
    subTitle: string,
}>()
</script>

<template>
    <header class="w-full flex flex-col items-center gap-1 text-center">
        <h2 class="text-4xl font-thin">{{ title }}</h2>
        <p class="text-xl">{{ subTitle }}</p>
    </header>
</template>