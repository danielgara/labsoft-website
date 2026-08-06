<script setup lang="ts">
// external libraries imports
import { storeToRefs } from 'pinia';

// internal application code imports
import PageHeading from '@/shared/components/PageHeading.vue';
import { useLabsoftStore } from '@/shared/stores/labsoft';

// selectors
const { allies } = storeToRefs(useLabsoftStore());
</script>

<template>
  <section class="animate-fade-in-up pt-12">
    <PageHeading
      subtitle="Las áreas y centros de la Universidad EAFIT con los que trabajamos de la mano."
    />

    <div class="grid gap-6 md:grid-cols-3">
      <article v-for="ally in allies" :key="ally.name" class="glass-hover rounded-3xl p-8">
        <div
          class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10"
          aria-hidden="true"
        >
          <i class="fas fa-cube text-xl text-purple-400"></i>
        </div>
        <h3 class="mb-3 text-xl font-bold">{{ ally.name }}</h3>
        <p class="leading-relaxed text-white/50">{{ ally.description }}</p>
      </article>
    </div>
  </section>
</template>
