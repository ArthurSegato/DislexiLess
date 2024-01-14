<script setup lang="ts">
definePageMeta({ middleware: "guest-only" });

const passwordType = ref("password");

const states = ref({
    fetching: false,
    success: false,
    fail: false,
})

const formData = reactive({
    name: '',
    email: '',
    password: '',
    isValid: false
})

watch(() => [formData.name, formData.email, formData.password],
    async ([name, email, password]) => {
        const nameRegex = /^[A-Za-z]+(?:[ '-][A-Za-z]+)*$/;
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!nameRegex.test(name)) formData.isValid = false;
        else if (!emailRegex.test(email)) formData.isValid = false;
        else if (password.length < 8) formData.isValid = false;
        else formData.isValid = true;
    }
)

const formHandler = async () => {
    try {
        states.value.fetching = true;

        const request = await $fetch('https://httpbin.org/post', {
            method: 'POST',
            body: {
                name: formData.name,
                email: formData.email,
                password: formData.password
            }
        });

        states.value.fetching = false;
        states.value.success = true;
        formData.name = '';
        formData.email = '';
        formData.password = '';
        formData.isValid = false;
    }
    catch (error) {
        states.value.fetching = false;
        states.value.fail = true;
        setTimeout(async () => states.value.fail = false, 5000);
    }
}

const togglePassword = async () => passwordType.value = passwordType.value === "password" ? "text" : "password";
</script>

<template>
    <NuxtLayout name="auth"
        imgSrc="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        imgAlt="Portrait photography of man smiling" authorName="Charles Etoroma"
        authorSrc="https://unsplash.com/@charlesetoroma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        unsplashSrc="https://unsplash.com/photos/95UF6LXe-Lo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        footerText="Already have an account?" footerLinkSrc="/auth" footerLinkText="Sign In">
        <div v-if="states.success">
            rola
        </div>
        <div v-else>
            <h1 class="text-4xl font-thin py-8 w-full text-center">Create your account</h1>
            <form @submit.prevent="formHandler" class="flex flex-col w-full items-center" autocomplete="off">
                <div class="form-control w-full max-w-sm">
                    <label class="label">
                        <span class="label-text">Name</span>
                    </label>
                    <div class="join">
                        <input type="text" placeholder="Type your name here" class="input input-bordered w-full join-item"
                            v-model="formData.name" />
                        <span class="btn join-item no-animation cursor-default btn-active btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 9h3.8M15 12h3.8M15 15h3.8M4.4 19.5h15a2.3 2.3 0 0 0 2.3-2.3V6.8a2.3 2.3 0 0 0-2.3-2.3h-15a2.3 2.3 0 0 0-2.3 2.3v10.4a2.3 2.3 0 0 0 2.3 2.3Zm6-10.1a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0Zm1.3 6.3a6.7 6.7 0 0 1-3.2.8 6.7 6.7 0 0 1-3.1-.8 3.4 3.4 0 0 1 6.3 0Z" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="form-control w-full max-w-sm">
                    <label class="label">
                        <span class="label-text">Email</span>
                    </label>
                    <div class="join">
                        <input type="email" placeholder="your@email.com" class="input input-bordered w-full join-item"
                            v-model="formData.email" />
                        <span class="btn join-item no-animation cursor-default btn-active btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.7 1 3 2.3 3s2.2-1.3 2.2-3a9 9 0 1 0-2.6 6.4M16.5 12V8.2" />
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="form-control w-full max-w-sm">
                    <label class="label">
                        <span class="label-text">Password</span>
                    </label>
                    <div class="join">
                        <input :type="passwordType" class="input input-bordered w-full join-item"
                            v-model="formData.password" />
                        <button class="btn join-item" @click="togglePassword" type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24"
                                v-if="passwordType != 'password'">
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M4 8.2A10.5 10.5 0 0 0 2 12a10.5 10.5 0 0 0 12.9 7.1M6.2 6.2A10.5 10.5 0 0 1 12 4.5c4.8 0 8.8 3.2 10 7.5a10.5 10.5 0 0 1-4.2 5.8M6.2 6.2 3 3m3.2 3.2L10 10m7.9 7.9L21 21m-3.2-3.2L14 14m0 0a3 3 0 1 0-4-4m4 4-4-4" />
                            </svg>
                            <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" v-else>
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M2 12.3a1 1 0 0 1 0-.6 10.5 10.5 0 0 1 20 0v.6a10.5 10.5 0 0 1-20 0Z" />
                                <path stroke-linecap="round" stroke-linejoin="round"
                                    d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                            </svg>
                        </button>
                    </div>
                </div>
                <button type="submit" :disabled="!formData.isValid" class="btn btn-primary btn-block max-w-sm my-4">
                    <span class="loading loading-spinner loading-xs" v-if="states.fetching"></span>
                    <span v-else>Register</span>
                </button>
            </form>
        </div>
        <div class="p-4 fixed z-10 bottom-0 transition-all ease-in-out duration-300" v-show="states.fail">
            <div role="alert" class="alert alert-error flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6 fill-none"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Oops! An error occurred. Please try again in a few moments!</span>
            </div>
        </div>
    </NuxtLayout>
</template>