<template>
    <section id="hero" class="overflow-x-hidden">
        <div class="hero min-h-screen bg-base-200 py-20 sm:px-20">
            <div class="hero-content flex-col-reverse lg:flex-row-reverse gap-10">
                <img src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
                    class="sm:max-w-sm rounded-lg shadow-2xl" alt="" />
                <div>
                    <h1 class="text-5xl font-bold">DislexiLess</h1>
                    <p class="py-6">We believe that
                        <span class="px-2 py-1 rounded-md bg-primary text-primary-content skew-y-[0.5deg] inline-block">
                            technology can change the world
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
        </div>
    </section>
</template>