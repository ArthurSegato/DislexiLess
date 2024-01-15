<template>
    <NuxtLayout name="default">
        <section id="legal"
            class="flex flex-col items-center gap-12 lg:gap-20 py-24 px-4 sm:px-12 md:px-16 xl:px-20 overflow-x-hidden">
            <LazyBaseHeader title="Legal" sub-title="You know, the boring stuff..." />
            <LazyLegalTerms />
            <div class="divider" id="divider"></div>
            <LazyLegalPrivacy />
        </section>
    </NuxtLayout>
</template>