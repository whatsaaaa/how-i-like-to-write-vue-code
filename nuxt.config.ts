// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  typescript: {
    // Type-checks the root configs too, as the template's tsconfig does
    nodeTsConfig: { include: ['../*.config.ts'] },
  },
})
