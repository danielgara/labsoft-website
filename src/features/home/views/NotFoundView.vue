<script setup lang="ts">
// internal application code imports
import AppButton from '@/shared/components/AppButton.vue';
</script>

<template>
  <section class="animate-fade-in-up flex flex-col items-center pt-24 text-center">
    <p class="gradient-text mb-4 text-7xl font-bold">404</p>
    <h2 class="mb-4 text-3xl font-bold">Esta página no existe</h2>
    <p class="mb-10 max-w-md leading-relaxed text-white/60">
      El enlace que seguiste no corresponde a ninguna sección del sitio.
    </p>
    <AppButton :to="{ name: 'home.index' }" show-chevron>Volver al inicio</AppButton>
  </section>
</template>
