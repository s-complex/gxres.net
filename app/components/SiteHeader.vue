<template>
  <header class="grid gap-3">
    <NuxtImg
      class="rounded-full shadow"
      preload
      decoding="async"
      width="96"
      height="96"
      alt="Restent Ou's avatar"
      src="https://library.gxres.net/images/avatars/real.webp"
    />
    <hgroup>
      <h1 class="text-2xl font-medium">
        Restent Ou
      </h1>
      <p class="text-gray-700 dark:text-gray-300">
        a.k.a. SliverRiver, undefinedR2 and "Dongpu Ou".
      </p>
    </hgroup>
    <section class="flex flex-row gap-3">
      <RouterLink
        v-for="link in navLinks"
        :key="link.to"
        :to="link.to"
        class=""
      >
        {{ link.name }}
      </RouterLink>
    </section>
  </header>
</template>

<script lang="ts" setup>
const navLinks = [
  { name: 'about', to: '/' },
  { name: 'posts', to: '/posts' },
  { name: 'find me', to: '/find-me' },
  { name: 'friends', to: '/friends' },
]
</script>
