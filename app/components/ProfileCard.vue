<template>
  <div class="bg-slate-100 dark:bg-slate-800 rounded-2xl p-4">
    <header class="grid place-items-center gap-4 p-4">
      <NuxtImg class="rounded-full shadow" width="128" height="128" loading="lazy" decoding="async" src="https://library.gxres.net/images/avatars/real.webp" />
      <h1 class="text-2xl font-medium">Restent Ou</h1>
    </header>
    <br>
    <main class="p-4">
      <slot />
    </main>
  </div>
</template>
