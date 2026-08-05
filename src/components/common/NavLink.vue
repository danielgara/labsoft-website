<template>
  <RouterLink :to="to" class="transition-colors hover:text-white" exact-active-class="text-white">
    {{ label }}
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from 'vue-router';

defineProps<{
  to: RouteLocationRaw;
  label: string;
}>();
</script>
