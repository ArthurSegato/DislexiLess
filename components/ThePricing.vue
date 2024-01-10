<template>
    <section id="pricing"
        class="flex flex-col items-center gap-12 lg:gap-20 py-24 px-4 sm:px-12 md:px-16 xl:px-20 overflow-x-hidden">
        <SectionHeader title="Pricing" subtitle="No plans, No nothing" />
        <div
            class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-primary bg-clip-border p-8 text-primary-content shadow-md shadow-primary/40 ease-in-out duration-200 hover:scale-105">
            <div
                class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center shadow-none">
                <p class="block text-sm leading-normal">Pay as you go</p>
                <h3 class="mt-6 flex justify-center gap-1 text-7xl tracking-normal">
                    <span class="mt-2 text-4xl">$</span>15
                    <span class="self-end text-4xl">/seat</span>
                </h3>
            </div>
            <div class="p-0">
                <ul class="flex flex-col gap-4">
                    <li class="flex items-center gap-4">
                        <span class="rounded-full border border-white/20 bg-white/20 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2"
                                aria-hidden="true" class="h-3 w-3" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.8 6 6 9-13.6" />
                            </svg>
                        </span>
                        <p class="block leading-relaxed">First 3 places free</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <span class="rounded-full border border-white/20 bg-white/20 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" aria-hidden="true" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p class="block leading-relaxed">Full dashboard access</p>
                    </li>
                    <li class="flex items-center gap-4">
                        <span class="rounded-full border border-white/20 bg-white/20 p-1">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2"
                                stroke="currentColor" aria-hidden="true" class="h-3 w-3">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                            </svg>
                        </span>
                        <p class="block leading-relaxed">Paid monthly</p>
                    </li>
                </ul>
            </div>
            <div class="mt-12 p-0">
                <NuxtLink to="/auth/register" class="btn btn-block" tabindex="0">
                    Register now
                </NuxtLink>
            </div>
        </div>
    </section>
</template>