<script setup lang="ts">
// external libraries imports
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

// internal application code imports
import useScrolled from '@/shared/composables/useScrolled';

// reactive variables
const isMenuOpen = ref(false);
const route = useRoute();

// constants
const navItems = [
  { name: 'home.index', label: 'Inicio' },
  { name: 'home.products', label: 'Productos' },
  { name: 'home.team', label: 'Equipo' },
];

// selectors
const { isScrolled } = useScrolled();

// watchers
watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  },
);
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-colors duration-300"
    :class="
      isScrolled || isMenuOpen
        ? 'border-b border-white/10 bg-slate-950/80 backdrop-blur-lg'
        : 'bg-transparent'
    "
  >
    <nav class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
      <RouterLink
        :to="{ name: 'home.index' }"
        class="flex items-center gap-2"
        aria-label="LabSoft, ir al inicio"
      >
        <img
          src="@/assets/Labsoft-Icon.png"
          alt=""
          width="40"
          height="40"
          class="h-10 w-10 rounded-lg"
        />
        <span class="text-xl font-bold tracking-tight">
          LAB<span class="text-emerald-400">SOFT</span>
        </span>
      </RouterLink>

      <div class="hidden items-center gap-8 md:flex">
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="{ name: item.name }"
          class="border-b-2 border-transparent pb-1 text-sm font-medium text-white/60 transition-colors hover:text-white"
          exact-active-class="border-emerald-400 text-white"
        >
          {{ item.label }}
        </RouterLink>
      </div>

      <button
        type="button"
        class="p-2 text-white/70 transition-colors hover:text-white md:hidden"
        :aria-expanded="isMenuOpen"
        aria-controls="mobile-menu"
        aria-label="Abrir menú de navegación"
        @click="isMenuOpen = !isMenuOpen"
      >
        <i :class="isMenuOpen ? 'fa-xmark' : 'fa-bars'" class="fas text-xl"></i>
      </button>
    </nav>

    <div v-if="isMenuOpen" id="mobile-menu" class="border-t border-white/10 px-6 py-2 md:hidden">
      <RouterLink
        v-for="item in navItems"
        :key="item.name"
        :to="{ name: item.name }"
        class="block rounded-xl px-4 py-4 text-base font-medium text-white/70 transition-colors hover:bg-white/5 hover:text-white"
        exact-active-class="bg-white/5 text-white"
      >
        {{ item.label }}
      </RouterLink>
    </div>
  </header>
</template>
