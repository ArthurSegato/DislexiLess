<script setup lang="ts">
import { isEmail, isStrongPassword } from 'validator';

// PASSWORD TOGGLE
const showPassword = ref(false);

// LOGIN FORM
const form = reactive({
    email: '',
    password: ''
})

const isFormValid = computed(() => isEmail(form.email) && isStrongPassword(form.password));

// ERROR HANDLING
const error = reactive({
    isVisible: false,
    message: ""
});
const onError = (err: any) => {
    error.isVisible = true;
    error.message = `${err?.data.statusCode}: ${err?.data.message}`;
}
</script>

<template>
    <div>
        <NuxtLayout name="auth"
            imgSrc="https://images.unsplash.com/photo-1626668011687-8a114cf5a34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
            imgAlt="Smiling elderly woman in white, red and blue floral dress" authorName="Eduardo Barrios"
            authorSrc="https://unsplash.com/@koflights?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            unsplashSrc="https://unsplash.com/photos/XMCLLGGMMYU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
            footerText="Don't have an account?" footerLinkSrc="/auth/register" footerLinkText="Create a new one">
            <div>
                <h1 class="text-4xl font-thin py-8 w-full text-center">Sign In with</h1>
                <LazyAuthOauth />
                <div class="divider">or</div>
                <form @submit.prevent="authLogin(form.email, form.password).catch(onError)"
                    class="flex flex-col w-full items-center" autocomplete="off">
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
                                v-model="form.email" />
                        </div>
                    </div>
                    <div class="form-control w-full max-w-sm">
                        <label class="label">
                            <span class="label-text">Password</span>
                        </label>
                        <div class="join">
                            <input :type="showPassword ? 'text' : 'password'" class="input input-bordered w-full join-item"
                                v-model="form.password" />
                            <button class="btn join-item" @click="showPassword = !showPassword" type="button">
                                <svg xmlns="http://www.w3.org/2000/svg" stroke-width="1.5"
                                    class="w-6 h-6 fill-none stroke-current" viewBox="0 0 24 24" v-if="!showPassword">
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
                    <div class="flex w-full max-w-sm justify-end">
                        <NuxtLink to="/auth/recover" class="link link-primary">Forgot your password?</NuxtLink>
                    </div>
                    <button type="submit" :disabled="!isFormValid" class="btn btn-primary btn-block max-w-sm my-4">Sign
                        In</button>
                </form>
            </div>
            <div class="p-4 fixed z-10 bottom-0 transition-all ease-in-out duration-300" v-show="error.isVisible">
                <div role="alert" class="alert alert-error flex">
                    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current shrink-0 h-6 w-6 fill-none"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{{ error.message }}</span>
                </div>
            </div>
        </NuxtLayout>
    </div>
</template>