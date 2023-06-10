<template>
  <DashboardHeader profile-pic="" />
  <DashboardMenu />
  <div class="flex flex-col items-center gap-10 w-full min-h-screen bg-base-200 py-28 px-5">
    <div class="flex h-full w-full flex-col gap-5 items-center">
      <h1 class="text-3xl font-bold">Indicadores</h1>
      <div class="w-full h-full flex sm:p-10 md:px-32 gap-5 flex-wrap">
        <div class="stats shadow w-full sm:w-fit">
          <div class="stat place-items-center">
            <div class="stat-title">Pacientes Cadastrados</div>
            <div class="stat-value">{{ info.numPatients }}</div>
          </div>
        </div>
        <div class="stats shadow w-full sm:w-fit">
          <div class="stat place-items-center">
            <div class="stat-title">Acessos</div>
            <div class="stat-value">{{ info.accessNumbers }}</div>
          </div>
        </div>
        <div class="stats shadow w-full sm:w-fit">
          <div class="stat place-items-center">
            <div class="stat-title">Palavras Scaneadas</div>
            <div class="stat-value">{{ info.wordsScanned }}</div>
          </div>
        </div>
        <div class="stats shadow w-full sm:w-fit">
          <div class="stat place-items-center">
            <div class="stat-title">Palavras Lidas</div>
            <div class="stat-value">{{ info.wordsRead }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardMenu from '@/components/dashboard/DashboardMenu.vue'
import { useUserStore } from '@/stores/user';
import { useFetch } from '@vueuse/core';
import { ref } from 'vue';

const api_path = import.meta.env.VITE_API_PATH

const user = useUserStore()

const info = ref({
  numPatients: 0,
  accessNumbers: 0,
  wordsScanned: 0,
  wordsRead: 0
});

const { onFetchResponse, data, onFetchError } = useFetch(
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

onFetchResponse((response) => {
  info.value.numPatients = Object.keys(data.value.patients).length
})

onFetchError((error) => {
  if (error == 'Forbidden') user.reset()
})
</script>
