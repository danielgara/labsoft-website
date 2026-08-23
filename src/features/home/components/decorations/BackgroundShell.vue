<script setup lang="ts">
// constants
const SCHEDULE = {
  firstLine: [18, 28],
  lineStep: 2.2,
};

const lines = [
  { text: '$ git switch -c feature/nueva-vista', tone: 'text-emerald-400' },
  { text: "Switched to a new branch 'feature/nueva-vista'", tone: 'text-white/55' },
  { text: '$ npm install', tone: 'text-emerald-400' },
  { text: 'added 214 packages in 8s', tone: 'text-white/55' },
  { text: '$ npm run dev', tone: 'text-emerald-400' },
  { text: '  VITE ready in 412 ms', tone: 'text-blue-400/85' },
  { text: '  ➜ Local: http://localhost:5173/', tone: 'text-white/55' },
  { text: '$ npm run lint', tone: 'text-emerald-400' },
  { text: '  ✓ sin problemas', tone: 'text-blue-400/85' },
  { text: '$ npm run type-check', tone: 'text-emerald-400' },
  { text: '  ✓ 0 errores de tipo', tone: 'text-blue-400/85' },
  { text: '$ npm run test', tone: 'text-emerald-400' },
  { text: '  ✓ 64 tests · 2.1s', tone: 'text-blue-400/85' },
  { text: '$ npm run build', tone: 'text-emerald-400' },
  { text: '  ✓ built in 154ms', tone: 'text-purple-400/85' },
  { text: '$ git push origin feature/nueva-vista', tone: 'text-emerald-400' },
];
// functions
function range(index: number) {
  const [from, to] = SCHEDULE.firstLine;

  return {
    '--draw-from': `${from! + index * SCHEDULE.lineStep}%`,
    '--draw-to': `${to! + index * SCHEDULE.lineStep}%`,
  };
}
</script>

<template>
  <div
    class="pointer-events-none absolute top-1/2 hidden w-[38%] right-[2%] -translate-y-1/2 opacity-80 lg:block"
    aria-hidden="true"
  >
    <div class="font-mono text-xs leading-6 md:text-sm md:leading-7">
      <p v-for="(line, index) in lines" :key="index" class="flex">
        <span
          :style="{ '--type-steps': Math.max(line.text.length, 1), ...range(index) }"
          :class="line.tone"
          class="type-on-scroll"
          >{{ line.text || ' ' }}</span
        >
      </p>
    </div>
  </div>
</template>
