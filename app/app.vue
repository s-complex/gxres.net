<template>
  <div class="p-8 mx-auto max-w-2xl">
    <NuxtRouteAnnouncer />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
useHead({
  bodyAttrs: {
    class: ['bg-slate-100', 'dark:bg-slate-900'],
  },
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
  color-scheme: light dark;
}

a {
  color: #3273dc;
  --apply: 'no-underline'
}

.content {
  h1 {
    --apply: 'text-2xl';
  }

  h2 {
    --apply: 'text-2xl';
  }

  h1,
  h2 {
    --apply: 'font-semibold mb-6';
  }

  p {
    --apply: 'mt-3 mb-4';
  }

  p:last-child {
    --apply: 'mb-0';
  }

  em {
    --apply: 'italic'
  }

  ul {
    --apply: 'grid gap-3'
  }
}
</style>
