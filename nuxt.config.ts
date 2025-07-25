// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@unocss/nuxt'],
  devtools: { enabled: true },
  app: {
    head: {
      title: 'Restent Ou (@gxres042)',
      link: [
        { rel: 'icon', type: 'image/webp', href: 'https://library.gxres.net/images/icons/favicon.webp' },
        { rel: 'preconnect', href: 'https://library.gxres.net', crossorigin: '' },
      ],
    },
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
