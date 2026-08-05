<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useLabsoftStore } from '@/stores/labsoft';
import PageHeading from '@/components/ui/PageHeading.vue';

const { team } = storeToRefs(useLabsoftStore());
</script>

<template>
  <section class="animate-fade-in-up pt-12">
    <PageHeading
      subtitle="Profesores, administrativos y estudiantes de la Universidad EAFIT dedicados a crear productos de software para la Universidad."
    />

    <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="member in team"
        :key="member.name"
        class="glass-hover flex items-center gap-4 rounded-3xl p-6"
      >
        <div
          class="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10"
        >
          <i class="fas fa-user text-emerald-400" aria-hidden="true"></i>
        </div>
        <div>
          <h3 class="font-bold">{{ member.name }}</h3>
          <p class="text-sm text-white/50">{{ member.role }}</p>
        </div>
      </article>
    </div>
  </section>
</template>
