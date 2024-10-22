// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  ssr: false,
  srcDir: 'src/',
  typescript: { shim: false },
  app: {
    /* https://nuxt.com/docs/getting-started/transitions */
    pageTransition: { name: 'page', mode: 'out-in' }
  },
  /* https://nuxt.com/docs/getting-started/configuration#environment-variables-and-private-tokens */
  runtimeConfig: {
    // public/client-side
    public: {
      teste: 'valor teste' // NUXT_PUBLIC_TESTE (varenv)
    }
  },
  /* Estilos gerais (https://nuxt.com/docs/getting-started/styling#using-preprocessors) */
  css: ['~/assets/scss/main.scss'],
  modules: [
    '@pinia/nuxt'
  ],
  vite: {
    // preprocessors
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/_variables.scss" as *;'
        }
      }
    },
  },
  devServer: {
    host: '0.0.0.0'
  }
})
