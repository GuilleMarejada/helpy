// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  modules: ['@pinia/nuxt', '@nuxtjs/google-fonts'],
  googleFonts: {
    families: {
      Montserrat: true,
      'Open+Sans': true,
      'Roboto': true,
    },
  }
});