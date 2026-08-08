<script setup lang="ts">
// internal application code imports
import PageHeading from '@/shared/components/PageHeading.vue';
import type ProductInterface from '@/shared/interfaces/ProductInterface';

// constants
const products: ProductInterface[] = [
  {
    name: 'DensURBAM',
    description: 'Plataforma de gestión de capacidad de soporte de los territorios.',
  },
  {
    name: 'Clasificados',
    description: 'Plataforma de clasificados de la comunidad EAFIT.',
  },
];
</script>

<template>
  <section class="animate-fade-in-up pt-12">
    <PageHeading
      subtitle="Plataformas que construimos y mantenemos al servicio de la Universidad y de su comunidad."
    />

    <div class="grid gap-6 md:grid-cols-2">
      <article v-for="product in products" :key="product.name" class="glass-hover rounded-3xl p-8">
        <div
          class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/10"
          aria-hidden="true"
        >
          <i class="fas fa-layer-group text-xl text-blue-400"></i>
        </div>
        <h3 class="mb-3 text-xl font-bold">{{ product.name }}</h3>
        <p class="leading-relaxed text-white/50">{{ product.description }}</p>
      </article>
    </div>
  </section>
</template>
