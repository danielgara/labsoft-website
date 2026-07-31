<template>
  <div class="glass rounded-3xl p-8 hover:bg-white/20 transition-all duration-300">
    <h3 class="text-xl font-bold mb-3">{{ title }}</h3>
    <p class="text-white/60 leading-relaxed">
      <slot />
    </p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>
