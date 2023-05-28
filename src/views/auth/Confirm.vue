<template>
  <main class="w-full min-h-screen flex flex-row transition-all ease-in-out duration-500">
    <AuthImg
      imgPath="https://images.unsplash.com/photo-1521296797187-726205347ca9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1103&q=80"
      imgAlt="Young woman smiling with closing eyes while flipping her hair"
      authorName="Trung Thanh"
      authorReferral="https://unsplash.com/@trung18tuoi?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      imgReferral="https://unsplash.com/photos/rzJ4TEQZe4M?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    />
    <section class="w-full lg:w-1/2 flex flex-col px-6 py-12 justify-center sm:gap-10 lg:py-6">
      <div v-motion-fade-visible class="flex flex-col items-center gap-5" v-if="isFetching">
        <div
          class="animate-spin inline-block w-32 h-32 border-[3px] border-current border-t-transparent text-primary rounded-full"
          role="status"
          aria-label="loading"
        ></div>
      </div>
      <div v-motion-slide-visible-left class="flex flex-col items-center gap-5" v-else-if="error">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="h-32 w-32"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
          />
        </svg>

        <div>
          <h2 class="text-xl md:text-3xl text-center">Algo deu errado...</h2>
          <p class="text-base md:text-xl text-center">
            Verifique se a url dessa página é a mesma que foi enviada para o seu email.
          </p>
        </div>
      </div>
      <div v-motion-slide-visible-left class="flex flex-col items-center gap-5" v-else>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-32 h-32"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
        <div>
          <h2 class="text-xl md:text-3xl text-center">A sua conta foi confirmada com sucesso!</h2>
          <p class="text-base md:text-xl text-center">
            Vamos te redirecionar para a página de login em alguns segundos.
          </p>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import AuthImg from '@/components/auth/AuthImg.vue'
import router from '@/router'
import { useRoute } from 'vue-router'
import { useFetch } from '@vueuse/core'

const verification_token = useRoute().query.verificationToken

const { error, onFetchResponse, onFetchError, isFetching } = useFetch(
  'http://45.15.24.49:3000/auth/confirm',
  {
    headers: {
      Authorization: `Bearer ${verification_token}`
    }
  },
  { refetch: true }
)
  .post()
  .json()

onFetchResponse((response) => {
  setTimeout(() => {
    router.push({ name: 'signin' })
  }, 2500)
})

onFetchError((error) => {
  if (error.message == 'Forbidden') router.push({ name: 'signin' })
})
</script>
