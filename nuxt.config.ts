// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxtjs/google-fonts",
    "nuxt-icon",
    "@formkit/nuxt",
    "@pinia/nuxt",
    "@nuxtjs/supabase",
    "nuxt-swiper"
  ],
  googleFonts: {
    families: {
      'Inter': true,
      'Comfortaa': true
    }
  },
  supabase: {
    redirect: false
  },
  postcss: {
    plugins: {
      cssnano: false 
    }
  }
})