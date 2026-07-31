<template>
  <section class="relative z-10 max-w-7xl mx-auto px-6 pt-20 pb-32">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left Content -->
      <div class="animate-fade-in-up">
        <h1 class="text-6xl md:text-7xl font-bold leading-[1.1] mb-8 tracking-tight">
          Productos de Software
          <br>
          <span class="gradient-text">para EAFIT</span>
        </h1>
        <p class="text-lg text-white/60 mb-10 max-w-xl leading-relaxed">
          Somos un equipo de profesores, administrativos y estudiantes de la Universidad EAFIT que se dedica a crear productos de Software para la Universidad.
        </p>
        <div class="flex flex-wrap gap-4">
          <PrimaryButton href="#equipo" :showChevron="true">Ver Equipo</PrimaryButton>
          <SecondaryButton href="#productos">Ver Productos</SecondaryButton>
        </div>
      </div>

      <!-- Right Content - Glass Card -->
      <div class="relative animate-slide-in-left" style="animation-delay: 0.2s">
        <GlassCard>
          <div class="flex flex-col h-full">
            <!-- Browser tabs simulation -->
            <div class="flex items-center gap-2 mb-4 px-2">
              <div class="flex gap-1.5">
                <div class="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div class="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div class="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div class="flex-1 text-center text-[10px] font-mono text-white/30 uppercase tracking-widest">
                labsoft.io
              </div>
            </div>
            
            <!-- Content area -->
            <div class="flex-1 bg-gradient-to-br from-emerald-500/10 to-blue-500/10 rounded-xl p-6 flex items-center justify-center min-h-[300px]">
              <div class="text-center">
                <div class="text-4xl font-bold gradient-text mb-2">LabSoft</div>
                <p class="text-white/60 text-sm">Plataforma de Innovación EAFIT</p>
              </div>
            </div>
          </div>
        </GlassCard>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import PrimaryButton from '../buttons/PrimaryButton.vue'
import SecondaryButton from '../buttons/SecondaryButton.vue'
import GlassCard from '../cards/GlassCard.vue'
</script>
