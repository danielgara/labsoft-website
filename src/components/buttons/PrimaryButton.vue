<template>
  <button class="bg-emerald-500 hover:bg-emerald-400 text-black px-8 py-4 rounded-2xl font-bold text-lg transition-all flex items-center gap-2 neon-glow"
    @click="$emit('click')">
    <a v-if="href" :href="href" class="flex items-center gap-2">
      <slot />
    </a>
    <slot v-else />
    <svg v-if="showChevron" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
      fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
      class="lucide lucide-chevron-right w-5 h-5" aria-hidden="true">
      <path d="m9 18 6-6-6-6"></path>
    </svg>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  href?: string
  showChevron?: boolean
}>()

defineEmits<{
  click: []
}>()
</script>
