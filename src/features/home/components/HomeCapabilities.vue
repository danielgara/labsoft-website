<script setup lang="ts">
// internal application code imports
import BackgroundShell from '@/features/home/components/decorations/BackgroundShell.vue';

// constants
const capabilities = [
  {
    icon: 'fas fa-code',
    iconColor: 'text-emerald-400',
    tile: 'bg-emerald-500/10',
    title: 'Desarrollo a la medida',
    description:
      'Construimos plataformas web para procesos que hoy viven en correos y hojas de cálculo, con el flujo y las reglas propias de cada área.',
  },
  {
    icon: 'fas fa-chart-simple',
    iconColor: 'text-blue-400',
    tile: 'bg-blue-500/10',
    title: 'Análisis de datos',
    description:
      'Modelamos y visualizamos la información que ya existe en la Universidad para que las decisiones se sustenten en evidencia.',
  },
  {
    icon: 'fas fa-arrows-rotate',
    iconColor: 'text-purple-400',
    tile: 'bg-purple-500/10',
    title: 'Operación y mantenimiento',
    description:
      'Un producto no termina cuando sale a producción: monitoreamos, corregimos y evolucionamos lo que ya está en uso.',
  },
  {
    icon: 'fas fa-graduation-cap',
    iconColor: 'text-emerald-400',
    tile: 'bg-emerald-500/10',
    title: 'Formación de estudiantes',
    description:
      'Cada semestre entra un grupo nuevo que trabaja sobre software real, con revisiones de código y prácticas de ingeniería.',
  },
];
</script>

<template>
  <section class="reveal-source relative mx-auto max-w-7xl px-6 py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Qué hacemos</h2>
      <p class="mb-16 leading-relaxed text-white/60">
        El laboratorio funciona como un equipo de producto dentro de la Universidad: recibimos una
        necesidad de un área y la acompañamos hasta que hay software funcionando.
      </p>
    </div>

    <div class="relative">
      <BackgroundShell />

      <div class="grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
        <article
          v-for="capability in capabilities"
          :key="capability.title"
          class="glass rounded-3xl p-8"
        >
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
            :class="capability.tile"
            aria-hidden="true"
          >
            <i :class="[capability.icon, capability.iconColor]" class="text-xl"></i>
          </div>
          <h3 class="mb-3 text-xl font-bold">{{ capability.title }}</h3>
          <p class="leading-relaxed text-white/60">{{ capability.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>
