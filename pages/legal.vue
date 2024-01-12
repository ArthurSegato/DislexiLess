<template>
    <NuxtLayout name="default">
        <section id="legal"
            class="flex flex-col items-center gap-12 lg:gap-20 py-24 px-4 sm:px-12 md:px-16 xl:px-20 overflow-x-hidden">
            <SectionHeader title="Legal" subtitle="You know, the boring stuff..." />
            <LazyTheTerms />
            <div class="divider" id="divider"></div>
            <LazyThePrivacy />
        </section>
    </NuxtLayout>
</template>