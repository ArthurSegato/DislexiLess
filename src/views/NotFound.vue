<template>
  <header class="p-4 fixed w-full z-20">
    <nav
      class="navbar bg-base-100 rounded-box shadow-xl bg-opacity-50 backdrop-blur-2xl backdrop-saturate-200"
    >
      <div class="navbar-start w-full lg:w-1/2 justify-between">
        <router-link :to="{ path: '/' }" class="btn btn-ghost normal-case text-xl" tabindex="0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1000 1000"
            class="w-8 h-8 fill-neutral"
          >
            <path
              d="M0 31A31 31 0 0 1 31 0h250a31 31 0 1 1 0 63H31A31 31 0 0 1 0 31Zm0 125a31 31 0 0 1 31-31h438a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm563 0a31 31 0 0 1 31-31h312a31 31 0 1 1 0 63H594a31 31 0 0 1-31-32ZM0 281a31 31 0 0 1 31-31h188a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm313 0a31 31 0 0 1 31-31h312a31 31 0 1 1 0 63H344a31 31 0 0 1-31-32Zm437 0a31 31 0 0 1 31-31h188a31 31 0 1 1 0 63H781a31 31 0 0 1-31-32ZM0 406a31 31 0 0 1 31-31h375a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm500 0a31 31 0 0 1 31-31h313a31 31 0 1 1 0 63H531a31 31 0 0 1-31-32ZM0 531a31 31 0 0 1 31-31h313a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm438 0a31 31 0 0 1 31-31h437a31 31 0 1 1 0 63H469a31 31 0 0 1-31-32ZM0 656a31 31 0 0 1 31-31h500a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm0 125a31 31 0 0 1 31-31h250a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm0 125a31 31 0 0 1 31-31h125a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Z"
              clip-rule="evenodd"
            />
          </svg>
        </router-link>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost lg:hidden swap swap-rotate">
            <input type="checkbox" v-model="headerButton" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 swap-off"
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
              class="w-6 h-6 swap-on"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
          </label>
          <ul
            class="menu dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            v-show="headerButton"
          >
            <li><router-link :to="{ path: '/' }" tabindex="0">Serviços</router-link></li>
            <li><router-link :to="{ path: '/' }" tabindex="0">Sobre</router-link></li>
            <li><router-link :to="{ path: '/' }" tabindex="0">Valores</router-link></li>
            <li><router-link :to="{ path: '/' }" tabindex="0">Contato</router-link></li>
            <li v-show="!user.isAuth">
              <div>
                <router-link :to="{ name: 'signin' }" class="btn btn-block" tabindex="0"
                  >Entrar</router-link
                >
              </div>
            </li>
            <li v-show="!user.isAuth">
              <div>
                <router-link :to="{ name: 'signup' }" class="btn btn-block btn-primary" tabindex="0"
                  >Criar conta</router-link
                >
              </div>
            </li>
            <li v-show="user.isAuth">
              <div>
                <router-link
                  :to="{ name: 'dashboard' }"
                  class="btn btn-block btn-primary"
                  tabindex="0"
                  >Dashboard</router-link
                >
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div class="navbar-center hidden lg:flex">
        <ul class="menu menu-horizontal px-1 w-full">
          <li><router-link :to="{ path: '/' }" tabindex="0">Serviços</router-link></li>
          <li><router-link :to="{ path: '/' }" tabindex="0">Sobre</router-link></li>
          <li><router-link :to="{ path: '/' }" tabindex="0">Valores</router-link></li>
          <li><router-link :to="{ path: '/' }" tabindex="0">Contato</router-link></li>
        </ul>
      </div>
      <div class="navbar-end hidden lg:flex">
        <div class="btn-group" v-if="!user.isAuth">
          <router-link :to="{ name: 'signin' }" class="btn" tabindex="0">Entrar</router-link>
          <router-link :to="{ name: 'signup' }" class="btn btn-active" tabindex="0"
            >Criar conta</router-link
          >
        </div>
        <div v-else>
          <router-link
            :to="{ name: 'dashboard' }"
            class="btn btn-primary btn-block sm:w-fit gap-2"
            tabindex="0"
            >Acessar o dashboard
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </router-link>
        </div>
      </div>
    </nav>
  </header>
  <main>
    <section
      id="404"
      class="w-full min-h-screen flex flex-col gap-5 justify-center text-center p-10"
    >
      <h1 class="font-bold text-8xl">404</h1>
      <p>
        Essa página não existe!
        <router-link :to="{ name: 'home' }" class="link link-primary">Clique aqui</router-link> para
        voltar a página inicial.
      </p>
    </section>
  </main>
  <footer class="w-full p-8 text-base-content fill-base-content">
    <div
      class="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000" class="w-10">
        <path
          d="M0 31A31 31 0 0 1 31 0h250a31 31 0 1 1 0 63H31A31 31 0 0 1 0 31Zm0 125a31 31 0 0 1 31-31h438a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm563 0a31 31 0 0 1 31-31h312a31 31 0 1 1 0 63H594a31 31 0 0 1-31-32ZM0 281a31 31 0 0 1 31-31h188a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm313 0a31 31 0 0 1 31-31h312a31 31 0 1 1 0 63H344a31 31 0 0 1-31-32Zm437 0a31 31 0 0 1 31-31h188a31 31 0 1 1 0 63H781a31 31 0 0 1-31-32ZM0 406a31 31 0 0 1 31-31h375a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm500 0a31 31 0 0 1 31-31h313a31 31 0 1 1 0 63H531a31 31 0 0 1-31-32ZM0 531a31 31 0 0 1 31-31h313a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm438 0a31 31 0 0 1 31-31h437a31 31 0 1 1 0 63H469a31 31 0 0 1-31-32ZM0 656a31 31 0 0 1 31-31h500a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm0 125a31 31 0 0 1 31-31h250a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Zm0 125a31 31 0 0 1 31-31h125a31 31 0 1 1 0 63H31a31 31 0 0 1-31-32Z"
          clip-rule="evenodd"
        />
      </svg>
      <ul class="menu menu-horizontal px-1">
        <li>
          <router-link :to="{ name: 'legal' }" tabindex="0"> Termos de Uso </router-link>
        </li>
        <li>
          <router-link :to="{ name: 'legal' }" tabindex="0"> Política de Privacidade </router-link>
        </li>
        <li>
          <a href="https://github.com/ArthurSegato/dislexiless-frontend" tabindex="0">
            Contribua
          </a>
        </li>
      </ul>
    </div>
    <hr class="my-8 border-blue-gray-50" />
    <p class="text-center leading-relaxed">&copy; 2023 Dislexiless</p>
  </footer>
</template>

<script setup lang="ts">
import { useUserStore } from '@/stores/user'
import { ref } from 'vue'

const user = useUserStore()

const headerButton = ref(false)
</script>
