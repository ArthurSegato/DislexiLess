<template>
    <section id="hero" class="overflow-x-hidden hero min-h-screen bg-base-200 py-24">
        <div class="hero-content flex-col-reverse lg:flex-row-reverse gap-10 xl:gap-20 sm:px-12 md:px-16 xl:px-20">
            <NuxtImg src="/img/jamie-street.jpg" class="sm:max-w-sm rounded-lg shadow-2xl select-none w-full" placeholder
                loading="eager" alt="A studious dog wearing glasses sits at a desk, engrossed in a book."
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
                    <a href="#services" class="btn btn-outline sm:w-fit gap-2 group" tabindex="0">
                        Learn more
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                            class="group-hover:translate-y-1 group-focus-within:translate-x-1 transition-all ease-in-out duration-300 w-5 h-5 fill-none stroke-current"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.3 12 15.7 4.5 8.3" />
                        </svg>
                    </a>
                    <NuxtLink to="/auth" class="btn btn-primary sm:w-fit gap-2 group" tabindex="0">
                        Get started
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                            class="group-hover:translate-x-1 group-focus-within:translate-x-1 transition-all ease-in-out duration-300 w-5 h-5 fill-none stroke-current"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.3 4.5 7.4 7.5-7.4 7.5" />
                        </svg>
                    </NuxtLink>
                </div>
            </div>
        </div>
    </section>
</template>