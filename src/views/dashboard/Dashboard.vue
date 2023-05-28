<template>
  <DashboardHeader profile-pic="" />
  <DashboardMenu />
  <div class="flex flex-col items-center gap-5 w-full min-h-screen bg-base-200 py-28 px-5">
    <div class="prose">
      <h1>Pacientes</h1>
    </div>
    <span class="navbar bg-base-100 shadow-md rounded-box sm:w-2/3" v-show="isFetching">
      <div class="flex-none h-12 w-20 bg-base-300 animate-pulse rounded-md"></div>
      <div class="divider divider-horizontal"></div>
      <div class="flex-1 justify-between h-12 bg-base-300 animate-pulse rounded-md"></div>
      <div class="divider divider-horizontal"></div>
      <div class="flex-none justify-between h-12 w-20 bg-base-300 animate-pulse rounded-md"></div>
    </span>
    <nav
      class="navbar bg-base-100 shadow-md rounded-box sm:w-2/3 flex-nowrap flex-col"
      v-for="patient in patients"
    >
      <div class="sm:hidden inline">
        <p>{{ patient['name'] }}</p>
      </div>
      <div class="divider m-0 sm:hidden"></div>
      <div class="w-full">
        <div class="flex-none">
          <div class="tooltip" data-tip="Clique para copiar">
            <button class="btn btn-ghost">
              {{ patient['code'] }}
            </button>
          </div>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="flex-1 flex justify-center sm:justify-between items-center">
          <p class="hidden sm:inline">{{ patient['name'] }}</p>
          <button class="btn btn-ghost gap-2">
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
                d="M10.5 6a7.5 7.5 0 107.5 7.5h-7.5V6z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M13.5 10.5H21A7.5 7.5 0 0013.5 3v7.5z"
              />
            </svg>
            <p class="hidden lg:inline">Indicadores do Paciente</p>
          </button>
        </div>
        <div class="divider divider-horizontal"></div>
        <div class="flex-none">
          <button class="btn btn-ghost gap-2" @click="showPatientInfo(patient)">
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
                d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"
              />
            </svg>
            <p class="hidden lg:inline">Informações do Paciente</p>
          </button>
        </div>
      </div>
    </nav>
    <nav class="navbar bg-base-100 shadow-md rounded-box justify-center sm:w-2/3">
      <button class="btn btn-ghost btn-block gap-2" @click="isRegisterModalOpen = true">
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
            d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
          />
        </svg>
        <p>Cadastrar novo paciente</p>
      </button>
    </nav>
    <nav class="navbar bg-base-100 shadow-md rounded-box justify-center sm:w-2/3">
      <a
        href="https://buy.stripe.com/eVag0v19c8Tx0xO289"
        class="btn btn-ghost btn-block gap-2"
        tabindex="0"
      >
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
            d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"
          />
        </svg>
        <p>Assinar mais vagas</p>
      </a>
    </nav>
  </div>
  <div
    class="flex w-full h-full min-h-screen bg-neutral/80 absolute top-0 left-0 z-50 justify-center items-start md:items-center"
    v-show="isRegisterModalOpen"
  >
    <form
      class="flex bg-neutral-100 w-full md:w-1/2 flex-col md:rounded-lg shadow-md px-10 py-2"
      @submit.prevent="fetchRegister"
      autocomplete="off"
    >
      <h2 class="text-center text-2xl font-bold my-5">Cadastrar novo paciente</h2>
      <h3 class="font-bold text-lg">Informações Pessoais</h3>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Nome Completo</span>
          </label>
          <input
            type="text"
            placeholder="João da Silva"
            class="input input-bordered w-full"
            v-model="registerFormData.name"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">CNS <sup>(Opcional)</sup></span>
          </label>
          <input
            type="text"
            placeholder="123 4567 8910 1112"
            class="input input-bordered w-full"
            v-model="registerFormData.cns"
          />
        </div>
      </div>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Data Nascimento</span>
          </label>
          <input
            type="date"
            placeholder="2023-01-01"
            class="input input-bordered w-full"
            v-model="registerFormData.birthdate"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Genero <sup>(Opcional)</sup></span>
          </label>
          <input
            type="text"
            placeholder="Masculino"
            class="input input-bordered w-full"
            v-model="registerFormData.gender"
          />
        </div>
      </div>
      <hr class="my-4" />
      <h3 class="font-bold text-lg">Contato</h3>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email <sup>(Opcional)</sup></span>
          </label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            class="input input-bordered w-full"
            v-model="registerFormData.email"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Telefone <sup>(Opcional)</sup></span>
          </label>
          <input
            type="tel"
            placeholder="(01) 12345-6789"
            class="input input-bordered w-full"
            v-maska
            data-maska="(##) #####-####"
            v-model="registerFormData.phone"
          />
        </div>
      </div>
      <hr class="my-4" />
      <h3 class="font-bold text-lg">Responsável</h3>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Nome Completo <sup>(Opcional)</sup></span>
          </label>
          <input
            type="text"
            placeholder="João da Silva"
            class="input input-bordered w-full"
            v-model="registerFormData.guardianName"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Parentesco <sup>(Opcional)</sup></span>
          </label>
          <input
            type="text"
            placeholder="Pai"
            class="input input-bordered w-full"
            v-model="registerFormData.guardianKinship"
          />
        </div>
      </div>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email <sup>(Opcional)</sup></span>
          </label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            class="input input-bordered w-full"
            v-model="registerFormData.guardianEmail"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Telefone <sup>(Opcional)</sup></span>
          </label>
          <input
            type="tel"
            placeholder="(01) 12345-6789"
            class="input input-bordered w-full"
            v-maska
            data-maska="(##) #####-####"
            v-model="registerFormData.guardianPhone"
          />
        </div>
      </div>
      <div class="my-4 justify-between w-full flex">
        <label for="modal-register" class="btn btn-error" @click="cancelRegister()">Cancelar</label>
        <button type="submit" class="btn btn-primary" :disabled="vRegister.$invalid">
          Cadastrar
        </button>
      </div>
    </form>
  </div>
  <div
    class="flex w-full h-full min-h-screen bg-neutral/80 absolute top-0 left-0 z-50 justify-center items-start md:items-center"
    v-show="isInfoModalOpen"
  >
    <form
      class="flex bg-neutral-100 w-full md:w-1/2 flex-col md:rounded-lg shadow-md px-10 py-2"
      @submit.prevent
      autocomplete="off"
    >
      <h2 class="text-center text-2xl font-bold my-5">Informações do Paciente</h2>
      <h3 class="font-bold text-lg">Informações Pessoais</h3>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Nome Completo</span>
          </label>
          <input
            type="text"
            placeholder="João da Silva"
            class="input input-bordered w-full"
            v-model="updateFormData.name"
            :disabled="!isInfoEditing"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">CNS <sup>(Opcional)</sup></span>
          </label>
          <input
            type="text"
            placeholder="123 4567 8910 1112"
            class="input input-bordered w-full"
            v-model="updateFormData.cns"
            :disabled="!isInfoEditing"
          />
        </div>
      </div>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Data Nascimento</span>
          </label>
          <input
            type="date"
            placeholder="2023-01-01"
            class="input input-bordered w-full"
            v-model="updateFormData.birthdate"
            :disabled="!isInfoEditing"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Genero <sup>(Opcional)</sup></span>
          </label>
          <input
            type="text"
            placeholder="Masculino"
            class="input input-bordered w-full"
            v-model="updateFormData.gender"
            :disabled="!isInfoEditing"
          />
        </div>
      </div>
      <hr class="my-4" />
      <h3 class="font-bold text-lg">Contato</h3>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email <sup>(Opcional)</sup></span>
          </label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            class="input input-bordered w-full"
            v-model="updateFormData.email"
            :disabled="!isInfoEditing"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Telefone <sup>(Opcional)</sup></span>
          </label>
          <input
            type="tel"
            placeholder="(01) 12345-6789"
            class="input input-bordered w-full"
            v-maska
            data-maska="(##) #####-####"
            v-model="updateFormData.phone"
            :disabled="!isInfoEditing"
          />
        </div>
      </div>
      <hr class="my-4" />
      <h3 class="font-bold text-lg">Responsável</h3>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Nome Completo <sup>(Opcional)</sup></span>
          </label>
          <input
            type="text"
            placeholder="João da Silva"
            class="input input-bordered w-full"
            v-model="updateFormData.guardianName"
            :disabled="!isInfoEditing"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Parentesco <sup>(Opcional)</sup></span>
          </label>
          <input
            type="text"
            placeholder="Pai"
            class="input input-bordered w-full"
            v-model="updateFormData.guardianKinship"
            :disabled="!isInfoEditing"
          />
        </div>
      </div>
      <div class="flex flex-row gap-x-5 flex-wrap md:flex-nowrap">
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Email <sup>(Opcional)</sup></span>
          </label>
          <input
            type="email"
            placeholder="exemplo@email.com"
            class="input input-bordered w-full"
            v-model="updateFormData.guardianEmail"
            :disabled="!isInfoEditing"
          />
        </div>
        <div class="form-control w-full">
          <label class="label">
            <span class="label-text">Telefone <sup>(Opcional)</sup></span>
          </label>
          <input
            type="tel"
            placeholder="(01) 12345-6789"
            class="input input-bordered w-full"
            v-maska
            data-maska="(##) #####-####"
            v-model="updateFormData.guardianPhone"
            :disabled="!isInfoEditing"
          />
        </div>
      </div>
      <div class="my-4 justify-between w-full flex" v-if="!isInfoEditing">
        <button class="btn btn-error" @click="isInfoModalOpen = false">Fechar</button>
        <button class="btn btn-primary" @click="isInfoEditing = true">Editar Paciente</button>
      </div>
      <div class="my-4 justify-between w-full flex" v-else>
        <button class="btn btn-error" @click="isInfoEditing = false">Cancelar Edição</button>
        <button class="btn btn-error btn-outline" @click="deletePatientRequest.execute()">
          Deletar Paciente
        </button>
        <button class="btn btn-primary" :disabled="vUpdate.$invalid" @click="sendUpdateRequest">
          Aplicar Edição
        </button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardMenu from '@/components/dashboard/DashboardMenu.vue'
