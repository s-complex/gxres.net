<template>
  <div class="mx-auto max-w-2xl m-8">
    <NuxtRouteAnnouncer />
    <ProfileCard>
      <NuxtPage />
    </ProfileCard>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const lang = navigator.language
  if (!lang.startsWith('zh')) {
    navigateTo('/en')
  }
})
</script>

<style>
* {
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
}

*, ::before, ::after {
  box-sizing: border-box;
}

html {
  font-family: system-ui, sans-serif;
  color-scheme: light dark;
}

body {
  background-image: url("https://library.gxres.net/images/bg.webp");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

a {
  color: rgb(59 130 246);
  text-decoration-line: none;
}

@media (prefers-color-scheme: dark) {
  body {
    background-image: url("https://library.gxres.net/images/bg.webp");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    &::before {
      content: "";
      position: fixed;
      inset: 0;
      backdrop-filter: brightness(50%);
      z-index: -1;
    }
  }
}
</style>