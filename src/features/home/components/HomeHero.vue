<script setup lang="ts">
// external libraries imports
import { ref } from 'vue';

// internal application code imports
import heroVideo from '@/assets/video/hero.mp4';
import AppButton from '@/shared/components/AppButton.vue';
import useHeroVideo from '@/shared/composables/useHeroVideo';

// reactive variables
const video = ref<HTMLVideoElement | null>(null);

// selectors
const { isPlaying } = useHeroVideo(video);
</script>

<template>
  <section class="relative flex min-h-screen items-end overflow-hidden">
    <video
      ref="video"
      :src="heroVideo"
      class="absolute inset-0 h-full w-full object-cover object-[center_60%]"
      muted
      loop
      playsinline
      autoplay
      preload="auto"
      disablepictureinpicture
      aria-hidden="true"
    ></video>

    <div
      class="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950 transition-opacity duration-700"
      :class="isPlaying ? 'opacity-0' : 'opacity-100'"
      aria-hidden="true"
    ></div>

    <div
      class="absolute inset-0 bg-linear-to-b from-slate-950/85 via-slate-950/30 to-slate-950"
      aria-hidden="true"
    ></div>

    <div class="relative mx-auto w-full max-w-7xl px-6 pt-32 pb-24">
      <p class="mb-6 text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase">
        Laboratorio de Software · Universidad EAFIT
      </p>

      <h1
        class="animate-fade-in-up mb-8 max-w-4xl text-5xl leading-[1.05] font-bold tracking-tight md:text-7xl"
      >
        Software propio para
        <span class="gradient-text">los retos de la Universidad</span>
      </h1>

      <p class="mb-10 max-w-2xl text-lg leading-relaxed text-white/70">
        Somos un equipo de profesores, administrativos y estudiantes de EAFIT que diseña, construye
        y mantiene las plataformas que usan las áreas de la Universidad. Cada producto nace de una
        necesidad real y se sostiene en el tiempo.
      </p>

      <div class="flex flex-wrap gap-4">
        <AppButton :to="{ name: 'home.products' }" show-chevron>Ver productos</AppButton>
        <AppButton :to="{ name: 'home.team' }" variant="secondary">Conocer al equipo</AppButton>
      </div>
    </div>
  </section>
</template>
