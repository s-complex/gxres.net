<template>
  <section>
    <h1>Restent Ou</h1>
    <p>又名 SliverRiver, undefinedR2 或 "Dongpu Ou"。</p>
    <p>
      曾为
      <span
        v-for="(project, idx) in projectsList"
        :key="project.name"
      >
        <NuxtLink
          :to="project.url"
          target="_blank"
        >{{ project.name }}</NuxtLink>
        <span v-if="idx < projectsList.length - 1">, </span>
      </span> 做了点微小贡献。
    </p>
    <p>正在学习并尝试我所感兴趣的东西。</p>
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
    name: '博客',
    url: 'https://blog.gxres.net',
  },
  {
    name: '朋友们',
    url: 'https://library.gxres.net/links/list',
  },
  {
    name: '联系我',
    url: 'https://library.gxres.net/find-me',
  },
]

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
})
</script>
