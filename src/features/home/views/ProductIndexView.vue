<script setup lang="ts">
// internal application code imports
import PageHeading from '@/shared/components/PageHeading.vue';
import type ProductInterface from '@/features/home/interfaces/ProductInterface';

// constants
const products: ProductInterface[] = [
  {
    name: 'DensURBAM',
    summary: 'Plataforma de gestión de capacidad de soporte de los territorios.',
    description:
      'Herramienta de análisis territorial que cruza información de densidad, servicios públicos y equipamientos para estimar cuánta población puede sostener una zona. La usan equipos de planeación para sustentar decisiones de ordenamiento con datos y no con intuición.',
    status: 'En producción',
    year: '2023',
    technologies: ['Vue', 'Django', 'PostGIS', 'Leaflet'],
    icon: 'fas fa-map-location-dot',
  },
  {
    name: 'Clasificados',
    summary: 'Plataforma de clasificados de la comunidad EAFIT.',
    description:
      'Espacio donde estudiantes, profesores y egresados publican y encuentran productos y servicios dentro de la comunidad universitaria. Incluye moderación de publicaciones, búsqueda por categorías y verificación con la cuenta institucional.',
    status: 'En producción',
    year: '2024',
    technologies: ['Vue', 'Django REST', 'PostgreSQL'],
    icon: 'fas fa-tags',
  },
  {
    name: 'Movilidad',
    summary: 'Gestión de solicitudes de movilidad académica internacional.',
    description:
      'Sistema que acompaña una solicitud de movilidad de principio a fin: registro del participante, presupuesto asociado, revisión por parte de los gestores y seguimiento del estado. Reemplaza el flujo que antes vivía en correos y hojas de cálculo.',
    status: 'En desarrollo',
    year: '2025',
    technologies: ['Vue', 'Django', 'Docker'],
    icon: 'fas fa-plane-departure',
  },
];
</script>

<template>
  <section class="mx-auto max-w-7xl px-6 pt-32 pb-24">
    <PageHeading
      centered
      subtitle="Plataformas que construimos y mantenemos al servicio de la Universidad y de su comunidad. Cada una nació de una necesidad concreta de un área."
    />

    <ol class="flex flex-col gap-4">
      <li
        v-for="(product, index) in products"
        :key="product.name"
        class="glass grid gap-8 rounded-3xl p-8 md:grid-cols-[auto_1fr_auto] md:p-10"
      >
        <div class="flex items-start gap-6">
          <p class="font-mono text-sm text-white/25">
            {{ String(index + 1).padStart(2, '0') }}
          </p>
          <div
            class="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-emerald-500/10"
            aria-hidden="true"
          >
            <i :class="product.icon" class="text-2xl text-emerald-400"></i>
          </div>
        </div>

        <div class="max-w-2xl">
          <h3 class="mb-2 text-2xl font-bold tracking-tight">{{ product.name }}</h3>
          <p class="mb-5 leading-relaxed text-white/60">{{ product.description }}</p>

          <ul class="flex flex-wrap gap-2">
            <li
              v-for="technology in product.technologies"
              :key="technology"
              class="rounded-lg border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/50"
            >
              {{ technology }}
            </li>
          </ul>
        </div>

        <div class="flex flex-row items-center gap-4 md:flex-col md:items-end md:gap-3">
          <span
            class="rounded-full px-3 py-1 text-xs font-semibold"
            :class="
              product.status === 'En producción'
                ? 'bg-emerald-500/15 text-emerald-400'
                : 'bg-blue-500/15 text-blue-400'
            "
          >
            {{ product.status }}
          </span>
          <span class="text-sm text-white/30">Desde {{ product.year }}</span>
          <a
            v-if="product.url"
            :href="product.url"
            target="_blank"
            rel="noopener noreferrer"
            class="text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
          >
            Visitar
            <i class="fas fa-arrow-up-right-from-square ml-1 text-xs" aria-hidden="true"></i>
          </a>
        </div>
      </li>
    </ol>
  </section>
</template>
