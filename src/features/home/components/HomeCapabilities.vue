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
      'Desarrollamos soluciones para la gestión académica y transformamos procesos manuales en herramientas digitales adaptadas a cada área.',
  },
  {
    icon: 'fas fa-arrows-rotate',
    iconColor: 'text-blue-400',
    tile: 'bg-blue-500/10',
    title: 'Operación y mantenimiento',
    description:
      'Acompañamos la evolución de los proyectos para que las soluciones desarrolladas sigan respondiendo a las necesidades de las áreas.',
  },
  {
    icon: 'fas fa-graduation-cap',
    iconColor: 'text-emerald-400',
    tile: 'bg-emerald-500/10',
    title: 'Formación de estudiantes',
    description:
      'Los estudiantes aportan al desarrollo de proyectos y fortalecen sus habilidades trabajando con necesidades y retos reales.',
  },
  {
    icon: 'fas fa-pen-ruler',
    iconColor: 'text-purple-400',
    tile: 'bg-purple-500/10',
    title: 'Análisis y prototipado',
    description:
      'Nos reunimos con cada área para entender su necesidad, diseñar prototipos y validar la solución antes de desarrollarla.',
  },
];
</script>

<template>
  <section class="reveal-source relative mx-auto max-w-7xl px-6 py-32">
    <div class="mx-auto max-w-2xl text-center">
      <h2 class="mb-4 text-3xl font-bold tracking-tight md:text-4xl">Qué hacemos</h2>
      <p class="mb-16 leading-relaxed text-white/60">
        Trabajamos junto a las áreas de la Universidad para entender sus necesidades, diseñar
        soluciones y convertir sus procesos en herramientas digitales.
      </p>
    </div>

    <div class="relative">
      <BackgroundShell />

      <div class="grid gap-6 sm:grid-cols-2 lg:max-w-2xl">
        <article
          v-for="capability in capabilities"
          :key="capability.title"
          class="glass rounded-3xl p-8 text-center"
        >
          <div
            class="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
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
