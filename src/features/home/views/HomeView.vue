<script setup lang="ts">
// internal application code imports
import HomeAllies from '@/features/home/components/HomeAllies.vue';
import HomeCapabilities from '@/features/home/components/HomeCapabilities.vue';
import HomeHero from '@/features/home/components/HomeHero.vue';
import HomeProcess from '@/features/home/components/HomeProcess.vue';
</script>

<template>
  <div>
    <HomeHero />
    <HomeCapabilities />
    <HomeProcess />
    <HomeAllies />
  </div>
</template>
