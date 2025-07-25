<template>
  <section class="space-y-4">
    <h2 class="text-xl font-semibold">😀 {{ greetings() }}</h2>
    <p>This is Restent Ou (also known as SliverRiver, or undefinedR2).</p>
    <p>I am a {{ getAge('2006-03-27') }} years old guy who comes from Guangxi, China.</p>
    <h2 class="text-xl font-semibold">Working as</h2>
    <ul class="list-inside list-disc space-y-2">
      <li>Helper => <NuxtLink href="https://littleskin.cn">LittleSkin</NuxtLink>, <NuxtLink href="https://speed.14cloud.cn">14Cloud</NuxtLink></li>
      <li>Community member @ <NuxtLink href="https://nitro.build">Nitro</NuxtLink></li>
      <li>Contributor => <NuxtLink href="https://github.com/pi0/nuxt-shiki">nuxt-shiki</NuxtLink>, <NuxtLink href="https://github.com/unjs/obuild">obuild</NuxtLink></li>
    </ul>
    <h2 class="text-xl font-semibold">Things I learnt</h2>
    <div class="flex flex-wrap gap-4">
      <IconNodejs :width="40" :height="40" />
      <IconJavaScript :width="40" :height="40" />
      <IconTypeScript :width="40" :height="40" />
      <IconHTML :width="40" :height="40" />
      <IconCSS3 :width="40" :height="40" />
      <IconVue :width="40" :height="40" />
      <IconNuxt :width="40" :height="40" />
      <IconReact :width="40" :height="40" />
      <IconNextjs :width="40" :height="40" />
      <IconSvelte :width="40" :height="40" />
      <IconNitro :width="40" :height="40" />
    </div>
    <h2 class="text-xl font-semibold">Favorite</h2>
    <p>Electronic devices, delicious food, Minecraft, rhythm games, photography and public transportations (bus only).</p>
    <br>
    <div class="flex flex-row justify-center gap-2">
      <NuxtLink href="https://blog.gxres.net">Blog</NuxtLink>
      ·
      <NuxtLink href="https://library.gxres.net/links/list">Friends</NuxtLink>
      ·
      <NuxtLink href="https://library.gxres.net/find-me">Find me</NuxtLink>
    </div>
    <br>
    <footer class="text-center text-sm">
      <p>© 2019 - {{ new Date().getFullYear() }} Restent Ou. Powered by <NuxtLink href="https://nuxt.com">Nuxt</NuxtLink>.</p>
    </footer>
  </section>
</template>

<script setup lang="ts">
function greetings() {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return 'Good morning.';
  } else if (hour >= 12 && hour < 18) {
    return 'Good afternoon.';
  } else {
    return 'Good evening.';
  }
}


useHead({
  htmlAttrs: {
    lang: 'en'
  }
})
</script>