import { useUserStore } from '@/stores/user'
import { vMaska } from 'maska'
import { useFetch } from '@vueuse/core'
import { computed, reactive, ref } from 'vue'
import useVuelidate from '@vuelidate/core'
import { email, required } from '@vuelidate/validators'

const api_path = import.meta.env.VITE_API_PATH;

const user = useUserStore()

// FETCH PATIENTS
const patients = ref([])

const { onFetchResponse, data, onFetchError, isFetching, execute } = useFetch(
  `${api_path}/patients`,
  {
    headers: {
      Authorization: `Bearer ${user.getToken}`
    }
  },
  { refetch: true }
)
  .get()
  .json()

onFetchResponse((response) => (patients.value = data.value.patients))

onFetchError((error) => {
  if (error == 'Forbidden') user.reset()
})

// REGISTER PATIENTS
const isRegisterModalOpen = ref(false)

const cancelRegister = () => {
  isRegisterModalOpen.value = false
  registerFormData.name = ''
  registerFormData.birthdate = ''
  registerFormData.cns = undefined
  registerFormData.gender = undefined
  registerFormData.email = undefined
  registerFormData.phone = undefined
  registerFormData.guardianName = undefined
  registerFormData.guardianKinship = undefined
  registerFormData.guardianEmail = undefined
  registerFormData.guardianPhone = undefined
}

