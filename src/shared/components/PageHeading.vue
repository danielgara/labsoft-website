<script setup lang="ts">
// external libraries imports
import { computed } from 'vue';
import { useRoute } from 'vue-router';

// types
type Props = {
  title?: string;
  subtitle?: string;
  centered?: boolean;
};

// props
const props = defineProps<Props>();

// reactive variables
const route = useRoute();

// selectors
const heading = computed(() => props.title ?? route.meta.title);
</script>

<template>
  <header class="mb-12" :class="{ 'text-center': centered }">
    <h2 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
      <span class="gradient-text">{{ heading }}</span>
    </h2>
    <p
      v-if="subtitle"
      class="max-w-2xl leading-relaxed text-white/60"
      :class="{ 'mx-auto': centered }"
    >
      {{ subtitle }}
    </p>
  </header>
</template>
