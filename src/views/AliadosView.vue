<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLabsoftStore } from '@/stores/labsoft';
import PageHeading from '@/components/ui/PageHeading.vue';

const { allies } = storeToRefs(useLabsoftStore());
</script>

<template>
  <section class="animate-fade-in-up pt-12">
    <PageHeading
      subtitle="Las áreas y centros de la Universidad EAFIT con los que trabajamos de la mano."
    />

    <div class="grid gap-6 md:grid-cols-3">
      <article v-for="ally in allies" :key="ally.name" class="glass-hover rounded-3xl p-8">
        <div class="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/10">
          <i class="fas fa-cube text-purple-400" aria-hidden="true"></i>
        </div>
        <h3 class="mb-3 text-xl font-bold">{{ ally.name }}</h3>
        <p class="leading-relaxed text-white/50">{{ ally.description }}</p>
      </article>
    </div>
  </section>
</template>
