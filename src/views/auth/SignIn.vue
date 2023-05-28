<template>
  <main
    class="w-full min-h-screen flex flex-row bg-base-100 transition-all ease-in-out duration-500"
  >
    <AuthImg
      imgPath="https://images.unsplash.com/photo-1626668011687-8a114cf5a34c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
      imgAlt="Smiling elderly woman in white, red and blue floral dress"
      authorName="Eduardo Barrios"
      authorReferral="https://unsplash.com/@koflights?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      imgReferral="https://unsplash.com/photos/XMCLLGGMMYU?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    />
    <section class="w-full lg:w-1/2 flex flex-col px-6 py-12 justify-between sm:gap-10 lg:py-6">
      <AuthHeader />
      <div class="flex flex-col items-center">
        <h1 class="text-3xl md:text-4xl lg:text-5xl text-center">Entre na sua conta</h1>
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
          <div class="form-control w-full max-w-sm">
            <label class="label">
              <span class="label-text">Senha</span>
            </label>
            <input
              type="password"
              class="input input-bordered w-full max-w-sm"
              v-model="formData.password"
            />
          </div>
          <div class="flex w-full max-w-sm justify-end">
            <router-link :to="{ name: 'recover' }" class="link link-primary"
              >Esqueceu sua senha?</router-link
            >
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
            Entrar
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
      <AuthFooter textOut="Não possui uma conta?" textIn="Crie uma aqui." routeName="signup" />
    </section>
  </main>
</template>

<script setup lang="ts">
import AuthImg from '@/components/auth/AuthImg.vue'
import AuthHeader from '@/components/auth/AuthHeader.vue'
import AuthFooter from '@/components/auth/AuthFooter.vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'
import { useUserStore } from '@/stores/user'
import { useFetch } from '@vueuse/core'
import router from '@/router'

const user = useUserStore()

const formData = reactive({
  email: '',
  password: ''
})

const strong = helpers.regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s])*$/)

const rules = computed(() => {
  return {
    email: { required, email },
    password: { required, minLength: minLength(6), strong }
  }
})

const v$ = useVuelidate(rules, formData)

const { execute, isFetching, error, onFetchResponse, data } = useFetch(
  'http://45.15.24.49:3000/auth/signin',
  {
    immediate: false
  }
)
  .post(formData)
  .json()

onFetchResponse((response) => {
  user.setToken(data.value.access_token)
  router.push({ name: 'dashboard' })
})
</script>
