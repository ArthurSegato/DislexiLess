<script setup lang="ts">
defineProps<{
    title: string,
    description: string,
}>()
</script>

<template>
    <header class="w-full flex flex-col">
        <h2 class="text-2xl font-semibold">{{ title }}</h2>
        <p>{{ description }}</p>
    </header>
</template>