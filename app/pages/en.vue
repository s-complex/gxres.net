<template>
  <section>
    <h1>Restent Ou</h1>
    <p>Known as SliverRiver, undefinedR2 and "Dongpu Ou".</p>
    <p>
      Had contributed to
      <span
        v-for="(project, idx) in projectsList"
        :key="project.name"
      >
        <NuxtLink
          :to="project.url"
          target="_blank"
        >{{ project.name }}</NuxtLink>
        <span v-if="idx < projectsList.length - 1">, </span>
      </span>.
    </p>
    <p>I am learning and trying things that interest me.</p>
    <br>
    <p class="text-center">
      <span
        v-for="(link, idx) in linkList"
        :key="link.name"
      >
        <NuxtLink
          :to="link.url"
          target="_blank"
        >{{ link.name }}</NuxtLink>
        <span v-if="idx < linkList.length - 1"> · </span>
      </span>
    </p>
  </section>
</template>

<script setup lang="ts">
const projectsList = [
  {
    name: 'Nitro',
    url: 'https://nitro.build',
  },
  {
    name: 'LittleSkin',
    url: 'https://littleskin.cn',
  },
  {
    name: '14Cloud',
    url: 'https://speed.14cloud.cn',
  },
  {
    name: 'obuild',
    url: 'https://github.com/unjs/obuild',
  },
  {
    name: 'nuxt-shiki',
    url: 'https://github.com/pi0/nuxt-shiki',
  },
]

const linkList = [
  {
    name: 'blog',
    url: 'https://blog.gxres.net',
  },
  {
    name: 'friends',
    url: 'https://library.gxres.net/links/list',
  },
  {
    name: 'find me',
    url: 'https://library.gxres.net/find-me',
  },
]

useHead({
  htmlAttrs: {
    lang: 'en',
  },
})
</script>
