<script setup lang="ts">
const { signIn } = useAuth();
</script>

<template>
    <div class="flex gap-2 w-full justify-center">
        <button @click="signIn(`google`)" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 16 16">
                <path
                    d="M15.5 6.6a9.4 9.4 0 0 1 .2 1.6 8 8 0 0 1-2.4 5.9A7.7 7.7 0 0 1 8 16 8 8 0 1 1 8 0a7.7 7.7 0 0 1 5.4 2L11 4.5a4.3 4.3 0 0 0-3-1.3c-2 0-3.9 1.4-4.5 3.3a4.8 4.8 0 0 0 0 3A4.8 4.8 0 0 0 8 12.8c1 0 2-.2 2.7-.7a3.7 3.7 0 0 0 1.6-2.5H8v-3z" />
            </svg>
            Google
        </button>
        <button @click="signIn(`twitter`)" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 16 16">
                <path
                    d="M5.03 15c6.03 0 9.34-5 9.34-9.33v-.43A6.7 6.7 0 0 0 16 3.54a6.7 6.7 0 0 1-1.89.52 3.3 3.3 0 0 0 1.45-1.82 6.5 6.5 0 0 1-2.09.8 3.29 3.29 0 0 0-5.6 2.99A9.32 9.32 0 0 1 1.12 2.6a3.29 3.29 0 0 0 1.02 4.38 3.3 3.3 0 0 1-1.49-.4v.04a3.29 3.29 0 0 0 2.63 3.22 3.2 3.2 0 0 1-.86.11 3 3 0 0 1-.62-.05 3.28 3.28 0 0 0 3.07 2.27 6.6 6.6 0 0 1-4.08 1.41 6 6 0 0 1-.78-.04A9.34 9.34 0 0 0 5.03 15" />
            </svg>
            Twitter
        </button>
        <button @click="signIn(`github`)" class="btn">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 16 16">
                <path
                    d="M8 0a8 8 0 0 0-2.5 15.6c.4 0 .5-.2.5-.4v-1.5c-2 .4-2.5-.5-2.7-1 0-.1-.5-.9-.8-1-.3-.2-.7-.6 0-.6.6 0 1 .6 1.2.8.7 1.2 1.9 1 2.4.7 0-.5.2-.9.5-1-1.8-.3-3.7-1-3.7-4 0-.9.3-1.6.8-2.2 0-.2-.3-1 .1-2 0 0 .7-.3 2.2.7a7.4 7.4 0 0 1 4 0c1.5-1 2.2-.8 2.2-.8.5 1.1.2 2 .1 2.1.5.6.8 1.3.8 2.2 0 3-1.9 3.7-3.6 4 .3.2.5.7.5 1.4v2.2c0 .2.1.5.5.4A8 8 0 0 0 16 8a8 8 0 0 0-8-8" />
            </svg>
            Github
        </button>
    </div>
</template>