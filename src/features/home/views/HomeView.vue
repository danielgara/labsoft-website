<script setup lang="ts">
// external libraries imports
import { RouterLink } from 'vue-router';

// internal application code imports
import AppButton from '@/shared/components/AppButton.vue';

// constants
const sections = [
  {
    to: { name: 'equipo.index' },
    title: 'Equipo',
    icon: 'fas fa-code',
    iconColor: 'text-emerald-400',
    description:
      'Profesores, administrativos y estudiantes de EAFIT que construyen y mantienen nuestros productos.',
    linkLabel: 'Conocer al equipo',
  },
  {
    to: { name: 'productos.index' },
    title: 'Productos',
    icon: 'fas fa-layer-group',
    iconColor: 'text-blue-400',
    description: 'Plataformas en producción al servicio de la Universidad y de su comunidad.',
    linkLabel: 'Ver productos',
  },
  {
    to: { name: 'aliados.index' },
    title: 'Aliados',
    icon: 'fas fa-cube',
    iconColor: 'text-purple-400',
    description: 'Las áreas y centros de EAFIT con los que trabajamos de la mano.',
    linkLabel: 'Ver aliados',
  },
];
</script>

<template>
  <div>
    <section class="pt-20 pb-32">
      <div class="grid items-center gap-16 lg:grid-cols-2">
        <div class="animate-fade-in-up">
          <h1 class="mb-8 text-6xl leading-[1.1] font-bold tracking-tight md:text-7xl">
            Productos de Software
            <br />
            <span class="gradient-text">para EAFIT</span>
          </h1>
          <p class="mb-10 max-w-xl text-lg leading-relaxed text-white/60">
            Somos un equipo de profesores, administrativos y estudiantes de la Universidad EAFIT que
            se dedica a crear productos de Software para la Universidad.
          </p>
          <div class="flex flex-wrap gap-4">
            <AppButton :to="{ name: 'equipo.index' }" show-chevron>Ver Equipo</AppButton>
            <AppButton :to="{ name: 'productos.index' }" variant="secondary">
              Ver Productos
            </AppButton>
          </div>
        </div>

        <div class="animate-slide-in-left relative">
          <div class="glass rounded-3xl p-6">
            <div class="flex h-full flex-col">
              <!-- Fake browser chrome -->
              <div class="mb-4 flex items-center gap-2 px-2">
                <div class="flex gap-1.5">
                  <div class="h-3 w-3 rounded-full bg-red-500/50"></div>
                  <div class="h-3 w-3 rounded-full bg-yellow-500/50"></div>
                  <div class="h-3 w-3 rounded-full bg-green-500/50"></div>
                </div>
                <div
                  class="flex-1 text-center font-mono text-[10px] tracking-widest text-white/30 uppercase"
                >
                  labsoft.io
                </div>
              </div>

              <div
                class="flex min-h-[300px] flex-1 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500/10 to-blue-500/10 p-6"
              >
                <div class="text-center">
                  <div class="gradient-text mb-2 text-4xl font-bold">LabSoft</div>
                  <p class="text-sm text-white/60">Plataforma de Innovación EAFIT</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section>
      <h2 class="mb-16 text-3xl font-bold text-white">Nuestro Laboratorio</h2>

      <div class="grid items-start gap-8 md:grid-cols-3">
        <RouterLink
          v-for="section in sections"
          :key="section.title"
          :to="section.to"
          class="glass-hover group block rounded-3xl p-8"
        >
          <div
            class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/5"
            aria-hidden="true"
          >
            <i :class="[section.icon, section.iconColor]" class="text-xl"></i>
          </div>
          <h3 class="mb-3 text-xl font-bold">{{ section.title }}</h3>
          <p class="mb-6 text-sm leading-relaxed text-white/50">{{ section.description }}</p>
          <span class="inline-flex items-center gap-2 text-sm font-semibold text-emerald-400">
            {{ section.linkLabel }}
            <i
              class="fas fa-chevron-right transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            ></i>
          </span>
        </RouterLink>
      </div>
    </section>
  </div>
</template>
