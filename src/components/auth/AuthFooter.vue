<template>
  <footer class="flex justify-center gap-1 flex-wrap">
    <p>{{ textOut }}</p>
    <router-link :to="{ name: routeName }" class="link link-primary" tabindex="0">{{
      textIn
    }}</router-link>
  </footer>
</template>

<script setup lang="ts">
defineProps(['textOut', 'textIn', 'routeName'])
</script>
