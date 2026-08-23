<script setup lang="ts">
// internal application code imports
import BackgroundHeatmap from '@/features/home/components/decorations/BackgroundHeatmap.vue';

// constants
const steps = [
  {
    title: 'Entendemos la necesidad',
    description:
      'Nos sentamos con el área a mapear el proceso actual, quién participa y dónde se pierde el tiempo hoy.',
  },
  {
    title: 'Diseñamos y prototipamos',
    description:
      'Proponemos un alcance corto y una primera versión navegable para validar antes de escribir el sistema completo.',
  },
  {
    title: 'Construimos por entregas',
    description:
      'Desarrollamos en ciclos cortos con revisiones de código, para que el área vea avances y pueda corregir el rumbo.',
  },
  {
    title: 'Operamos y evolucionamos',
    description:
      'Acompañamos la puesta en producción y seguimos atendiendo el producto mientras esté en uso.',
  },
];
</script>

<template>
  <section class="reveal-source relative mx-auto max-w-7xl px-6 py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Cómo trabajamos</h2>
      <p class="mb-16 leading-relaxed text-white/60">
        Un recorrido corto y repetible, pensado para que un equipo que rota cada semestre pueda
        sostener productos que llevan años en producción.
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
