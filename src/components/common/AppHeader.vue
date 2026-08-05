<template>
  <nav class="sticky top-0 z-50 px-6 py-4">
    <div class="glass mx-auto max-w-7xl rounded-2xl px-6 py-3">
      <div class="flex items-center justify-between">
        <!-- Logo -->
        <RouterLink :to="{ name: 'home' }" class="flex items-center gap-2">
          <!-- alt vacío a propósito: el nombre ya lo aporta el wordmark de al lado -->
          <img
            src="/Labsoft-Icon.png"
            alt=""
            width="40"
            height="40"
            class="neon-glow h-10 w-10 rounded-lg"
          />
          <span class="text-xl font-bold tracking-tight">
            LAB<span class="text-emerald-400">SOFT</span>
          </span>
        </RouterLink>

        <!-- Navegación de escritorio -->
        <div class="hidden items-center gap-8 text-sm font-medium text-white/60 md:flex">
          <NavLink
            v-for="item in navItems"
            :key="item.name"
            :to="{ name: item.name }"
            :label="item.label"
          />
        </div>

        <!-- Botón de menú móvil (en escritorio se oculta y la navegación queda a la derecha) -->
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

      <!-- Navegación móvil -->
      <div
        v-if="isMenuOpen"
        class="mt-3 flex flex-col gap-3 border-t border-white/10 pt-3 text-sm font-medium text-white/60 md:hidden"
      >
        <NavLink
          v-for="item in navItems"
          :key="item.name"
          :to="{ name: item.name }"
          :label="item.label"
        />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import NavLink from './NavLink.vue';

const navItems = [
  { name: 'home', label: 'Inicio' },
  { name: 'equipo', label: 'Equipo' },
  { name: 'productos', label: 'Productos' },
  { name: 'aliados', label: 'Aliados' },
  { name: 'contacto', label: 'Contacto' },
];

const isMenuOpen = ref(false);
const route = useRoute();

// Cerrar el menú móvil al cambiar de ruta.
watch(
  () => route.fullPath,
  () => {
    isMenuOpen.value = false;
  },
);
</script>
