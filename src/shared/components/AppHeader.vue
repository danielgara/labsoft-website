<script setup lang="ts">
// external libraries imports
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

// reactive variables
const isMenuOpen = ref(false);
const route = useRoute();

// constants
const navLinkClass = 'transition-colors hover:text-white';

const navItems = [
  { name: 'home.index', label: 'Inicio' },
  { name: 'equipo.index', label: 'Equipo' },
  { name: 'productos.index', label: 'Productos' },
  { name: 'aliados.index', label: 'Aliados' },
];

// watchers
watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  },
);
</script>

<template>
  <nav class="sticky top-0 z-50 px-6 py-4">
    <div class="glass mx-auto max-w-7xl rounded-2xl px-6 py-3">
      <div class="flex items-center justify-between">
        <RouterLink :to="{ name: 'home.index' }" class="flex items-center gap-2">
          <img
            src="@/assets/Labsoft-Icon.png"
            alt=""
            width="40"
            height="40"
            class="neon-glow h-10 w-10 rounded-lg"
          />
          <span class="text-xl font-bold tracking-tight">
            LAB<span class="text-emerald-400">SOFT</span>
          </span>
        </RouterLink>

        <div class="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
          <RouterLink
            v-for="item in navItems"
            :key="item.name"
            :to="{ name: item.name }"
            :class="navLinkClass"
            exact-active-class="text-white"
          >
            {{ item.label }}
          </RouterLink>
        </div>

        <button
          type="button"
          class="p-2 text-white/60 transition-colors hover:text-white md:hidden"
          :aria-expanded="isMenuOpen"
          aria-label="Abrir menú de navegación"
          @click="isMenuOpen = !isMenuOpen"
        >
          <i :class="isMenuOpen ? 'fa-xmark' : 'fa-bars'" class="fas text-lg"></i>
        </button>
      </div>

      <div
        v-if="isMenuOpen"
        class="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3 text-sm font-medium text-white/60 md:hidden"
      >
        <RouterLink
          v-for="item in navItems"
          :key="item.name"
          :to="{ name: item.name }"
          :class="navLinkClass"
          exact-active-class="text-white"
        >
          {{ item.label }}
        </RouterLink>
      </div>
    </div>
  </nav>
</template>
