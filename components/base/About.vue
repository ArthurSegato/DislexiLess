<template>
    <section id="about"
        class="flex flex-col items-center gap-12 lg:gap-20 py-24 px-4 sm:px-12 md:px-16 xl:px-20 bg-primary text-primary-content overflow-x-hidden">
        <LazyBaseHeader title="About us" sub-title="The humans behind all" />
        <div class="flex sm:gap-6 md:gap-10 gap-16 lg:gap-24 flex-wrap w-full justify-evenly">
            <div class="card w-full lg:w-96 bg-base-100 shadow-xl text-base-content">
                <figure>
                    <NuxtImg src="/img/arthur-segato.jpg" class="w-full aspect-square object-cover select-none" placeholder
                        loading="lazy" alt="Selfie of arthur segato visually distorted outside at night."
                        title="Selfie of arthur segato visually distorted outside at night." />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Arthur Segato</h2>
                    <p>
                        Full-stack developer responsible for creating this website, is currently typing this with cold
                        fingers <i>(due to the poor thermal insulation in his room)</i>, while he watches driving students
                        struggling to parallel park.
                    </p>
                    <div class="card-actions justify-end">
                        <NuxtLink to="https://github.com/ArthurSegato" class="btn btn-primary btn-outline gap-2">
                            Github
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 6H5.2A2.3 2.3 0 0 0 3 8.3v10.4A2.3 2.3 0 0 0 5.3 21h10.4a2.3 2.3 0 0 0 2.3-2.3v-8.2m-10.5 6L21 3m0 0h-5.3M21 3v5.3" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="https://www.arthursegato.dev/" class="btn btn-primary btn-outline gap-2">
                            Portfolio
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 6H5.2A2.3 2.3 0 0 0 3 8.3v10.4A2.3 2.3 0 0 0 5.3 21h10.4a2.3 2.3 0 0 0 2.3-2.3v-8.2m-10.5 6L21 3m0 0h-5.3M21 3v5.3" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="card w-full lg:w-96 bg-base-100 shadow-xl text-base-content">
                <figure>
                    <NuxtImg src="/img/arthur-segato.jpg" class="w-full aspect-square object-cover select-none" placeholder
                        loading="lazy" alt="" title="" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Eduardo Henrique Coltz</h2>
                    <p>
                        DislexiLess mobile developer, remade the app more times than he would like to admit.
                    </p>
                    <div class="card-actions justify-end">
                        <NuxtLink to="https://github.com/OmptOsu" class="btn btn-primary btn-outline gap-2" tabindex="0">
                            Github
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                class="w-5 h-5 fill-none stroke-current" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 6H5.2A2.3 2.3 0 0 0 3 8.3v10.4A2.3 2.3 0 0 0 5.3 21h10.4a2.3 2.3 0 0 0 2.3-2.3v-8.2m-10.5 6L21 3m0 0h-5.3M21 3v5.3" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="card w-full lg:w-96 bg-base-100 shadow-xl text-base-content">
                <figure>
                    <NuxtImg src="/img/ramon-ferraz.jpg" class="w-full aspect-square object-cover select-none" placeholder
                        loading="lazy"
                        alt="Photo of ramon ferraz, in his office wearing a white coat and medical equipment, sitting behind a desk with a laptop."
                        title="Photo of ramon ferraz, in his office wearing a white coat and medical equipment, sitting behind a desk with a laptop." />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Dr. Ramon Ferraz</h2>
                    <p>
                        Mentor of the DislexiLess project, Physician specialized in mental health and clinical psychiatry,
                        Director of São João Batista Health
                        Center, municipal medical auditor.<br><i>fancy words, uh?</i>
                    </p>
                    <div class="card-actions justify-end">
                        <NuxtLink to="https://www.instagram.com/dr.ramon.ferraz/" class="btn btn-primary btn-outline gap-2"
                            tabindex="0">
                            Instagram
                            <svg xmlns="http://www.w=" stroke-width="1.5" class="w-5 h-5 fill-none stroke-current"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M13.5 6H5.2A2.3 2.3 0 0 0 3 8.3v10.4A2.3 2.3 0 0 0 5.3 21h10.4a2.3 2.3 0 0 0 2.3-2.3v-8.2m-10.5 6L21 3m0 0h-5.3M21 3v5.3" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>