<template>
  <main class="w-full min-h-screen flex flex-row transition-all ease-in-out duration-500">
    <AuthImg
      imgPath="https://images.unsplash.com/photo-1506277886164-e25aa3f4ef7f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
      imgAlt="Portrait photography of man smiling"
      authorName="Charles Etoroma"
      authorReferral="https://unsplash.com/@charlesetoroma?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
      imgReferral="https://unsplash.com/photos/95UF6LXe-Lo?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
    />
    <section
      class="w-full lg:w-1/2 flex flex-col px-6 py-12 justify-between sm:gap-10 lg:py-6 bg-base-100"
    >
      <AuthHeader />
      <div
        v-motion-slide-visible-left
        class="flex flex-col items-center gap-5 text-base-content fill-base-content"
        v-if="statusCode == 201"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="h-32" viewBox="0 0 16 16">
          <path
            fill-rule="evenodd"
            d="M10.354 6.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path
            d="m10.273 2.513-.921-.944.715-.698.622.637.89-.011a2.89 2.89 0 0 1 2.924 2.924l-.01.89.636.622a2.89 2.89 0 0 1 0 4.134l-.637.622.011.89a2.89 2.89 0 0 1-2.924 2.924l-.89-.01-.622.636a2.89 2.89 0 0 1-4.134 0l-.622-.637-.89.011a2.89 2.89 0 0 1-2.924-2.924l.01-.89-.636-.622a2.89 2.89 0 0 1 0-4.134l.637-.622-.011-.89a2.89 2.89 0 0 1 2.924-2.924l.89.01.622-.636a2.89 2.89 0 0 1 4.134 0l-.715.698a1.89 1.89 0 0 0-2.704 0l-.92.944-1.32-.016a1.89 1.89 0 0 0-1.911 1.912l.016 1.318-.944.921a1.89 1.89 0 0 0 0 2.704l.944.92-.016 1.32a1.89 1.89 0 0 0 1.912 1.911l1.318-.016.921.944a1.89 1.89 0 0 0 2.704 0l.92-.944 1.32.016a1.89 1.89 0 0 0 1.911-1.912l-.016-1.318.944-.921a1.89 1.89 0 0 0 0-2.704l-.944-.92.016-1.32a1.89 1.89 0 0 0-1.912-1.911l-1.318.016z"
          />
        </svg>
        <div>
          <h2 class="text-xl md:text-3xl text-center">A sua conta foi criada com sucesso!</h2>
          <p class="text-base md:text-xl text-center">
            Enviamos um email para você confirmar a sua conta.
          </p>
        </div>
      </div>
      <div class="flex flex-col items-center" v-else>
        <h1 class="text-3xl md:text-4xl lg:text-5xl text-center">Crie a sua conta!</h1>
        <form
          v-motion-slide-visible-right
          @submit.prevent="execute()"
          class="flex flex-col p-8 w-full sm:w-10/12 lg:w-8/12 items-center"
          autocomplete="off"
        >
          <div class="form-control w-full max-w-sm">
            <label class="label">
              <span class="label-text">Nome</span>
            </label>
            <input
              type="text"
              placeholder="João da Silva"
              class="input input-bordered w-full max-w-sm"
              v-model="formData.name"
            />
          </div>
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
            Criar
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
      <AuthFooter textOut="Ja se registrou?" textIn="Entre na sua conta aqui." routeName="signin" />
    </section>
  </main>
</template>

<script setup lang="ts">
import AuthImg from '@/components/auth/AuthImg.vue'
import AuthHeader from '@/components/auth/AuthHeader.vue'
import AuthFooter from '@/components/auth/AuthFooter.vue'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { reactive, computed } from 'vue'
import { useFetch } from '@vueuse/core'
import useVuelidate from '@vuelidate/core'
import router from '@/router'

const api_path = import.meta.env.VITE_API_PATH;

const formData = reactive({
  name: '',
  email: '',
  password: ''
})

const strong = helpers.regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s])*$/)

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    password: { required, minLength: minLength(6), strong }
  }
})

const v$ = useVuelidate(rules, formData)

const { execute, isFetching, error, statusCode, onFetchResponse } = useFetch(`${api_path}/auth/signup`, {
  immediate: false
})
  .post(formData)
  .json()
onFetchResponse((response) => {
  router.push({ name: 'signin'});
})
</script>
