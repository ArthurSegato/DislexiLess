<template>
  <section class="lg:w-1/2 h-screen hidden lg:flex select-none">
    <img :src="imgPath" :alt="imgAlt" loading="eager" class="w-full h-full object-cover" />
    <div
      v-motion-slide-visible-left
      class="card absolute left-10 bottom-10 bg-base-100 bg-opacity-50 backdrop-blur-2xl backdrop-saturate-200"
    >
      <div class="flex px-4 py-2 gap-1">
        <p>Foto por</p>
        <a :href="authorReferral" class="link link-primary" tabindex="0">{{ authorName }}</a>
        <p>em</p>
        <a :href="imgReferral" class="link link-primary" tabindex="0">Unsplash</a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
defineProps(['imgPath', 'imgAlt', 'authorReferral', 'imgReferral', 'authorName'])
</script>
