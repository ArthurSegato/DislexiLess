<template>
  <div class="w-full flex flex-col items-center gap-1 text-center">
    <h2 class="text-4xl font-thin">{{ title }}</h2>
    <p class="text-xl">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
const data = defineProps(['title', 'subtitle'])
</script>
