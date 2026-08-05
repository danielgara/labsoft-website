<template>
  <section class="pt-20 pb-32">
    <div class="grid items-center gap-16 lg:grid-cols-2">
      <!-- Contenido izquierdo -->
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
          <PrimaryButton :to="{ name: 'equipo' }" show-chevron>Ver Equipo</PrimaryButton>
          <SecondaryButton :to="{ name: 'productos' }">Ver Productos</SecondaryButton>
        </div>
      </div>

      <!-- Contenido derecho: tarjeta glass -->
      <div class="animate-slide-in-left relative">
        <GlassCard>
          <div class="flex h-full flex-col">
            <!-- Simulación de pestañas del navegador -->
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

            <!-- Área de contenido -->
            <div
              class="flex min-h-[300px] flex-1 items-center justify-center rounded-xl bg-linear-to-br from-emerald-500/10 to-blue-500/10 p-6"
            >
              <div class="text-center">
                <div class="gradient-text mb-2 text-4xl font-bold">LabSoft</div>
                <p class="text-sm text-white/60">Plataforma de Innovación EAFIT</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PrimaryButton from '../buttons/PrimaryButton.vue';
import SecondaryButton from '../buttons/SecondaryButton.vue';
import GlassCard from '../cards/GlassCard.vue';
</script>
