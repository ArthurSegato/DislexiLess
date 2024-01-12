<script setup lang="ts">
const passwordType = ref("password");

const signInFail = ref(false);

const formData = reactive({
    email: '',
    password: '',
    isValid: false
})

watch(() => [formData.email, formData.password],
    async ([email, password]) => {
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) formData.isValid = false;
        else if (password.length < 8) formData.isValid = false;
        else formData.isValid = true;
    }
)

const formHandler = async () => {
    try {
        const request = await $fetch('https://httpbin.org/post', {
            method: 'POST',
            body: {
                email: formData.email,
                password: formData.password
            }
        });

        formData.email = '';
        formData.password = '';
        formData.isValid = false;

        await navigateTo('/dashboard');
    }
    catch (error) {
        signInFail.value = true;
        setTimeout(async () => signInFail.value = false, 5000);
    }
}

const togglePassword = async () => passwordType.value = passwordType.value === "password" ? "text" : "password";
</script>

<template>
    <NuxtLayout name="auth"
        imgSrc="https://images.unsplash.com/photo-1626668011687-8a114cf5a34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
        imgAlt="Smiling elderly woman in white, red and blue floral dress" authorName="Eduardo Barrios"
        authorSrc="https://unsplash.com/@koflights?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        unsplashSrc="https://unsplash.com/photos/XMCLLGGMMYU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        footerText="Don't have an account?" footerLinkSrc="/auth/register" footerLinkText="Create a new one">
        <h1 class="text-4xl font-thin py-8 w-full text-center">Sign In to your account</h1>
        <form @submit.prevent="formHandler" class="flex flex-col w-full items-center" autocomplete="off">
            <div class="form-control w-full max-w-sm">
                <label class="label">
                    <span class="label-text">Email</span>
                </label>
                <div class="join">
                    <input type="email" placeholder="your@email.com" class="input input-bordered w-full join-item"
                        v-model="formData.email" />
                    <span class="btn join-item no-animation cursor-default btn-active btn-ghost">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="w-6 h-6 fill-none stroke-current"
                            viewBox="0 0 24 24">
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
                    <input :type="passwordType" class="input input-bordered w-full join-item" v-model="formData.password" />
                    <button class="btn join-item" @click="togglePassword" type="button">
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="w-6 h-6 fill-none stroke-current"
                            viewBox="0 0 24 24" v-if="passwordType != 'password'">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M4 8.2A10.5 10.5 0 0 0 2 12a10.5 10.5 0 0 0 12.9 7.1M6.2 6.2A10.5 10.5 0 0 1 12 4.5c4.8 0 8.8 3.2 10 7.5a10.5 10.5 0 0 1-4.2 5.8M6.2 6.2 3 3m3.2 3.2L10 10m7.9 7.9L21 21m-3.2-3.2L14 14m0 0a3 3 0 1 0-4-4m4 4-4-4" />
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5" class="w-6 h-6 fill-none stroke-current"
                            viewBox="0 0 24 24" v-else>
                            <path stroke-linecap="round" stroke-linejoin="round"
                                d="M2 12.3a1 1 0 0 1 0-.6 10.5 10.5 0 0 1 20 0v.6a10.5 10.5 0 0 1-20 0Z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div class="flex w-full max-w-sm justify-end">
                <NuxtLink to="/auth/recover" class="link link-primary">Forgot your password?</NuxtLink>
            </div>
            <button type="submit" :disabled="!formData.isValid" class="btn btn-primary btn-block max-w-sm my-4">Sign
                In</button>
        </form>
        <div class="p-4 fixed z-10 bottom-0 transition-all ease-in-out duration-300" v-show="signInFail">
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