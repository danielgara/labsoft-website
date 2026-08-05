<template>
  <footer class="relative z-10 border-t border-white/10 px-6 py-10">
    <div
      class="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-white/40 md:flex-row"
    >
      <p>© {{ currentYear }} LabSoft — Universidad EAFIT</p>
      <RouterLink :to="{ name: 'contacto' }" class="transition-colors hover:text-white">
        Contáctanos
      </RouterLink>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router';

const currentYear = new Date().getFullYear();
</script>
