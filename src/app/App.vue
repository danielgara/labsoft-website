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
    <!-- Decorative blurred blobs behind everything else. -->
    <div class="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div
        class="absolute top-[-10%] left-[-10%] h-[40%] w-[40%] rounded-full bg-emerald-500/10 blur-[120px]"
      ></div>
      <div
        class="absolute right-[-10%] bottom-[-10%] h-[40%] w-[40%] rounded-full bg-blue-500/10 blur-[120px]"
      ></div>
      <div
        class="absolute top-[20%] right-[10%] h-[30%] w-[30%] rounded-full bg-purple-500/10 blur-[120px]"
      ></div>
    </div>

    <AppHeader />

    <main class="relative z-10 mx-auto max-w-7xl px-6 pb-32">
      <RouterView />
    </main>

    <footer class="relative z-10 border-t border-white/10 px-6 py-10">
      <div class="mx-auto max-w-7xl text-sm text-white/40">
        <p>© {{ currentYear }} LabSoft — Universidad EAFIT</p>
      </div>
    </footer>
  </div>
</template>
