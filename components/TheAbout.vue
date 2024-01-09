<template>
    <section id="about"
        class="flex flex-col items-center gap-12 lg:gap-20 py-24 px-10 sm:px-20 md:px-32 bg-primary text-primary-content overflow-x-hidden">
        <LazySectionHeader title="About us" subtitle="The humans behind all" />
        <div class="flex sm:gap-6 md:gap-10 gap-16 lg:gap-24 flex-wrap sm:flex-nowrap">
            <div class="card sm:w-1/2 lg:w-96 bg-base-100 shadow-xl text-base-content">
                <figure>
                    <img class="w-full aspect-square" src="https://avatars.githubusercontent.com/u/19919287?v=4"
                        alt="Arthur Segato, Homem, cabelos longos" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Arthur Segato Paulo</h2>
                    <p>
                        Full-Stack developer, responsible for creating this website you're accessing, is terrible at
                        writing autobiographies and is actually wondering at this very moment why they're writing in the
                        third person.
                    </p>
                    <div class="card-actions justify-end">
                        <NuxtLink to="https://github.com/ArthurSegato" class="btn btn-primary btn-outline gap-2">
                            Github
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8.6 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.9a.5.5 0 0 0-1 0v6.6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.6a.5.5 0 0 0 .5-.5" />
                                <path fill-rule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.8L6 9.1a.5.5 0 1 0 .8.8L15 1.7v3.8a.5.5 0 0 0 1 0z" />
                            </svg>
                        </NuxtLink>
                        <NuxtLink to="https://www.arthursegato.dev/" class="btn btn-primary btn-outline gap-2">
                            Portfolio
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8.6 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.9a.5.5 0 0 0-1 0v6.6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.6a.5.5 0 0 0 .5-.5" />
                                <path fill-rule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.8L6 9.1a.5.5 0 1 0 .8.8L15 1.7v3.8a.5.5 0 0 0 1 0z" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="card sm:w-1/2 lg:w-96 bg-base-100 shadow-xl text-base-content">
                <figure>
                    <img class="w-full aspect-square" src="https://avatars.githubusercontent.com/u/42302941"
                        alt="Eduardo Henrique Coltz, Homem, cabelos loiros" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Eduardo Henrique Coltz</h2>
                    <p>
                        Mobile developer, remade the DislexiLess app more times than he would like to admit.
                    </p>
                    <div class="card-actions justify-end">
                        <NuxtLink to="https://github.com/OmptOsu" class="btn btn-primary btn-outline gap-2" tabindex="0">
                            Github
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8.6 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.9a.5.5 0 0 0-1 0v6.6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.6a.5.5 0 0 0 .5-.5" />
                                <path fill-rule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.8L6 9.1a.5.5 0 1 0 .8.8L15 1.7v3.8a.5.5 0 0 0 1 0z" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            <div class="card sm:w-1/2 lg:w-96 bg-base-100 shadow-xl text-base-content">
                <figure>
                    <img class="w-full aspect-square" src="https://avatars.githubusercontent.com/u/42302941"
                        alt="Eduardo Henrique Coltz, Homem, cabelos loiros" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">Ramon</h2>
                    <p>
                        Mobile developer, remade the DislexiLess app more times than he would like to admit.
                    </p>
                    <div class="card-actions justify-end">
                        <NuxtLink to="https://github.com/OmptOsu" class="btn btn-primary btn-outline gap-2" tabindex="0">
                            Github
                            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 16 16">
                                <path fill-rule="evenodd"
                                    d="M8.6 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.9a.5.5 0 0 0-1 0v6.6a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.6a.5.5 0 0 0 .5-.5" />
                                <path fill-rule="evenodd"
                                    d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.8L6 9.1a.5.5 0 1 0 .8.8L15 1.7v3.8a.5.5 0 0 0 1 0z" />
                            </svg>
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>