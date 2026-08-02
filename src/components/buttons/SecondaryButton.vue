<template>
  <a :href="href" class="glass glass-hover px-8 py-4 rounded-2xl font-bold text-lg">
    <slot />
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
}>()
</script>
