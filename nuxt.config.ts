// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "webInvent-assignment",
      meta: [
        { name: "descrption", content: "webInvent-assignment | all Posts" },
      ],
    },
  },
});
