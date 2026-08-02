<template>
  <a :href="href" class="hover:text-white transition-colors">
    {{ label }}
  </a>
</template>

<script setup lang="ts">
defineProps<{
  href: string
  label: string
}>()
</script>
