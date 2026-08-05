<script setup lang="ts">
import { RouterView } from 'vue-router';
import AppHeader from '@/components/common/AppHeader.vue';
import AppFooter from '@/components/common/AppFooter.vue';
import BackgroundGradients from '@/components/ui/BackgroundGradients.vue';
</script>

<template>
  <div class="relative min-h-screen bg-slate-950 font-sans">
    <!-- Degradados de fondo -->
    <BackgroundGradients />

    <!-- Navegación principal -->
    <AppHeader />

    <!-- Contenido de la ruta activa -->
    <main class="relative z-10 mx-auto max-w-7xl px-6 pb-32">
      <!-- Sin <Transition> a propósito: cada vista ya tiene su propia animación de
           entrada, y "out-in" obligaba a esperar a que terminara la de salida. -->
      <RouterView />
    </main>

    <AppFooter />
  </div>
</template>
