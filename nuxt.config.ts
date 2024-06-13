// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@formkit/nuxt"
  ],
  googleFonts: {
    families: {
      'Inter': true,
      'Comfortaa': true
    }
  },
  postcss: {
    plugins: {
      cssnano: false 
    }
  }
})