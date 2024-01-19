<script setup lang="ts">
definePageMeta({ middleware: "guest-only" });

import { isEmail, isAlpha, isStrongPassword } from 'validator';

const { signIn } = useAuth();

const accountState = reactive({
    isFirstStep: true,
    isSecondStep: false,
    isThirdStep: false,
    isLastStep: false,
    isAccountCreated: false
});

const requestState = reactive({
    isFetching: false,
    isFail: false,
    message: ''
});

const formState = reactive({
    isEmailValid: false,
    isNameValid: false,
    isPasswordValid: false,
});

const formData = reactive({
    name: '',
    email: '',
    password: '',
})

watch(formData, () => {
    // Validate email
    if (!isEmail(formData.email)) formState.isEmailValid = false;
    else formState.isEmailValid = true;

    // Validate name
    if (!isAlpha(formData.name)) formState.isNameValid = false;
    else formState.isNameValid = true;

    // Validate password
    if (!isStrongPassword(formData.password)) formState.isPasswordValid = false;
    else formState.isPasswordValid = true;
});

const handleError = async (e) => {
    requestState.isFetching = false;
    requestState.isFail = true;
    requestState.message = e.statusMessage;
    setTimeout(async () => requestState.isFail = false, 5000);
}

const verifyEmail = async () => {
    try {
        requestState.isFetching = true;

        const isEmailUsed = await $fetch('/api/auth/verify', {
            method: 'POST',
            body: { email: formData.email }
        })

        if (isEmailUsed) {
            accountState.isFirstStep = false;
            accountState.isThirdStep = true;
            accountState.isAccountCreated = true;
        } else {
            accountState.isFirstStep = false;
            accountState.isSecondStep = true;
            accountState.isAccountCreated = false;
        }

        requestState.isFetching = false;
    }
    catch (error) {
        handleError(error);
    }
}

const formHandler = async () => {
    try {
        requestState.isFetching = true;

        if (accountState.isAccountCreated) {
            await $fetch('/api/auth/update', {
                method: 'POST',
                body: {
                    email: formData.email,
                    password: formData.password
                }
            });

            await signIn(`credentials`,
                {
                    email: formData.email,
                    password: formData.password
                }
            )
        }
        else {
            await $fetch('/api/auth/register', {
                method: 'POST',
                body: formData
            })
            accountState.isThirdStep = false;
            accountState.isLastStep = true;
        }
    }
    catch (error) {
        handleError(error);
    }
}

const toggleStep = async () => {
    accountState.isSecondStep = false;
    accountState.isThirdStep = true;
}

/* Toggle password to text logic */
const passwordType = ref("password");

const togglePassword = async () => passwordType.value = passwordType.value === "password" ? "text" : "password";
</script>

<template>
    <div>
        <NuxtLayout name="auth"
            imgSrc="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
            imgAlt="Portrait photography of man smiling" authorName="Charles Etoroma"
            authorSrc="https://unsplash.com/@charlesetoroma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            unsplashSrc="https://unsplash.com/photos/95UF6LXe-Lo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            footerText="Already have an account?" footerLinkSrc="/auth" footerLinkText="Sign In">
            <div v-show="accountState.isFirstStep">
                <h1 class="text-4xl font-thin py-8 w-full text-center">Register with</h1>
                <LazyAuthOauth />
                <div class="divider">or</div>
                <form @submit.prevent="verifyEmail" class="flex flex-col w-full items-center" autocomplete="off">
                    <div class="form-control w-full max-w-sm">
                        <label class="label">
                            <span class="label-text">Email</span>
                        </label>
                        <div class="join">
                            <span class="btn join-item no-animation cursor-default btn-active btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                    class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.7 1 3 2.3 3s2.2-1.3 2.2-3a9 9 0 1 0-2.6 6.4M16.5 12V8.2" />
                                </svg>
                            </span>
                            <input type="email" placeholder="your@email.com" class="input input-bordered w-full join-item"
                                v-model="formData.email" />
                        </div>
                    </div>
                    <button type="submit" :disabled="!formState.isEmailValid"
                        class="btn btn-primary btn-block max-w-sm my-4 group">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                            class="w-5 h-5 fill-none stroke-current group-hover:translate-x-1 transition-all ease-in-out duration-300"
                            viewBox="0 0 24 24" v-show="!requestState.isFetching">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                        <span class="loading loading-spinner loading-xs" v-show="requestState.isFetching"></span>
                    </button>
                </form>
            </div>
            <div v-show="accountState.isSecondStep">
                <h1 class="text-4xl font-thin py-8 w-full text-center">What should we call you?</h1>
                <form @submit.prevent="toggleStep" class="flex flex-col w-full items-center" autocomplete="off">
                    <div class="form-control w-full max-w-sm">
                        <label class="label">
                            <span class="label-text">Name</span>
                        </label>
                        <div class="join">
                            <span class="btn join-item no-animation cursor-default btn-active btn-ghost">
                                <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                    class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M15 9h3.8M15 12h3.8M15 15h3.8M4.4 19.5h15a2.3 2.3 0 0 0 2.3-2.3V6.8a2.3 2.3 0 0 0-2.3-2.3h-15a2.3 2.3 0 0 0-2.3 2.3v10.4a2.3 2.3 0 0 0 2.3 2.3Zm6-10.1a1.9 1.9 0 1 1-3.8 0 1.9 1.9 0 0 1 3.8 0Zm1.3 6.3a6.7 6.7 0 0 1-3.2.8 6.7 6.7 0 0 1-3.1-.8 3.4 3.4 0 0 1 6.3 0Z" />
                                </svg>
                            </span>
                            <input type="text" placeholder="Type your name here"
                                class="input input-bordered w-full join-item" v-model="formData.name" />
                        </div>
                    </div>
                    <button type="submit" :disabled="!formState.isNameValid"
                        class="btn btn-primary btn-block max-w-sm my-4 group">
                        Next
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                            class="w-5 h-5 fill-none stroke-current group-hover:translate-x-1 transition-all ease-in-out duration-300"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                        </svg>
                    </button>
                </form>
            </div>
            <div v-show="accountState.isThirdStep">
                <h1 class="text-4xl font-thin py-8 w-full text-center">And finally...</h1>
                <form @submit.prevent="formHandler" class="flex flex-col w-full items-center" autocomplete="off">
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
                    <button type="submit" :disabled="!formState.isPasswordValid"
                        class="btn btn-primary btn-block max-w-sm my-4">
                        <span class="loading loading-spinner loading-xs" v-if="requestState.isFetching"></span>
                        <span v-else>Register</span>
                    </button>
                </form>
            </div>
            <div v-show="accountState.isLastStep">
                <div class="w-full flex flex-wrap justify-center text-center gap-x-2">
                    <h3 class="text-5xl font-bold">🥳</h3>
                    <h3 class="text-5xl font-bold">Welcome aboard!</h3>
                    <h3 class="text-5xl font-bold">🎉</h3>
                </div>
                <p class="text-lg px-8 py-2 text-center">Check your email, we have sent you a link to confirm your account.
                </p>
            </div>
            <LazyAuthAlert :isSuccess="false" :message="requestState.message" v-show="requestState.isFail" />
        </NuxtLayout>
    </div>
</template>