const registerFormData = reactive({
  name: '',
  birthdate: '',
  cns: undefined,
  gender: undefined,
  email: undefined,
  phone: undefined,
  guardianName: undefined,
  guardianKinship: undefined,
  guardianEmail: undefined,
  guardianPhone: undefined
} as any)

const registerRules = computed(() => {
  return {
    name: { required },
    birthdate: { required },
    cns: {},
    gender: {},
    email: { email },
    phone: {},
    guardianName: {},
    guardianKinship: {},
    guardianEmail: { email },
    guardianPhone: {}
  }
})

const vRegister = useVuelidate(registerRules, registerFormData)

const fetchRegister = () => {
  if (registerFormData.phone != undefined)
    registerFormData.phone = registerFormData.phone.replace(/[^A-Z0-9]/gi, '')
  if (registerFormData.guardianPhone != undefined)
    registerFormData.guardianPhone = registerFormData.guardianPhone.replace(/[^A-Z0-9]/gi, '')
  registerFormData.birthdate = new Date(registerFormData.birthdate).toISOString()
  registerPatientRequest.execute()
}

const registerPatientRequest = useFetch(
  `${api_path}/patients/register`,
  {
    headers: {
      Authorization: `Bearer ${user.getToken}`
    }
  },
  { immediate: false }
)
  .post(registerFormData)
  .json()
