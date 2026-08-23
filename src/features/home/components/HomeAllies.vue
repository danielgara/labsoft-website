<script setup lang="ts">
// internal application code imports
import BackgroundBranches from '@/features/home/components/decorations/BackgroundBranches.vue';
import type AllyInterface from '@/features/home/interfaces/AllyInterface';

// constants
const allies: AllyInterface[] = [
  {
    name: 'Dirección de Innovación',
    description: 'Área de la Universidad que impulsa la innovación.',
    icon: 'fas fa-lightbulb',
  },
  {
    name: 'Área administrativa',
    description: 'Áreas que gestionan procesos administrativos de la Universidad.',
    icon: 'fas fa-building',
  },
  {
    name: 'Escuela de Ingeniería',
    description: 'Comunidad académica de la Universidad.',
    icon: 'fas fa-gears',
  },
];
</script>

<template>
  <section class="reveal-source relative mx-auto max-w-7xl px-6 py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Con quién trabajamos</h2>
      <p class="mb-16 leading-relaxed text-white/60">
        Trabajamos con distintas áreas de la Universidad para convertir sus necesidades en
        soluciones reales mediante software.
      </p>
    </div>

    <div class="relative">
      <BackgroundBranches />

      <div class="grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
        <article
          v-for="ally in allies"
          :key="ally.name"
          class="glass rounded-3xl p-8 text-center sm:[&:nth-child(3)]:col-span-2 sm:[&:nth-child(3)]:mx-auto sm:[&:nth-child(3)]:w-1/2"
        >
          <div
            class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10"
            aria-hidden="true"
          >
            <i :class="ally.icon" class="text-xl text-purple-400"></i>
          </div>
          <h3 class="mb-2 text-lg font-bold">{{ ally.name }}</h3>
          <p class="text-sm leading-relaxed text-white/60">{{ ally.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
