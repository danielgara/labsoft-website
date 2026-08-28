<script setup lang="ts">
// internal application code imports
import BackgroundHeatmap from '@/features/home/components/decorations/BackgroundHeatmap.vue';

// constants
const steps = [
  {
    title: 'Conversamos sobre la necesidad',
    description:
      'Cuando un área identifica una necesidad, nos reunimos con la persona encargada para conocer el problema y evaluar posibles alternativas.',
  },
  {
    title: 'Diseñamos la solución',
    description:
      'Según el problema, elaboramos prototipos y definimos aspectos técnicos como la arquitectura y el modelo de datos antes de desarrollar.',
  },
  {
    title: 'Desarrollamos el proyecto',
    description:
      'Construimos la solución hasta completar el proyecto, revisando periódicamente los avances con el área de acuerdo con la disponibilidad de ambas partes.',
  },
  {
    title: 'Evaluamos y mejoramos',
    description:
      'Acompañamos la puesta en producción cuando es necesario y capacitamos al equipo para utilizar correctamente el software.',
  },
];
</script>

<template>
  <section class="reveal-source relative mx-auto max-w-7xl px-6 py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Cómo trabajamos</h2>
      <p class="mb-16 leading-relaxed text-white/60">
        Partimos de una conversación con el área, analizamos el problema y desarrollamos una
        solución de software que responda a sus necesidades.
      </p>
    </div>

    <div class="relative">
      <BackgroundHeatmap />

      <ol class="flex flex-col gap-4 lg:ml-auto lg:max-w-2xl">
        <li
          v-for="(step, index) in steps"
          :key="step.title"
          class="glass flex items-start gap-6 rounded-3xl p-6 md:p-8"
        >
          <p class="shrink-0 font-mono text-2xl font-bold text-emerald-400/60">
            {{ String(index + 1).padStart(2, '0') }}
          </p>
          <div>
            <h3 class="mb-2 text-lg font-bold">{{ step.title }}</h3>
            <p class="text-sm leading-relaxed text-white/50">{{ step.description }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>
</template>
