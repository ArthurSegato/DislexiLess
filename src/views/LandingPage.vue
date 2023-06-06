<template>
  <header class="p-4 fixed w-full z-20">
    <nav
      class="navbar bg-base-100 rounded-box shadow-xl bg-opacity-50 backdrop-blur-2xl backdrop-saturate-200"
    >
      <div class="navbar-start w-full lg:w-1/2 justify-between">
        <a href="#hero" class="btn btn-ghost normal-case text-xl" tabindex="0">
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
        </a>
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
            <li><a href="#services" tabindex="0">Serviços</a></li>
            <li><a href="#about" tabindex="0">Sobre</a></li>
            <li><a href="#prices" tabindex="0">Valores</a></li>
            <li><a href="#contact" tabindex="0">Contato</a></li>
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
          <li><a href="#services" tabindex="0">Serviços</a></li>
          <li><a href="#about" tabindex="0">Sobre</a></li>
          <li><a href="#prices" tabindex="0">Valores</a></li>
          <li><a href="#contact" tabindex="0">Contato</a></li>
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
    <section id="hero" class="overflow-x-hidden">
      <div class="hero min-h-screen bg-base-200 py-20 sm:px-20">
        <div class="hero-content flex-col lg:flex-row-reverse gap-10">
          <img
            v-motion-slide-right
            src="https://images.unsplash.com/photo-1535930749574-1399327ce78f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80"
            class="sm:max-w-sm rounded-lg shadow-2xl"
            alt=""
          />
          <div>
            <h1 class="text-5xl font-bold">DislexiLess</h1>
            <p class="py-6">
              Nós acreditamos que a tecnologia pode mudar o mundo, e é por esse motivo que
              desenvolvemos a DislexiLess, uma plataforma criada para auxiliar profissionais da área
              da saúde e da educação no suporte e acompanhamento de pessoas com dislexia.
            </p>
            <div class="flex gap-5 flex-wrap" v-if="!user.getAuth">
              <a href="#services" class="btn btn-outline btn-block sm:w-fit gap-2" tabindex="0"
                >Descubra mais sobre
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                  />
                </svg>
              </a>
              <router-link
                :to="{ name: 'signup' }"
                class="btn btn-primary btn-block sm:w-fit gap-2"
                tabindex="0"
                >Comece a usar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </router-link>
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
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section
      id="services"
      class="flex flex-col items-center gap-12 lg:gap-20 py-24 px-10 sm:px-20 md:px-32 overflow-x-hidden"
    >
      <SectionHeader title="Nossos Serviços" subtitle="Pensados para o seu paciente e você" />
      <div class="flex flex-col lg:flex-row gap-12">
        <div class="flex flex-col justify-center lg:w-1/2 gap-2 lg:gap-5">
          <h3 class="text-xl lg:text-2xl font-bold">Um app para os seus pacientes</h3>
          <p class="lg:text-lg leading-normal">
            Completamente gratuido, o aplicativo da DislexiLess apresenta um conjunto de ferramentas
            diárias cuidadosamente elaboradas para atender às necessidades específicas das pessoas
            com dislexia, pensado nos minimos detalhes para o conforto e acessibilidade dos
            usuários.
          </p>
        </div>
        <div class="flex justify-center lg:w-1/2">
          <img
            v-motion-slide-visible-once-right
            class="w-1/2 sm:w-1/4 lg:w-1/3 duration-300 ease hover:drop-shadow-2xl hover:scale-105"
            src="../assets/img/dislexiless-app.png"
            alt="Celular rodando o aplicativo DislexiLess"
            loading="lazy"
          />
        </div>
      </div>
      <div class="flex flex-col gap-12 lg:flex-row-reverse">
        <div class="flex flex-col justify-center lg:w-1/2 gap-2 lg:gap-5">
          <h3 class="text-xl lg:text-2xl font-bold">Uma plataforma para você</h3>
          <p class="lg:text-lg leading-normal">
            Tenha acesso em tempo real ao progresso dos seus pacientes, simplesmente cadastrando-os
            na plataforma e inserindo o código gerado no aplicativo. A partir desse momento, você
            estará pronto para desfrutar de todas as funcionalidades oferecidas pela plataforma.
          </p>
        </div>
        <div class="flex justify-center lg:w-1/2">
          <img
            v-motion-slide-visible-once-left
            class="sm:w-1/2 lg:w-full duration-300 ease hover:drop-shadow-2xl hover:scale-105"
            src="../assets/img/dislexiless-dashboard.png"
            alt="Laptop com a plataforma DislexiLess aberta"
            loading="lazy"
          />
        </div>
      </div>
    </section>
    <section
      id="about"
      class="flex flex-col items-center gap-12 lg:gap-20 py-24 px-10 sm:px-20 md:px-32 bg-gradient-to-tr from-primary-focus to-primary text-primary-content overflow-x-hidden"
    >
      <SectionHeader title="Sobre Nós" subtitle="Os responsáveis pelo nosso sucesso" />
      <div class="flex sm:gap-6 md:gap-10 gap-16 lg:gap-24 flex-wrap sm:flex-nowrap">
        <div
          v-motion-slide-visible-once-left
          class="card sm:w-1/2 lg:w-96 bg-base-100 shadow-xl text-base-content"
        >
          <figure>
            <img
              class="w-full aspect-square"
              src="../assets/img/arthur.jpg"
              alt="Arthur Segato, Homem, cabelos longos"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Arthur Segato</h2>
            <p>
              Desenvolvedor Full-Stack, responsável por criar esse site aqui, eu nunca sei o que
              escrever nessas descrições.
            </p>
            <div class="card-actions justify-end">
              <a
                href="https://github.com/ArthurSegato"
                class="btn btn-primary btn-outline gap-2"
                tabindex="0"
                >github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
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
        <div
          v-motion-slide-visible-once-right
          class="card sm:w-1/2 lg:w-96 bg-base-100 shadow-xl text-base-content"
        >
          <figure>
            <img
              class="w-full aspect-square"
              src="../assets/img/eduardo.jpg"
              alt="Eduardo Henrique Coltz, Homem, cabelos loiros"
            />
          </figure>
          <div class="card-body">
            <h2 class="card-title">Eduardo Henrique Coltz</h2>
            <p>
              Desenvolvedor Mobile, desenvolveu o aplicativo da DislexiLess mais vezes do que
              gostaria de admitir.
            </p>
            <div class="card-actions justify-end">
              <a
                href="https://github.com/OmptOsu"
                class="btn btn-primary btn-outline gap-2"
                tabindex="0"
                >github
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
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
    </section>
    <section
      id="prices"
      class="flex flex-col items-center gap-12 lg:gap-20 py-24 px-10 sm:px-20 md:px-32 overflow-x-hidden"
    >
      <SectionHeader title="Preços" subtitle="Pague apenas pelo que usar, nada mais" />
      <div
        v-motion-pop-visible-once
        class="relative flex w-full max-w-[20rem] flex-col rounded-xl bg-gradient-to-tr from-primary-focus to-primary bg-clip-border p-8 text-primary-content shadow-md shadow-primary/40 ease-in-out duration-200 hover:scale-105"
      >
        <div
          class="relative m-0 mb-8 overflow-hidden rounded-none border-b border-white/10 bg-transparent bg-clip-border pb-8 text-center shadow-none"
        >
          <p class="block text-sm leading-normal">Sob Medida</p>
          <h3 class="mt-6 flex justify-center gap-1 text-7xl tracking-normal">
            <span class="mt-2 text-4xl">R$</span>15
            <span class="self-end text-4xl">/pct</span>
          </h3>
        </div>
        <div class="p-0">
          <ul class="flex flex-col gap-4">
            <li class="flex items-center gap-4">
              <span class="rounded-full border border-white/20 bg-white/20 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-3 w-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p class="block leading-relaxed">Primeiros 3 pacientes gratuitos</p>
            </li>
            <li class="flex items-center gap-4">
              <span class="rounded-full border border-white/20 bg-white/20 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-3 w-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p class="block leading-relaxed">Painel administrativo completo</p>
            </li>
            <li class="flex items-center gap-4">
              <span class="rounded-full border border-white/20 bg-white/20 p-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="2"
                  stroke="currentColor"
                  aria-hidden="true"
                  class="h-3 w-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  ></path>
                </svg>
              </span>
              <p class="block leading-relaxed">Pago mensalmente</p>
            </li>
          </ul>
        </div>
        <div class="mt-12 p-0">
          <router-link :to="{ name: 'signup' }" class="btn btn-block" tabindex="0">
            Começar agora
          </router-link>
        </div>
      </div>
    </section>
    <section
      id="contact"
      class="flex flex-col items-center bg-base-200 gap-12 lg:gap-20 py-24 px-10 sm:px-20 md:px-32 overflow-x-hidden"
    >
      <SectionHeader title="Contato" subtitle="Restou alguma duvida? Entre em contato conosco!" />
      <div class="card w-full sm:w-96 bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="text-xl text-center">Nossas redes sociais</h3>
          <div class="divider"></div>
          <div class="flex justify-between">
            <a href="https://www.instagram.com/" class="btn btn-square" tabindex="0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/" class="btn btn-square" tabindex="0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path
                  d="m6.08.234.179.727a7.264 7.264 0 0 0-2.01.832l-.383-.643A7.9 7.9 0 0 1 6.079.234zm3.84 0L9.742.96a7.265 7.265 0 0 1 2.01.832l.388-.643A7.957 7.957 0 0 0 9.92.234zm-8.77 3.63a7.944 7.944 0 0 0-.916 2.215l.727.18a7.264 7.264 0 0 1 .832-2.01l-.643-.386zM.75 8a7.3 7.3 0 0 1 .081-1.086L.091 6.8a8 8 0 0 0 0 2.398l.74-.112A7.262 7.262 0 0 1 .75 8zm11.384 6.848-.384-.64a7.23 7.23 0 0 1-2.007.831l.18.728a7.965 7.965 0 0 0 2.211-.919zM15.251 8c0 .364-.028.727-.082 1.086l.74.112a7.966 7.966 0 0 0 0-2.398l-.74.114c.054.36.082.722.082 1.086zm.516 1.918-.728-.18a7.252 7.252 0 0 1-.832 2.012l.643.387a7.933 7.933 0 0 0 .917-2.219zm-6.68 5.25c-.72.11-1.453.11-2.173 0l-.112.742a7.99 7.99 0 0 0 2.396 0l-.112-.741zm4.75-2.868a7.229 7.229 0 0 1-1.537 1.534l.446.605a8.07 8.07 0 0 0 1.695-1.689l-.604-.45zM12.3 2.163c.587.432 1.105.95 1.537 1.537l.604-.45a8.06 8.06 0 0 0-1.69-1.691l-.45.604zM2.163 3.7A7.242 7.242 0 0 1 3.7 2.163l-.45-.604a8.06 8.06 0 0 0-1.691 1.69l.604.45zm12.688.163-.644.387c.377.623.658 1.3.832 2.007l.728-.18a7.931 7.931 0 0 0-.916-2.214zM6.913.831a7.254 7.254 0 0 1 2.172 0l.112-.74a7.985 7.985 0 0 0-2.396 0l.112.74zM2.547 14.64 1 15l.36-1.549-.729-.17-.361 1.548a.75.75 0 0 0 .9.902l1.548-.357-.17-.734zM.786 12.612l.732.168.25-1.073A7.187 7.187 0 0 1 .96 9.74l-.727.18a8 8 0 0 0 .736 1.902l-.184.79zm3.5 1.623-1.073.25.17.731.79-.184c.6.327 1.239.574 1.902.737l.18-.728a7.197 7.197 0 0 1-1.962-.811l-.007.005zM8 1.5a6.502 6.502 0 0 0-6.498 6.502 6.516 6.516 0 0 0 .998 3.455l-.625 2.668L4.54 13.5a6.502 6.502 0 0 0 6.93-11A6.516 6.516 0 0 0 8 1.5"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/" class="btn btn-square" tabindex="0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path
                  d="M11.19 12.195c2.016-.24 3.77-1.475 3.99-2.603.348-1.778.32-4.339.32-4.339 0-3.47-2.286-4.488-2.286-4.488C12.062.238 10.083.017 8.027 0h-.05C5.92.017 3.942.238 2.79.765c0 0-2.285 1.017-2.285 4.488l-.002.662c-.004.64-.007 1.35.011 2.091.083 3.394.626 6.74 3.78 7.57 1.454.383 2.703.463 3.709.408 1.823-.1 2.847-.647 2.847-.647l-.06-1.317s-1.303.41-2.767.36c-1.45-.05-2.98-.156-3.215-1.928a3.614 3.614 0 0 1-.033-.496s1.424.346 3.228.428c1.103.05 2.137-.064 3.188-.189zm1.613-2.47H11.13v-4.08c0-.859-.364-1.295-1.091-1.295-.804 0-1.207.517-1.207 1.541v2.233H7.168V5.89c0-1.024-.403-1.541-1.207-1.541-.727 0-1.091.436-1.091 1.296v4.079H3.197V5.522c0-.859.22-1.541.66-2.046.456-.505 1.052-.764 1.793-.764.856 0 1.504.328 1.933.983L8 4.39l.417-.695c.429-.655 1.077-.983 1.934-.983.74 0 1.336.259 1.791.764.442.505.661 1.187.661 2.046v4.203z"
                />
              </svg>
            </a>
            <a
              href="https://github.com/ArthurSegato/DislexiLess"
              class="btn btn-square"
              tabindex="0"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="h-6 w-6"
                viewBox="0 0 16 16"
              >
                <path
                  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div v-motion-slide-bottom class="card w-full lg:w-fit bg-base-100 shadow-xl">
        <div class="card-body">
          <h3 class="text-xl text-center">Se preferir, entre em contato por aqui</h3>
          <div class="divider"></div>
          <form @submit.prevent="execute()" autocomplete="off">
            <div class="flex gap-x-10 gap-y-2 flex-wrap md:flex-nowrap">
              <div class="form-control w-full lg:w-96">
                <label class="label">
                  <span class="label-text">Nome</span>
                </label>
                <label class="input-group">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="João da Silva"
                    class="input input-bordered w-full"
                    v-model="formData.name"
                  />
                </label>
              </div>
              <div class="form-control w-full lg:w-96">
                <label class="label">
                  <span class="label-text">Organização <sup>(Opcional)</sup></span>
                </label>
                <label class="input-group">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21"
                      />
                    </svg>
                  </span>
                  <input
                    type="text"
                    placeholder="Dislexia Brasil 123"
                    class="input input-bordered w-full"
                    v-model="formData.org"
                  />
                </label>
              </div>
            </div>
            <div class="flex gap-x-10 gap-y-2 flex-wrap md:flex-nowrap">
              <div class="form-control w-full lg:w-96">
                <label class="label">
                  <span class="label-text">Email</span>
                </label>
                <label class="input-group">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                      />
                    </svg>
                  </span>
                  <input
                    type="email"
                    placeholder="exemplo@email.com"
                    class="input input-bordered w-full"
                    v-model="formData.email"
                  />
                </label>
              </div>
              <div class="form-control w-full lg:w-96">
                <label class="label">
                  <span class="label-text">Celular <sup>(Opcional)</sup></span>
                </label>
                <label class="input-group">
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3"
                      />
                    </svg>
                  </span>
                  <input
                    type="tel"
                    placeholder="(01) 12345-6789"
                    class="input input-bordered w-full"
                    v-maska
                    data-maska="(##) #####-####"
                    v-model="formData.phone"
                  />
                </label>
              </div>
            </div>
            <div class="form-control">
              <label class="label">
                <span class="label-text">Mensagem</span>
              </label>
              <textarea
                class="textarea textarea-bordered h-24"
                placeholder="Escreva a sua mensagem aqui!"
                v-model="formData.message"
              ></textarea>
            </div>
            <div class="flex justify-end my-2">
              <button
                class="btn btn-primary gap-2 w-full md:w-32 loading"
                v-if="isFetching"
              ></button>
              <button
                type="submit"
                class="btn btn-primary gap-2 w-full md:w-32"
                :disabled="v$.$invalid"
                v-else
              >
                Enviar
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5"
                  />
                </svg>
              </button>
            </div>
          </form>
          <div class="w-full">
            <div class="alert alert-success shadow-lg" v-show="statusCode == 202">
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
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>Recebemos a sua mensagem!</span>
              </div>
            </div>
            <div class="alert alert-error shadow-lg slide-in-bottom" v-show="error">
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
          </div>
        </div>
      </div>
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
import SectionHeader from '@/components/SectionHeader.vue'
import { useUserStore } from '@/stores/user'
import { required, email } from '@vuelidate/validators'
import { reactive, computed, ref } from 'vue'
import { vMaska } from 'maska'
import { useFetch } from '@vueuse/core'
import useVuelidate from '@vuelidate/core'

const api_path = import.meta.env.VITE_API_PATH

const user = useUserStore()

const headerButton = ref(false)

const formData = reactive({
  name: '',
  email: '',
  org: '',
  phone: '',
  message: ''
})

const rules = computed(() => {
  return {
    name: { required },
    email: { required, email },
    org: {},
    phone: {},
    message: { required }
  }
})

const v$ = useVuelidate(rules, formData)

const { execute, isFetching, error, statusCode } = useFetch(`${api_path}/contact`, {
  immediate: false
})
  .post(formData)
  .json()
</script>