registerPatientRequest.onFetchResponse((response) => {
  cancelRegister()
  execute()
})

// UPDATE PATIENTS
const isInfoModalOpen = ref(false)
const isInfoEditing = ref(false)

const updateFormData = reactive({
  id: undefined,
  name: '',
  birthdate: '',
  cns: undefined,
  gender: undefined,
  email: undefined,
  phone: undefined,
  guardianName: undefined,
  guardianKinship: undefined,
  guardianEmail: undefined,
  guardianPhone: undefined
} as any)

const updateRules = computed(() => {
  return {
    id: {},
    name: { required },
    birthdate: { required },
    cns: {},
    gender: {},
    email: { email },
    phone: {},
    guardianName: {},
    guardianKinship: {},
    guardianEmail: { email },
    guardianPhone: {}
  }
})

const vUpdate = useVuelidate(updateRules, updateFormData)

const showPatientInfo = (patientInfo: any) => {
  isInfoModalOpen.value = true
  updateFormData.id = patientInfo.id
  updateFormData.name = patientInfo.name
  updateFormData.birthdate = patientInfo.birthdate
  updateFormData.cns = patientInfo.cns
  updateFormData.gender = patientInfo.gender
  updateFormData.email = patientInfo.email
  updateFormData.phone = patientInfo.phone
  updateFormData.guardianName = patientInfo.guardianName
  updateFormData.guardianKinship = patientInfo.guardianKinship
  updateFormData.guardianEmail = patientInfo.guardianEmail
  updateFormData.guardianPhone = patientInfo.guardianPhone
}

const sendUpdateRequest = () => {
  if (updateFormData.phone != undefined)
    updateFormData.phone = updateFormData.phone.replace(/[^A-Z0-9]/gi, '')
  if (updateFormData.guardianPhone != undefined)
    updateFormData.guardianPhone = updateFormData.guardianPhone.replace(/[^A-Z0-9]/gi, '')
  updateFormData.birthdate = new Date(updateFormData.birthdate).toISOString()
  updatePatientRequest.execute()
}

const updatePatientRequest = useFetch(
  `${api_path}/patients/`,
  {
    headers: {
      Authorization: `Bearer ${user.getToken}`
    }
  },
  { immediate: false }
)
  .patch(updateFormData)
  .json()
updatePatientRequest.onFetchResponse((response) => {
  isInfoModalOpen.value = false
  isInfoEditing.value = false
  execute()
})

const deletePatientRequest = useFetch(
  `${api_path}/patients/`,
  {
    headers: {
      Authorization: `Bearer ${user.getToken}`
    }
  },
  { immediate: false }
)
  .delete(updateFormData)
  .json()
deletePatientRequest.onFetchResponse((response) => {
  isInfoModalOpen.value = false
  isInfoEditing.value = false
  execute()
})
</script>
