<script setup lang="ts">
// internal application code imports
import BackgroundBranches from '@/features/home/components/decorations/BackgroundBranches.vue';
import type AllyInterface from '@/features/home/interfaces/AllyInterface';

// constants
const allies: AllyInterface[] = [
  {
    name: 'Dirección de Innovación',
    description: 'Dirección de Innovación EAFIT.',
    collaboration: 'Identificación de oportunidades y acompañamiento a nuevos productos.',
    icon: 'fas fa-lightbulb',
  },
  {
    name: 'Computación y Analítica',
    description: 'Área de investigación y desarrollo aplicado.',
    collaboration: 'Modelos analíticos y asesoría técnica en los proyectos del laboratorio.',
    icon: 'fas fa-microchip',
  },
  {
    name: 'Urbam',
    description: 'Centro de Estudios Urbanos y Ambientales.',
    collaboration: 'Conocimiento territorial que alimenta las plataformas de análisis urbano.',
    icon: 'fas fa-city',
  },
];
</script>

<template>
  <section class="reveal-source relative mx-auto max-w-7xl px-6 py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Con quién trabajamos</h2>
      <p class="mb-16 leading-relaxed text-white/60">
        No trabajamos solos: las áreas y centros de EAFIT aportan el conocimiento del dominio y
        nosotros lo convertimos en software.
      </p>
    </div>

    <div class="relative">
      <BackgroundBranches />

      <div class="grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
        <article v-for="ally in allies" :key="ally.name" class="glass rounded-3xl p-8">
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10"
            aria-hidden="true"
          >
            <i :class="ally.icon" class="text-xl text-purple-400"></i>
          </div>
          <h3 class="mb-2 text-lg font-bold">{{ ally.name }}</h3>
          <p class="mb-4 text-sm text-white/40">{{ ally.description }}</p>
          <p class="text-sm leading-relaxed text-white/60">{{ ally.collaboration }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
