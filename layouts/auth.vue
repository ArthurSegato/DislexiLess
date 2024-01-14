<script setup lang="ts">
const layoutProps = useAttrs()
</script>

<template>
    <div class="w-full min-h-screen h-screen flex flex-row">
        <div class="relative w-full h-full hidden lg:inline">
            <NuxtImg :src="layoutProps.imgSrc" class="select-none w-full h-full object-cover" placeholder loading="eager"
                :alt="layoutProps.imgAlt" :title="layoutProps.imgAlt" />
            <div class="p-4 absolute bottom-0 w-full z-20">
                <div class="card w-fit px-4 py-2 bg-base-100 bg-opacity-50 backdrop-blur-2xl backdrop-saturate-200">
                    <p>
                        Photo by
                        <NuxtLink :to="layoutProps.authorSrc" class="link link-primary">{{ layoutProps.authorName }}
                        </NuxtLink>
                        at
                        <NuxtLink :to="layoutProps.unsplashSrc" class="link link-primary">Unsplash</NuxtLink>.
                    </p>
                </div>
            </div>
        </div>
        <div class="w-full lg:h-full grow flex flex-col">
            <header class="p-4 w-full">
                <NuxtLink to="/" class=" flex align-middle gap-2 group w-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="w-6 h-6 fill-none stroke-current"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.8 19.5 8.2 12l7.6-7.5" />
                    </svg>
                    <p
                        class="group-hover:-translate-x-1 group-focus-within:-translate-x-1 transition-all ease-in-out duration-300">
                        Return</p>
                </NuxtLink>
            </header>
            <main class="w-full grow flex flex-col items-center justify-center p-4 sm:px-12 md:px-16 xl:px-20">
                <slot />
            </main>
            <footer class="p-4 w-full text-center">
                <p>
                    {{ layoutProps.footerText }} <NuxtLink :to="layoutProps.footerLinkSrc" class="link link-primary">{{
                        layoutProps.footerLinkText }}
                    </NuxtLink>
                </p>
            </footer>
        </div>
    </div>
</template>