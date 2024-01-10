<script setup lang="ts">
const alert = ref({
    success: false,
    fail: false,
})
const contactForm = reactive({
    name: '',
    company: '',
    email: '',
    phone: '',
    message: '',
    isValid: false
})

watch(() => [contactForm.name, contactForm.email, contactForm.message],
    async ([name, email, message]) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (name.length < 2) contactForm.isValid = false;
        else if (!emailRegex.test(email)) contactForm.isValid = false;
        else if (message.length < 2) contactForm.isValid = false;
        else contactForm.isValid = true;
    }
)

const contactHandler = async () => {
    try {
        const request = await $fetch('/api/contact', {
            method: 'POST',
            body: {
                name: contactForm.name,
                company: contactForm.company,
                email: contactForm.email,
                phone: contactForm.phone,
                message: contactForm.message
            }
        })

        alert.value.success = true;

        setTimeout(async () => {
            contactForm.name = ''
            contactForm.phone = ''
            contactForm.email = ''
            contactForm.message = ''
            contactForm.isValid = false
            alert.value.success = false
        }, 3000);
    }
    catch (error) {
        alert.value.fail = true;
        setTimeout(async () => alert.value.fail = false, 5000);
    }

}
</script>

<template>
    <section id="contact"
        class="flex flex-col items-center bg-base-200 gap-12 lg:gap-20 py-24 px-10 sm:px-20 md:px-32 overflow-x-hidden">
        <SectionHeader title="Contact" subtitle="Let's talk" />
        <div class="card w-full sm:w-96 bg-base-100 shadow-xl">
            <div class="card-body">
                <h3 class="text-xl text-center">On social media</h3>
                <div class="divider"></div>
                <div class="flex justify-between">
                    <a href="https://www.instagram.com/" class="btn btn-square" tabindex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6" viewBox="0 0 16 16">
                            <path
                                d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/" class="btn btn-square" tabindex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6" viewBox="0 0 16 16">
                            <path
                                d="m6.08.234.179.727a7.264 7.264 0 0 0-2.01.832l-.383-.643A7.9 7.9 0 0 1 6.079.234zm3.84 0L9.742.96a7.265 7.265 0 0 1 2.01.832l.388-.643A7.957 7.957 0 0 0 9.92.234zm-8.77 3.63a7.944 7.944 0 0 0-.916 2.215l.727.18a7.264 7.264 0 0 1 .832-2.01l-.643-.386zM.75 8a7.3 7.3 0 0 1 .081-1.086L.091 6.8a8 8 0 0 0 0 2.398l.74-.112A7.262 7.262 0 0 1 .75 8zm11.384 6.848-.384-.64a7.23 7.23 0 0 1-2.007.831l.18.728a7.965 7.965 0 0 0 2.211-.919zM15.251 8c0 .364-.028.727-.082 1.086l.74.112a7.966 7.966 0 0 0 0-2.398l-.74.114c.054.36.082.722.082 1.086zm.516 1.918-.728-.18a7.252 7.252 0 0 1-.832 2.012l.643.387a7.933 7.933 0 0 0 .917-2.219zm-6.68 5.25c-.72.11-1.453.11-2.173 0l-.112.742a7.99 7.99 0 0 0 2.396 0l-.112-.741zm4.75-2.868a7.229 7.229 0 0 1-1.537 1.534l.446.605a8.07 8.07 0 0 0 1.695-1.689l-.604-.45zM12.3 2.163c.587.432 1.105.95 1.537 1.537l.604-.45a8.06 8.06 0 0 0-1.69-1.691l-.45.604zM2.163 3.7A7.242 7.242 0 0 1 3.7 2.163l-.45-.604a8.06 8.06 0 0 0-1.691 1.69l.604.45zm12.688.163-.644.387c.377.623.658 1.3.832 2.007l.728-.18a7.931 7.931 0 0 0-.916-2.214zM6.913.831a7.254 7.254 0 0 1 2.172 0l.112-.74a7.985 7.985 0 0 0-2.396 0l.112.74zM2.547 14.64 1 15l.36-1.549-.729-.17-.361 1.548a.75.75 0 0 0 .9.902l1.548-.357-.17-.734zM.786 12.612l.732.168.25-1.073A7.187 7.187 0 0 1 .96 9.74l-.727.18a8 8 0 0 0 .736 1.902l-.184.79zm3.5 1.623-1.073.25.17.731.79-.184c.6.327 1.239.574 1.902.737l.18-.728a7.197 7.197 0 0 1-1.962-.811l-.007.005zM8 1.5a6.502 6.502 0 0 0-6.498 6.502 6.516 6.516 0 0 0 .998 3.455l-.625 2.668L4.54 13.5a6.502 6.502 0 0 0 6.93-11A6.516 6.516 0 0 0 8 1.5" />
                        </svg>
                    </a>
                    <a href="https://www.instagram.com/" class="btn btn-square" tabindex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6" viewBox="0 0 16 16">
                            <path
                                d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z" />
                        </svg>
                    </a>
                    <a href="https://github.com/ArthurSegato/DislexiLess" class="btn btn-square" tabindex="0">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="h-6 w-6" viewBox="0 0 16 16">
                            <path
                                d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
        <div class="card w-full lg:w-fit bg-base-100 shadow-xl">
            <div class="card-body">
                <h3 class="text-xl text-center">Or directly through here</h3>
                <div class="divider"></div>
                <form @submit.prevent="contactHandler" autocomplete="off">
                    <div class="flex gap-x-10 gap-y-2 flex-wrap md:flex-nowrap">
                        <div class="form-control w-full lg:w-96">
                            <label class="label">
                                <span class="label-text">Name</span>
                            </label>
                            <div class="join">
                                <input type="text" placeholder="Type your name here"
                                    class="input input-bordered w-full join-item" v-model="contactForm.name" />
                                <span class="btn join-item no-animation cursor-default btn-active btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                        class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M15 9h3.8M15 12h3.8M15 15h3.8M4.4 19.5h15a2.3 2.3 0 0 0 2.3-2.3V6.8a2.3 2.3 0 0 0-2.3-2.3h-15a2.3 2.3 0 0 0-2.3 2.3v10.4a2.3 2.3 0 0 0 2.3 2.3Zm6-10.1a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0Zm1.3 6.3a6.7 6.7 0 0 1-3.2.8 6.7 6.7 0 0 1-3.1-.8 3.4 3.4 0 0 1 6.3 0Z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="form-control w-full lg:w-96">
                            <label class="label">
                                <span class="label-text">Company <sup><i>Optional</i></sup></span>
                            </label>
                            <div class="join">
                                <input type="text" placeholder="Your company name, if any"
                                    class="join-item input input-bordered w-full" v-model="contactForm.company" />
                                <span class="btn join-item no-animation cursor-default btn-active btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                        class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M2.3 21h19.4M3.8 3v18M14.3 3v18m6-13.5V21M6.7 6.7h.8m-.8 3h.8m-.8 3h.8m3-6h.8m-.8 3h.8m-.8 3h.8M6.7 21v-3.4c0-.6.6-1.1 1.2-1.1H10c.6 0 1.2.5 1.2 1.1V21M3 3h12m-.8 4.5H21m-3.8 3.8h0v0h0v0Zm0 3h0v0h0v0Zm0 3h0v0h0v0Z" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="flex gap-x-10 gap-y-2 flex-wrap md:flex-nowrap">
                        <div class="form-control w-full lg:w-96">
                            <label class="label">
                                <span class="label-text">Email</span>
                            </label>
                            <div class="join">
                                <input type="email" placeholder="your@email.com"
                                    class="input input-bordered w-full join-item" v-model="contactForm.email" />
                                <span class="btn join-item no-animation cursor-default btn-active btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                        class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.7 1 3 2.3 3s2.2-1.3 2.2-3a9 9 0 1 0-2.6 6.4M16.5 12V8.2" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div class="form-control w-full lg:w-96">
                            <label class="label">
                                <span class="label-text">Phone <sup><i>Optional</i></sup></span>
                            </label>
                            <div class="join">
                                <input type="tel" placeholder="Phone number" class="input join-item input-bordered w-full"
                                    v-model="contactForm.phone" />
                                <span class="btn join-item no-animation cursor-default btn-active btn-ghost">
                                    <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                        class="w-6 h-6 stroke-current fill-none" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round"
                                            d="M10.5 1.5H8.2A2.3 2.3 0 0 0 6 3.8v16.4a2.3 2.3 0 0 0 2.3 2.3h7.4a2.3 2.3 0 0 0 2.3-2.3V3.9a2.3 2.3 0 0 0-2.3-2.3h-2.2m-3 0V3h3V1.5m-3 0h3m-3 18.8h3" />
                                    </svg>
                                </span>
                            </div>
                        </div>
                    </div>
                    <div class="form-control">
                        <label class="label">
                            <span class="label-text">Message</span>
                        </label>
                        <textarea class="textarea textarea-bordered h-28" placeholder="And your message for us"
                            v-model="contactForm.message"></textarea>
                    </div>
                    <div class="flex justify-end my-2">
                        <button type="submit" class="btn btn-primary gap-2 w-full md:w-32 group"
                            :disabled="!contactForm.isValid">
                            Send
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                class="w-5 h-5 fill-none stroke-current group-hover:translate-x-1 group-focus-within:translate-x-1 transition-all ease-in-out duration-300"
                                viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M6 12 3.3 3.1A59.8 59.8 0 0 1 21.5 12a59.8 59.8 0 0 1-18.2 8.9L6 12Zm0 0h7.5" />
                            </svg>
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <div class="p-4 fixed w-full z-10 bottom-0 transition-all ease-in-out duration-300" v-show="alert.success">
            <div role="alert" class="alert alert-success flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6 fill-none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>We got your message!</span>
            </div>
        </div>
        <div class="p-4 fixed w-full z-10 bottom-0 transition-all ease-in-out duration-300" v-show="alert.fail">
            <div role="alert" class="alert alert-error flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6 fill-none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Oops! An error occurred. Please try again in a few moments!</span>
            </div>
        </div>
    </section>
</template>