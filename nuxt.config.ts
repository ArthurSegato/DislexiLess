// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/image", "@nuxtjs/tailwindcss"],
  runtimeConfig: {
    crypto: {
      key: process.env.CRYPTO_KEY,
    },
    auth: {
      name: "nuxt-session",
      password: process.env.NUXT_AUTH_PASSWORD,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
  nitro: {
    storage: {
      session: {
        driver: "vercelKV",
      },
    },
  },
});
