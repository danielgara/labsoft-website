<script setup lang="ts">
// constants
const SCHEDULE = {
  firstEdge: [21, 33],
  edgeStep: 3,
  firstCommit: [25, 37],
  commitStep: 3,
  firstLabel: [29, 41],
  labelStep: 14,
};

const edges = [
  'M60 30 L60 90',
  'M60 90 C60 130 170 120 170 160',
  'M60 90 L60 250',
  'M170 160 L170 220',
  'M170 220 C170 260 60 250 60 290',
  'M60 250 L60 290',
  'M60 290 L60 350',
];

const commits = [
  { x: 60, y: 30, color: 'fill-emerald-400/70' },
  { x: 60, y: 90, color: 'fill-emerald-400/70' },
  { x: 170, y: 160, color: 'fill-blue-400/70' },
  { x: 170, y: 220, color: 'fill-blue-400/70' },
  { x: 60, y: 250, color: 'fill-emerald-400/70' },
  { x: 60, y: 290, color: 'fill-purple-400/80' },
  { x: 60, y: 350, color: 'fill-emerald-400/70' },
];

const labels = [
  { x: 88, y: 34, text: 'main', tone: 'fill-white/55' },
  { x: 198, y: 164, text: 'feature/nueva-vista', tone: 'fill-white/50' },
  { x: 88, y: 316, text: 'merge', tone: 'fill-purple-300' },
];
// functions
function range([from, to]: number[], index: number, step: number) {
  return {
    '--draw-from': `${from! + index * step}%`,
    '--draw-to': `${to! + index * step}%`,
  };
}
</script>

<template>
  <div
    class="pointer-events-none absolute top-1/2 hidden w-[38%] right-[2%] -translate-y-1/2 opacity-80 lg:block"
    aria-hidden="true"
  >
    <p class="mb-6 font-mono text-xs tracking-[0.2em] text-white/50 uppercase">git graph</p>

    <svg viewBox="0 0 420 380" class="h-auto w-full" fill="none">
      <path
        v-for="(edge, index) in edges"
        :key="edge"
        :d="edge"
        :style="range(SCHEDULE.firstEdge, index, SCHEDULE.edgeStep)"
        class="draw-on-scroll stroke-emerald-400/70"
        pathLength="1"
        stroke-dasharray="1"
        stroke-width="2"
      />

      <circle
        v-for="(commit, index) in commits"
        :key="`${commit.x}-${commit.y}`"
        :cx="commit.x"
        :cy="commit.y"
        r="7"
        :class="commit.color"
        :style="range(SCHEDULE.firstCommit, index, SCHEDULE.commitStep)"
        class="fade-on-scroll"
      />

      <text
        v-for="(label, index) in labels"
        :key="label.text"
        :x="label.x"
        :y="label.y"
        :class="label.tone"
        :style="range(SCHEDULE.firstLabel, index, SCHEDULE.labelStep)"
        class="fade-on-scroll font-mono text-[13px]"
      >
        {{ label.text }}
      </text>
    </svg>
  </div>
</template>
