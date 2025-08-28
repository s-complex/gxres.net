// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxt/eslint', '@nuxt/image', '@unocss/nuxt', 'nuxt-compile-markdown'],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: {
        lang: 'en',
      },
      link: [
        { rel: 'preconnect', href: 'https://library.gxres.net', crossorigin: '' },
        { rel: 'icon', type: 'image/webp', href: 'https://library.gxres.net/images/icons/favicon.webp' },
      ],
      title: 'Restent Ou (@gxres042)',
      meta: [
        { name: 'description', content: 'Restent Ou\'s Biography.' },
        { name: 'twitter:description', content: 'Restent Ou\'s Biography.' },
        { charset: 'utf-8' },
        { name: 'author', content: 'Restent Ou' },
      ],
    },
  },
  experimental: {
    componentIslands: true,
  },
  compatibilityDate: '2025-07-15',
  eslint: {
    config: {
      stylistic: true,
    },
  },
})
