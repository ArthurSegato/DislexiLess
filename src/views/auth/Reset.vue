<template>
  <main class="w-full min-h-screen flex flex-row transition-all ease-in-out duration-500">
    <AuthImg
      imgPath="https://images.unsplash.com/photo-1607453998774-d533f65dac99?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      imgAlt="3 smiling kids hugging"
      authorName="Nathan Dumlao"
      authorReferral="https://unsplash.com/@nate_dumlao?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      imgReferral="https://unsplash.com/photos/P5MXtYfgmmw?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    />
    <section class="w-full lg:w-1/2 flex flex-col px-6 py-12 justify-between sm:gap-10 lg:py-6">
      <AuthHeader />
      <div v-motion-slide-visible-left class="flex flex-col items-center" v-if="send">
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
          <h2 class="text-xl md:text-3xl text-center">Sua senha foi atualizada!</h2>
          <p class="text-base md:text-xl text-center">
            Vamos te redirecionar para a tela de login em alguns instantes.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center" v-else>
        <h1 class="text-3xl md:text-4xl lg:text-5xl text-center">Redefina sua senha</h1>
        <form
          v-motion-slide-visible-right
          @submit.prevent="execute()"
          class="flex flex-col p-8 w-full sm:w-10/12 lg:w-8/12 items-center"
          autocomplete="off"
        >
          <div class="form-control w-full max-w-sm">
            <label class="label">
              <span class="label-text">Nova senha</span>
            </label>
            <input
              type="password"
              class="input input-bordered w-full max-w-sm"
              v-model="formData.password"
            />
          </div>
          <div class="form-control w-full max-w-sm">
            <label class="label">
              <span class="label-text">Nova senha confirmação</span>
            </label>
            <input
              type="password"
              class="input input-bordered w-full max-w-sm"
              v-model="formData.rePassword"
            />
          </div>
          <button
            class="btn btn-primary btn-block max-w-sm my-4 loading"
            v-if="isFetching"
          ></button>
          <button
            type="submit"
            class="btn btn-primary btn-block max-w-sm my-4"
            v-else
            :disabled="v$.$invalid"
          >
            Redefinir
          </button>
          <div class="alert alert-error shadow-lg max-w-sm" v-show="error">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="stroke-current flex-shrink-0 h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span>{{ error }}</span>
            </div>
          </div>
        </form>
      </div>
      <AuthFooter
        textOut="Lembrou da sua senha?"
        textIn="Entre na sua conta aqui."
        routeName="signin"
      />
    </section>
  </main>
</template>

<script setup lang="ts">
import AuthImg from '@/components/auth/AuthImg.vue'
import AuthHeader from '@/components/auth/AuthHeader.vue'
import AuthFooter from '@/components/auth/AuthFooter.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, minLength, helpers, sameAs } from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'
import { useFetch } from '@vueuse/core'
import { useRoute } from 'vue-router'
import router from '@/router'

const api_path = import.meta.env.VITE_API_PATH;

const verification_token = useRoute().query.verificationToken

const send = ref(false)

const formData = reactive({
  password: '',
  rePassword: ''
})

const strong = helpers.regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s])*$/)

const rules = computed(() => {
  return {
    password: { required, minLength: minLength(6), strong },
    rePassword: { sameAs: sameAs(formData.password) }
  }
})

const v$ = useVuelidate(rules, formData)

const { execute, isFetching, error, onFetchResponse } = useFetch(
  `${api_path}/auth/reset`,
  {
    headers: {
      Authorization: `Bearer ${verification_token}`
    }
  },
  {
    immediate: false
  }
)
  .post(formData)
  .json()

onFetchResponse((response) => {
  send.value = true
  setTimeout(() => {
    router.push({ name: 'signin' })
  }, 2500)
})
</script>
