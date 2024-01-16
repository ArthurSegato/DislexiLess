import { resolve } from "node:path";

export default defineNuxtConfig({
  alias: {
    cookie: resolve(__dirname, "node_modules/cookie"),
  },
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxt/image", "@hebilicious/authjs-nuxt"],
  nitro: {
    preset: "vercel-edge",
  },
  runtimeConfig: {
    webhooks: {
      contact: process.env.WEBHOOK_CONTACT,
    },
    authJs: {
      secret: process.env.AUTH_SECRET,
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    twitter: {
      clientId: process.env.TWITTER_CLIENT_ID,
      clientSecret: process.env.TWITTER_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
  authJs: {
    verifyClientOnEveryRequest: true,
    guestRedirectTo: "/auth",
    authenticatedRedirectTo: "/dashboard",
    baseUrl: "http://localhost:3000",
  },
  image: {
    format: ["avif", "webp"],
  },
});
