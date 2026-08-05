<script setup lang="ts">
import HeroSection from '@/components/sections/HeroSection.vue';
import PreviewCard from '@/components/cards/PreviewCard.vue';
</script>

<template>
  <div>
    <HeroSection />

    <section>
      <h2 class="mb-16 text-3xl font-bold text-white">Nuestro Laboratorio</h2>
      <div class="grid items-start gap-8 md:grid-cols-3">
        <PreviewCard
          :to="{ name: 'equipo' }"
          title="Equipo"
          icon="fas fa-code"
          accent="text-emerald-400"
          link-label="Conocer al equipo"
        >
          Profesores, administrativos y estudiantes de EAFIT que construyen y mantienen nuestros
          productos.
        </PreviewCard>

        <PreviewCard
          :to="{ name: 'productos' }"
          title="Productos"
          icon="fas fa-layer-group"
          accent="text-blue-400"
          link-label="Ver productos"
        >
          Plataformas en producción al servicio de la Universidad y de su comunidad.
        </PreviewCard>

        <PreviewCard
          :to="{ name: 'aliados' }"
          title="Aliados"
          icon="fas fa-cube"
          accent="text-purple-400"
          link-label="Ver aliados"
        >
          Las áreas y centros de EAFIT con los que trabajamos de la mano.
        </PreviewCard>
      </div>
    </section>
  </div>
</template>
