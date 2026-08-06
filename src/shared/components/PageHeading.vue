<script setup lang="ts">
// external libraries imports
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// types
type Props = {
  /** Only when the heading must differ from the route title. */
  title?: string;
  subtitle?: string;
};

// props
const props = defineProps<Props>();

// reactive variables
const route = useRoute();

// selectors
// The title defaults to the router's meta.title so views don't have to repeat it.
const heading = computed(() => props.title ?? route.meta.title);
</script>

<template>
  <header class="mb-12">
    <h2 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
      <span class="gradient-text">{{ heading }}</span>
    </h2>
    <p v-if="subtitle" class="max-w-2xl leading-relaxed text-white/60">{{ subtitle }}</p>
  </header>
</template>
