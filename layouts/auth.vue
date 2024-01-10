<template>
    <div
        class="w-full fixed h-3 bg-red-600 sm:bg-orange-600 md:bg-yellow-600 lg:bg-green-600 xl:bg-blue-600 2xl:bg-purple-600">
    </div>
    <div class="w-full min-h-screen flex flex-row">
        <div class="w-full h-full">
            <NuxtImg src="/img/jamie-street.jpg" class="select-none w-full" placeholder loading="eager"
                alt="A studious dog wearing glasses sits at a desk, engrossed in a book."
                title="A studious dog wearing glasses sits at a desk, engrossed in a book." />
        </div>
        <div class="w-full h-full">
            <slot />
        </div>
    </div>
</template>