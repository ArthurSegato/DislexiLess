<template>
  <header>
    <router-link
      :to="{ name: 'home' }"
      tabindex="0"
      class="flex flex-row items-center gap-2 h-fit w-fit hover:gap-1 hover:text-primary hover:fill-primary transition-all fill-base-content"
    >
      <svg xmlns="http://www.w3.org/2000/svg" class="h-8 lg:h-6" viewBox="0 0 16 16">
        <path
          fill-rule="evenodd"
          d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"
        />
      </svg>
      <p class="lg:text-sm">Voltar</p>
    </router-link>
  </header>
</template>
