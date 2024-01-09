<template>
    <section id="services"
        class="flex flex-col items-center gap-12 lg:gap-20 py-24 px-10 sm:px-20 md:px-32 overflow-x-hidden">
        <LazySectionHeader title="Services" subtitle="Designed for everyone" />
        <div class="flex flex-col lg:flex-row gap-12">
            <div class="flex flex-col justify-center lg:w-1/2 gap-2 lg:gap-5">
                <h3 class="text-xl lg:text-2xl font-bold">An app for your patients</h3>
                <p class="lg:text-lg leading-normal">
                    Completely free, the DislexiLess mobile app features a set of carefully crafted daily tools to meet the
                    specific needs of people with dyslexia, designed down to the smallest detail for user comfort and
                    accessibility.
                </p>
            </div>
            <div class="flex justify-center lg:w-1/2">
                <div class="mockup-phone duration-300 ease hover:drop-shadow-2xl hover:scale-105">
                    <div class="camera"></div>
                    <div class="display">
                        <div class="artboard artboard-demo phone-1">
                            <img class="" src="~assets/img/mobile.png" alt="Image of DislexiLess mobile app."
                                loading="lazy" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex flex-col gap-12 lg:flex-row-reverse">
            <div class="flex flex-col justify-center lg:w-1/2 gap-2 lg:gap-5">
                <h3 class="text-xl lg:text-2xl font-bold">A platform for you</h3>
                <p class="lg:text-lg leading-normal">
                    Track the metrics and progress of your patients/students in real time, identifying difficulties, ease of
                    progress, and areas for improvement. Simply link the mobile app to your dashboard, and you'll be ready
                    to take advantage of all the features.
                </p>
            </div>
            <div class="flex justify-center lg:w-1/2">
                <div class="mockup-browser border bg-base-300 duration-300 ease hover:drop-shadow-2xl hover:scale-105">
                    <div class="mockup-browser-toolbar">
                        <div class="input">https://dislexiless.com/dashboard</div>
                    </div>
                    <img class="w-full" src="~assets/img/dashboard.png"
                        alt="Screenshot of the DislexiLess plataform dashboard." loading="lazy" />
                </div>
            </div>
        </div>
    </section>
</template>