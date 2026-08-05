<template>
  <header class="mb-12">
    <h2 class="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
      <span class="gradient-text">{{ heading }}</span>
    </h2>
    <p v-if="subtitle" class="max-w-2xl leading-relaxed text-white/60">{{ subtitle }}</p>
  </header>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const props = defineProps<{
  /** Solo si el encabezado debe diferir del título de la ruta. */
  title?: string;
  subtitle?: string;
}>();

const route = useRoute();

// Por defecto el título sale del router (meta.title), para no repetirlo en cada vista.
const heading = computed(() => props.title ?? route.meta.title);
</script>
