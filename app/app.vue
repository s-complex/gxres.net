<template>
  <div class="mx-auto max-w-7xl">
    <NuxtRouteAnnouncer />
    <div class="gap-4 grid grid-cols-1 place-items-center min-h-svh md:grid-cols-2">
      <div>
        <NuxtImg
          class="rounded-full"
          width="256"
          height="256"
          src="https://library.gxres.net/images/avatars/real.webp"
          alt="Restent's avatar"
        />
      </div>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup lang="ts">
onMounted(() => {
  const lang = navigator.language
  if (!lang.startsWith('zh')) {
    navigateTo('/en')
  }
  else {
    navigateTo('/')
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

*,
::before,
::after {
  box-sizing: border-box;
}

html {
  font-family: system-ui, sans-serif;
  color-scheme: dark;
}

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

a {
  color: oklch(70.7% 0.165 254.624);
  text-decoration-line: none;
}

.content {
  h1 {
    font-size: 2.25rem;
    line-height: calc(2.5 / 2.25);
  }

  h2 {
    font-size: 1.5rem;
    line-height: calc(2 / 1.5);
  }
  h1, h2 {
    font-weight: 600;
    margin-bottom: 1.5rem;
  }
  p {
    margin-top: .75rem;
    margin-bottom: 1rem;
  }
  p:last-child {
    margin-bottom: 0;
  }
}
</style>
