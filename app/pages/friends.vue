<template>
  <h1>Friends</h1>
  <div v-if="data">
    <ul>
      <li v-for="([name, item]) in Object.entries(data)" :key="name">
        <NuxtLink :href="item.link" target="_blank" external>{{ name }}</NuxtLink> - {{ item.slogan }}
      </li>
      <li><NuxtLink href="https://library.gxres.net/links/list" external>Full list here</NuxtLink></li>
    </ul>
  </div>
  <div v-else>
    Loading...
  </div>
</template>

<script lang="ts" setup>
interface ListDataItem {
  slogan: string;
  avatar: string;
  link: string;
}

const { data } = await useFetch<Record<string, ListDataItem>>('https://api.insli.cc/linklist/random', {
  lazy: true,
  server: false
})
</script>
