<script setup lang="ts">
// external libraries imports
import { RouterView } from 'vue-router';

// internal application code imports
import AppHeader from '@/shared/components/AppHeader.vue';

// constants
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="relative min-h-screen bg-slate-950 font-sans">
    <div class="pointer-events-none sticky top-0 z-0 -mb-[100vh] h-screen overflow-hidden">
      <div
        class="blob-scroll absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-emerald-500/10 blur-[120px] [--blob-scale:1.4] [--blob-x:30vw] [--blob-y:40vh]"
      ></div>
      <div
        class="blob-scroll absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[120px] [--blob-scale:1.2] [--blob-x:-25vw] [--blob-y:-45vh]"
      ></div>
      <div
        class="blob-scroll absolute top-[45%] right-[15%] h-[30%] w-[30%] rounded-full bg-purple-500/10 opacity-0 blur-[120px] [--blob-opacity:1] [--blob-scale:1.6] [--blob-x:-15vw] [--blob-y:25vh]"
      ></div>
    </div>

    <AppHeader />

    <main class="relative z-10">
      <RouterView />
    </main>

    <footer class="relative z-10 border-t border-white/10 px-6 py-10">
      <div
        class="mx-auto flex max-w-7xl flex-col gap-2 text-sm text-white/40 md:flex-row md:items-center md:justify-between"
      >
        <p>© {{ currentYear }} LabSoft — Universidad EAFIT</p>
        <p>Universidad EAFIT · Medellín, Colombia</p>
      </div>
    </footer>
  </div>
</template>
