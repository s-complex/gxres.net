<template>
  <section class="space-y-4">
    <h2 class="text-xl font-semibold">
      😀 {{ greetings() }}
    </h2>
    <p>这里是 Restent Ou（又名 SliverRiver、undefinedR2 或是中文名 Dongpu Ou）。</p>
    <p>我是一位来自广西壮族自治区的 {{ getAge('2006-03-27') }} 岁半年轻人。</p>
    <h2 class="text-xl font-semibold">
      担任
    </h2>
    <ul class="list-disc list-inside space-y-2">
      <li>外包 => <NuxtLink href="https://littleskin.cn">LittleSkin</NuxtLink>, <NuxtLink href="https://speed.14cloud.cn">14Cloud</NuxtLink></li>
      <li>社区成员 @ <NuxtLink href="https://nitro.build">Nitro</NuxtLink></li>
      <li>（不知道从哪蹦出来的）贡献者 => <NuxtLink href="https://github.com/pi0/nuxt-shiki">nuxt-shiki</NuxtLink>, <NuxtLink href="https://github.com/unjs/obuild">obuild</NuxtLink></li>
    </ul>
    <h2 class="text-xl font-semibold">
      我学的东西
    </h2>
    <div class="flex flex-wrap gap-4">
      <IconNodejs
        :width="40"
        :height="40"
      />
      <IconJavaScript
        :width="40"
        :height="40"
      />
      <IconTypeScript
        :width="40"
        :height="40"
      />
      <IconHTML
        :width="40"
        :height="40"
      />
      <IconCSS3
        :width="40"
        :height="40"
      />
      <IconVue
        :width="40"
        :height="40"
      />
      <IconNuxt
        :width="40"
        :height="40"
      />
      <IconReact
        :width="40"
        :height="40"
      />
      <IconNextjs
        :width="40"
        :height="40"
      />
      <IconSvelte
        :width="40"
        :height="40"
      />
      <IconNitro
        :width="40"
        :height="40"
      />
    </div>
    <h2 class="text-xl font-semibold">
      爱好
    </h2>
    <p>电子产品、美食、Minecraft、音乐游戏、摄影和公共交通（仅限地面公交）。</p>
    <br>
    <div class="flex flex-row gap-2 justify-center">
      <NuxtLink href="https://blog.gxres.net">博客</NuxtLink>
      ·
      <NuxtLink href="https://library.gxres.net/links/list">朋友们</NuxtLink>
      ·
      <NuxtLink href="https://library.gxres.net/find-me">找我？</NuxtLink>
    </div>
    <br>
    <footer class="text-sm text-center">
      <p>© 2019 - {{ new Date().getFullYear() }} Restent Ou | 自豪地采用最喜欢的 <NuxtLink href="https://nuxt.com">Nuxt</NuxtLink>。</p>
    </footer>
  </section>
</template>

<script setup lang="ts">
function greetings() {
  const hour = new Date().getHours()

  if (hour >= 5 && hour < 12) {
    return '早上好。'
  }
  else if (hour >= 12 && hour < 18) {
    return '下午好。'
  }
  else {
    return '晚上好。'
  }
}

useHead({
  htmlAttrs: {
    lang: 'zh-CN',
  },
})
</script>
