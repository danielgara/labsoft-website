<template>
  <div class="min-h-screen relative font-sans bg-slate-950">
    <!-- Background Gradients -->
    <BackgroundGradients />

    <!-- Header Navigation -->
    <AppHeader />

    <!-- Hero Section -->
    <HeroSection />

    <!-- Team, Products, and Allies Section -->
    <main class="relative z-10 max-w-7xl mx-auto px-6 pb-32">
      <h2 class="text-3xl font-bold mb-16 text-white">Nuestro Laboratorio</h2>
      <div class="grid md:grid-cols-3 gap-8 items-start">
        <TeamSection />
        <ProductsSection />
        <AlliesSection />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './components/common/AppHeader.vue'
import HeroSection from './components/sections/HeroSection.vue'
import BackgroundGradients from './components/ui/BackgroundGradients.vue'
import TeamSection from './components/sections/TeamSection.vue'
import ProductsSection from './components/sections/ProductsSection.vue'
import AlliesSection from './components/sections/AlliesSection.vue'
</script>
