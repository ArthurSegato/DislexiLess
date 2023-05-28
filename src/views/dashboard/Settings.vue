<template>
  <DashboardHeader profile-pic="" />
  <DashboardMenu />
  <div class="flex flex-col items-center gap-10 w-full min-h-screen bg-base-200 py-28 px-5">
    <div class="prose">
      <h1>Configurações</h1>
    </div>
    <div class="card bg-base-100 shadow-xl lg:w-1/3">
      <div class="card-body">
        <h2 class="card-title">Perfil</h2>
        <form @submit.prevent="" autocomplete="off" class="my-4">
          <div class="avatar w-full justify-center">
            <span class="w-24 h-24 bg-base-300 rounded-full animate-pulse" v-if="isFetching"></span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-24 h-24"
              v-else
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
          </div>
          <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
            <div class="form-control w-full animate-pulse" v-if="isFetching">
              <span class="h-5 my-2 w-12 bg-base-300"></span>
              <span class="h-12 w-full bg-base-300 rounded-md"></span>
            </div>
            <div class="form-control w-full" v-else>
              <label class="label">
                <span class="label-text">Nome</span>
              </label>
              <input
                type="text"
                placeholder="João da Silva"
                class="input input-bordered w-full"
                v-model="formData.name"
                :disabled="!settings.getEditing"
              />
            </div>
            <div class="form-control w-full animate-pulse" v-if="isFetching">
              <span class="h-5 my-2 w-12 bg-base-300"></span>
              <span class="h-12 w-full bg-base-300 rounded-md"></span>
            </div>
            <div class="form-control w-full" v-else>
              <label class="label">
                <span class="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="exemplo@email.com"
                class="input input-bordered w-full"
                v-model="formData.email"
                :disabled="!settings.getEditing"
              />
            </div>
          </div>
          <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
            <div class="form-control w-full animate-pulse" v-if="isFetching">
              <span class="h-5 my-2 w-12 bg-base-300"></span>
              <span class="h-12 w-full bg-base-300 rounded-md"></span>
            </div>
            <div class="form-control w-full" v-else>
              <label class="label">
                <span class="label-text">Telefone</span>
              </label>
              <input
                type="tel"
                placeholder="(01) 12345-6789"
                v-maska
                data-maska="(##) #####-####"
                class="input input-bordered w-full"
                v-model="formData.phone"
                :disabled="!settings.getEditing"
              />
            </div>
            <div class="form-control w-full animate-pulse" v-if="isFetching">
              <span class="h-5 my-2 w-12 bg-base-300"></span>
              <span class="h-12 w-full bg-base-300 rounded-md"></span>
            </div>
            <div class="form-control w-full" v-else>
              <label class="label">
                <span class="label-text">Senha</span>
              </label>
              <input
                type="password"
                class="input input-bordered w-full"
                v-model="formData.password"
                :disabled="!settings.getEditing"
              />
            </div>
          </div>
          <div class="card-actions justify-between mt-3" v-show="!settings.getEditing">
            <a href="#deleteModal" class="btn btn-error btn-outline btn-block sm:w-fit" @click=""
              >Encerrar Conta</a
            >
            <button class="btn btn-primary btn-block sm:w-fit" @click="settings.startEditing()">
              Editar Informações
            </button>
          </div>
          <div class="card-actions justify-between mt-3" v-show="settings.getEditing">
            <button class="btn btn-error btn-block sm:w-fit" @click="settings.stopEditing()">
              Cancelar Alterações
            </button>
            <button
              class="btn btn-primary btn-block sm:w-fit"
              @click="editUser.execute()"
              :disabled="v$.$invalid"
            >
              Salvar Alterações
            </button>
          </div>
        </form>
      </div>
    </div>
    <div class="card bg-base-100 shadow-xl lg:w-1/3">
      <div class="card-body">
        <h2 class="card-title">Assinaturas</h2>
        <div class="card-actions justify-between">
          <a
            href="https://billing.stripe.com/p/login/6oEdRl8Gdd3raXe9AA"
            class="btn btn-primary btn-block gap-2"
            @click=""
          >
            Gerenciar Assinaturas
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-5 h-5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="modal" id="deleteModal">
    <div class="modal-box">
      <h3 class="font-bold text-lg">Você tem certeza que deseja encerrar a sua conta?</h3>
      <p class="py-4">
        Todas as informações, suas e dos seus pacientes, serão apagadas para sempre!
      </p>
      <div class="modal-action flex-wrap sm:flex-nowrap gap-2 sm:justify-between">
        <a href="#" class="btn btn-primary btn-block sm:btn-wide"> Ainda não </a>
        <button class="btn btn-error btn-block sm:w-fit" @click="deleteUser.execute()">
          Encerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardMenu from '@/components/dashboard/DashboardMenu.vue'
import { useUserStore } from '@/stores/user'
import { useSettingsStore } from '@/stores/settings'
import { reactive, computed } from 'vue'
import useVuelidate from '@vuelidate/core'
import { required, email, minLength, helpers } from '@vuelidate/validators'
import { vMaska } from 'maska'
import { useFetch } from '@vueuse/core'

const user = useUserStore()
const settings = useSettingsStore()

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  password: ''
})

const strong = helpers.regex(/^(?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\w\d\s:])([^\s])*$/)

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    phone: {},
    password: { required, minLength: minLength(6), strong }
  }
})

const v$ = useVuelidate(rules, formData)

const editUser = useFetch(
  'http://45.15.24.49:3000/users/me',
  {
    headers: {
      Authorization: `Bearer ${user.getToken}`
    }
  },
  { immediate: false }
)
  .patch(formData)
  .json()

editUser.onFetchResponse(() => {
  settings.stopEditing()
})

const deleteUser = useFetch(
  'http://45.15.24.49:3000/users/me',
  {
    headers: {
      Authorization: `Bearer ${user.getToken}`
    }
  },
  { immediate: false }
)
  .delete()
  .json()

deleteUser.onFetchResponse(() => user.reset())

const { onFetchResponse, data, onFetchError, isFetching } = useFetch(
  'http://45.15.24.49:3000/users/me',
  {
    headers: {
      Authorization: `Bearer ${user.getToken}`
    }
  },
  { refetch: true }
)
  .get()
  .json()

onFetchResponse((response) => {
  formData.name = data.value.name
  formData.email = data.value.email
  formData.phone = data.value.phone
})

onFetchError((error) => {
  if (error == 'Forbidden') user.reset()
})
</script>
