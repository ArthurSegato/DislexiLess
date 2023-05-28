<template>
  <main class="w-full min-h-screen flex flex-row transition-all ease-in-out duration-500">
    <AuthImg
      imgPath="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      imgAlt="Smiling woman wearing gray hoodie"
      authorName="Ivana Cajina"
      authorReferral="https://unsplash.com/@von_co?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      imgReferral="https://unsplash.com/photos/dnL6ZIpht2s?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
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
          <h2 class="text-xl md:text-3xl text-center">Dá uma olhada no seu email!</h2>
          <p class="text-base md:text-xl text-center">
            Já enviamos as intruções de como recuperar a sua senha por lá.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center" v-else>
        <h1 class="text-3xl md:text-4xl lg:text-5xl text-center">Recupere a sua senha</h1>
        <form
          v-motion-slide-visible-right
          @submit.prevent="execute()"
          class="flex flex-col p-8 w-full sm:w-10/12 lg:w-8/12 items-center"
          autocomplete="off"
        >
          <div class="form-control w-full max-w-sm">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="email"
              placeholder="exemplo@email.com"
              class="input input-bordered w-full max-w-sm"
              v-model="formData.email"
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
            Recuperar
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
import { useVuelidate } from '@vuelidate/core/index.js'
import { required, email } from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'
import { useFetch } from '@vueuse/core'

const send = ref(false)

const formData = reactive({
  email: ''
})

const rules = computed(() => {
  return {
    email: { required, email }
  }
})

const v$ = useVuelidate(rules, formData)

const { execute, isFetching, error, onFetchResponse } = useFetch(
  'http://45.15.24.49:3000/auth/recover',
  {
    immediate: false
  }
)
  .post(formData)
  .json()

onFetchResponse((response) => {
  send.value = true
})
</script>
