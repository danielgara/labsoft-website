<template>
  <nav class="sticky top-0 z-50 px-6 py-4">
    <div class="max-w-7xl mx-auto glass rounded-2xl px-6 py-3 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <div class="w-10 h-10 bg-emerald-500 rounded-lg flex items-center justify-center neon-glow">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
            class="lucide lucide-beaker text-black w-6 h-6" aria-hidden="true">
            <path d="M4.5 3h15"></path>
            <path d="M6 3v16a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V3"></path>
            <path d="M6 14h12"></path>
          </svg>
        </div>
        <span class="font-bold text-xl tracking-tight">
          LAB<span class="text-emerald-400">SOFT</span>
        </span>
      </div>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
        <NavLink href="#equipo" label="Equipo" />
        <NavLink href="#productos" label="Productos" />
        <NavLink href="#aliados" label="Aliados" />
      </div>

      <!-- Search Button -->
      <div class="flex items-center gap-4">
        <SearchButton />
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import NavLink from './NavLink.vue'
import SearchButton from '../buttons/SearchButton.vue'
</script>
