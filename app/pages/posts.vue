<template>
  <h1>Posts</h1>
  <div v-if="data && data.items">
    <ul>
      <li v-for="item in data.items" :key="item.id">
        <NuxtLink :href="item.url" external>{{ item.title }}</NuxtLink>
        <br />
        <time class="text-sm" :datetime="item.date_modified.toString()">{{ formatDate(item.date_modified) }}</time>
      </li>
    </ul>
  </div>
  <div v-else>
    Loading...
  </div>
  <p>Read more at <NuxtLink href="https://blog.gxres.net" external>Restent's Notebook</NuxtLink>.</p>
</template>

<script lang="ts">
type FeedItem = {
  id: string;
  content_html: string;
  url: string;
  title: string;
  summary: string;
  date_modified: string;
  image?: string;
  author: {
    name: string;
    url: string;
  };
};

type FeedResponse = {
  version: string;
  title: string;
  items: FeedItem[];
};
</script>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'

const data = ref<FeedResponse | null>(null)

onMounted(async () => {
  data.value = await $fetch<FeedResponse>('https://blog.gxres.net/latest-posts.json')
})

function formatDate(_date: string) {
  const date = new Date(_date)
  return date.toLocaleDateString('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}
</script>