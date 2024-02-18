<script>
// Use a static import for server-side compatibility
import '~/assets/css/main.css'

// Caution: Dynamic imports are not server-side compatible
import('~/assets/css/main.css')
</script>

<style>
@import url("~/assets/css/main.css");
</style>

<template>
  <div>
    <BaseHeader />
    <NuxtPage />
  </div>
</template>
