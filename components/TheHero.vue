<template>
    <section id="hero" class="overflow-x-hidden hero min-h-screen bg-base-200 py-24">
        <div class="hero-content flex-col-reverse lg:flex-row-reverse gap-10 xl:gap-20 sm:px-12 md:px-16 xl:px-20">
            <NuxtImg src="/img/jamie-street.jpg" class="sm:max-w-sm rounded-lg shadow-2xl" placeholder loading="eager"
                alt="A studious dog wearing glasses sits at a desk, engrossed in a book."
                title="A studious dog wearing glasses sits at a desk, engrossed in a book." />
            <div>
                <h1 class="text-5xl font-bold">DislexiLess</h1>
                <p class="py-6">We believe that
                    <span class="px-2 py-1 rounded-md bg-primary text-primary-content skew-y-1 inline-block">
                        <span class="-skew-y-1 inline-block">technology can change the world</span>
                    </span>, which is why we developed DislexiLess, a platform created to help health and education
                    professionals support and accompany people with dyslexia.
                </p>
                <div class="flex gap-5 flex-wrap">
                    <a href="#services" class="btn btn-outline sm:w-fit gap-2" tabindex="0">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                        </svg>
                    </a>
                    <NuxtLink to="/auth/signup" class="btn btn-primary sm:w-fit gap-2" tabindex="0">
                        Get started
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                            stroke="currentColor" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>