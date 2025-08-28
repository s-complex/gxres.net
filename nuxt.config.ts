// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxt/image', '@unocss/nuxt', 'nuxt-compile-markdown'],
  app: {
    head: {
      link: [
        { rel: 'preconnect', href: 'https://library.gxres.net', crossorigin: '' },
        { rel: 'icon', type: 'image/webp', href: 'https://library.gxres.net/images/icons/favicon.webp' },
        { rel: 'preload', type: 'image/webp', href: 'https://library.gxres.net/images/avatars/real.webp', as: 'image' }
      ],
      title: 'Restent Ou (@gxres042)',
      meta: [
        { name: 'description', content: 'Restent Ou\'s Biography.' },
        { name: 'twitter:description', content: 'Restent Ou\'s Biography.' },
        { charset: 'utf-8' },
        { name: 'author', content: 'Restent Ou' }
      ]
    }
  },
  eslint: {
    config: {
      stylistic: true
    }
  },
  experimental: {
    componentIslands: true
  },
})