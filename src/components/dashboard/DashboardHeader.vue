<template>
  <header class="p-4 fixed w-full z-30">
    <nav class="navbar bg-base-100 shadow-xl rounded-box">
      <div class="flex-none">
        <label tabindex="0" class="btn btn-ghost btn-square swap swap-rotate">
          <input type="checkbox" @click="header.setState()" v-model="header.getState" />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5 swap-off"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5 swap-on"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
        </label>
      </div>
      <div class="flex-1">
        <router-link to="/dashboard" class="btn btn-ghost normal-case text-xl"
          >DislexiLess</router-link
        >
      </div>
      <div class="dropdown dropdown-end">
        <label tabindex="0" class="btn btn-ghost btn-circle avatar">
          <div class="w-10 rounded-full" v-if="profilePic">
            <img :src="profilePic" />
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
            v-else
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </label>
        <ul
          tabindex="0"
          class="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
        >
          <li><router-link :to="{ name: 'settings' }" tabindex="0">Configurações</router-link></li>
          <li><a @click="user.reset()" tabindex="0">Sair</a></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { useHeaderStore } from '@/stores/header'

const header = useHeaderStore()
const user = useUserStore()
const data = defineProps(['name', 'profilePic'])
</script>
