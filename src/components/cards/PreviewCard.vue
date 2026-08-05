<template>
  <RouterLink :to="to" class="glass-hover group block rounded-3xl p-8">
    <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5">
      <i :class="[icon, accent]" class="text-xl" aria-hidden="true"></i>
    </div>
    <h3 class="mb-3 text-xl font-bold">{{ title }}</h3>
    <p class="mb-6 text-sm leading-relaxed text-white/50">
      <slot />
    </p>
    <span class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
      {{ linkLabel }}
      <ChevronRightIcon class="transition-transform group-hover:translate-x-1" />
    </span>
  </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from 'vue-router';
import ChevronRightIcon from '../ui/ChevronRightIcon.vue';

withDefaults(
  defineProps<{
    to: RouteLocationRaw;
    title: string;
    icon: string;
    accent?: string;
    linkLabel?: string;
  }>(),
  {
    accent: 'text-emerald-400',
    linkLabel: 'Ver más',
  },
);
</script>
