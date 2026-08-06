<script setup lang="ts">
// internal application code imports
import PageHeading from '@/shared/components/PageHeading.vue';
import type AllyInterface from '@/shared/interfaces/AllyInterface';

// constants
const allies: AllyInterface[] = [
  { name: 'Innovación', description: 'Dirección de Innovación EAFIT.' },
  {
    name: 'Área de Computación y Analítica',
    description: 'Investigación y desarrollo aplicado.',
  },
  { name: 'Urbam', description: 'Centro de Estudios Urbanos y Ambientales.' },
];
</script>

<template>
  <section class="animate-fade-in-up pt-12">
    <PageHeading
      subtitle="Las áreas y centros de la Universidad EAFIT con los que trabajamos de la mano."
    />

    <div class="grid gap-6 md:grid-cols-3">
      <article v-for="ally in allies" :key="ally.name" class="glass-hover rounded-3xl p-8">
        <div
          class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10"
          aria-hidden="true"
        >
          <i class="fas fa-cube text-xl text-purple-400"></i>
        </div>
        <h3 class="mb-3 text-xl font-bold">{{ ally.name }}</h3>
        <p class="leading-relaxed text-white/50">{{ ally.description }}</p>
      </article>
    </div>
  </section>
</template>
