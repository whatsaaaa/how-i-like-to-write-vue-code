import { theme } from '@whatsaaaa/ui-vue'
import { colorModeInitScript } from '@whatsaaaa/ui-vue/color-mode'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/ui'],
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  ui: { theme, fonts: false }, // the design system brings its fonts
  app: {
    head: {
      htmlAttrs: { lang: 'en' },
      link: [{ rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
      script: [{ innerHTML: colorModeInitScript }],
    },
  },
  typescript: {
    // Type-checks the root configs too, as the template's tsconfig does
    nodeTsConfig: { include: ['../*.config.ts'] },
  },
})
