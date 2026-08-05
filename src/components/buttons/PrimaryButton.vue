<template>
  <RouterLink v-if="to" :to="to" :class="styles">
    <slot />
    <ChevronRightIcon v-if="showChevron" />
  </RouterLink>
  <button v-else :type="type" :class="styles" @click="$emit('click')">
    <slot />
    <ChevronRightIcon v-if="showChevron" />
  </button>
</template>

<script setup lang="ts">
import { RouterLink, type RouteLocationRaw } from 'vue-router';
import ChevronRightIcon from '../ui/ChevronRightIcon.vue';

withDefaults(
  defineProps<{
    to?: RouteLocationRaw;
    showChevron?: boolean;
    type?: 'button' | 'submit';
  }>(),
  {
    to: undefined,
    type: 'button',
  },
);

defineEmits<{
  click: [];
}>();

const styles =
  'neon-glow inline-flex items-center gap-2 rounded-2xl bg-emerald-500 px-8 py-4 text-lg font-bold text-black transition-all hover:bg-emerald-400';
</script>
