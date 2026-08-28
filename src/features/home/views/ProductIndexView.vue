<script setup lang="ts">
// internal application code imports
import PageHeading from '@/shared/components/PageHeading.vue';
import type ProductInterface from '@/features/home/interfaces/ProductInterface';

// constants
const products: ProductInterface[] = [
  {
    name: 'Densurbam',
    summary: 'Plataforma de gestión de capacidad de soporte de los territorios.',
    description:
      'Sistema de análisis territorial desarrollado por el Centro de Estudios Urbanos y Ambientales (Urbam) de la Universidad EAFIT. Permite analizar las capacidades de soporte de una ciudad-territorio, teniendo en cuenta criterios estratégicos de sostenibilidad de naturaleza ambiental o urbana.',
    responsibleArea: 'Centro de Estudios Urbanos y Ambientales, Urbam',
    users: 'Equipos de planeación e investigación',
    focus: 'Análisis territorial y sostenibilidad',
    icon: 'fas fa-map-location-dot',
  },
  {
    name: 'Movilidades (en construcción)',
    summary: 'Gestión de solicitudes de movilidad académica internacional.',
    description:
      'Sistema que acompaña una solicitud de movilidad de principio a fin: registro del participante, presupuesto asociado, revisión por parte de los gestores y seguimiento del estado. Reemplaza el flujo que antes vivía en correos y hojas de cálculo.',
    responsibleArea: 'Área Administrativa',
    users: 'Profesores y gestores de movilidad',
    focus: 'Gestión de solicitudes',
    icon: 'fas fa-plane-departure',
  },
  {
    name: 'Random Students',
    summary: 'Herramienta para selección aleatoria de estudiantes.',
    description:
      'Permite a los profesores seleccionar estudiantes de forma aleatoria para actividades académicas, ejercicios y participación en clase.',
    responsibleArea: 'Comunidad docente de EAFIT',
    users: 'Profesores',
    focus: 'Gestión de actividades académicas',
    icon: 'fas fa-shuffle',
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
        class="glass grid gap-8 rounded-3xl p-8 md:grid-cols-[auto_1fr] md:p-10"
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

        <div class="min-w-0 max-w-5xl">
          <h3 class="mb-2 text-2xl font-bold tracking-tight">{{ product.name }}</h3>
          <p class="mb-5 max-w-3xl leading-relaxed text-white/60">{{ product.description }}</p>

          <dl class="mb-6 grid gap-5 text-sm sm:grid-cols-2 lg:grid-cols-3">
            <div>
              <dt class="mb-1 text-xs font-semibold tracking-wide text-emerald-400 uppercase">
                Área responsable
              </dt>
              <dd class="text-white/60">{{ product.responsibleArea }}</dd>
            </div>
            <div>
              <dt class="mb-1 text-xs font-semibold tracking-wide text-emerald-400 uppercase">
                Usuarios
              </dt>
              <dd class="text-white/60">{{ product.users }}</dd>
            </div>
            <div>
              <dt class="mb-1 text-xs font-semibold tracking-wide text-emerald-400 uppercase">
                Enfoque
              </dt>
              <dd class="text-white/60">{{ product.focus }}</dd>
            </div>
          </dl>
        </div>
      </li>
    </ol>
  </section>
</template>
