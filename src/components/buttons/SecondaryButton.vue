<template>
  <RouterLink
    :to="to"
    class="glass glass-hover inline-flex items-center rounded-2xl px-8 py-4 text-lg font-bold"
  >
    <slot />
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from 'vue-router';

defineProps<{
  to: RouteLocationRaw;
}>();
</script>
