// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@unocss/nuxt'],
  eslint: {
    config: {
      stylistic: true
    }
  },
  app: {
    head: {
      title: 'Restent Ou (@gxres042)',
      link: [
        { rel: 'icon', type: 'image/webp', href: 'https://library.gxres.net/images/icons/favicon.webp' },
        { rel: 'preconnect', href: 'https://library.gxres.net', crossorigin: '' }
      ]
    }
  }
})