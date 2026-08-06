<script setup lang="ts">
// external libraries imports
import { computed } from 'vue';
import { RouterLink, type RouteLocationRaw } from 'vue-router';

// types
type Props = {
  // When set, the button renders as a router link instead
  to?: RouteLocationRaw;
  variant?: 'primary' | 'secondary';
  showChevron?: boolean;
  type?: 'button' | 'submit';
};

// props
const props = withDefaults(defineProps<Props>(), {
  to: undefined,
  variant: 'primary',
  type: 'button',
});

// selectors
const classes = computed(() => [
  'inline-flex items-center gap-2 rounded-2xl px-8 py-4 text-lg font-bold transition-all',
  props.variant === 'primary'
    ? 'neon-glow bg-emerald-500 text-black hover:bg-emerald-400'
    : 'glass-hover',
]);
</script>

<template>
  <RouterLink v-if="to" :to="to" :class="classes">
    <slot />
    <i v-if="showChevron" class="fas fa-chevron-right text-base" aria-hidden="true"></i>
  </RouterLink>
  <button v-else :type="type" :class="classes">
    <slot />
    <i v-if="showChevron" class="fas fa-chevron-right text-base" aria-hidden="true"></i>
  </button>
</template>
