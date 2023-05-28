<template>
  <DashboardHeader profile-pic="" />
  <DashboardMenu />
  <div class="flex flex-col items-center gap-10 w-full min-h-screen bg-base-200 py-28 px-5">
    <div class="flex h-full w-full flex-col gap-5 items-center">
      <div class="prose w-full text-center">
        <h1>Indicadores</h1>
      </div>
      <div class="w-full h-full flex sm:p-10 md:px-32 gap-5 flex-wrap">
        <div class="stats shadow w-full sm:w-fit">
          <div class="stat place-items-center">
            <div class="stat-title">Pacientes Cadastrados</div>
            <div class="stat-value">0</div>
          </div>
        </div>
        <div class="stats shadow w-full sm:w-fit">
          <div class="stat place-items-center">
            <div class="stat-title">Pacientes Cadastrados</div>
            <div class="stat-value">0</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import DashboardHeader from '@/components/dashboard/DashboardHeader.vue'
import DashboardMenu from '@/components/dashboard/DashboardMenu.vue'
</script>
