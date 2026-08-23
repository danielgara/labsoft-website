<script setup lang="ts">
// types
type Props = {
  side: 'left' | 'right';
};

// props
const props = defineProps<Props>();

// constants
const BOX = 96;
const TRUNK = 48;
const REACH = 88;
const CURVE = 300;
const OFFSET = 64;

const SCHEDULE = {
  trunk: [6, 52],
  out: [14, 30],
  down: [24, 38],
  back: [32, 48],
  commits: [
    [10, 20],
    [26, 36],
    [34, 44],
    [46, 56],
  ],
};

// functions
function range(at: number[]) {
  return { '--draw-from': `${at[0]}%`, '--draw-to': `${at[1]}%` };
}

function place(commit: { x: number; y: number; at: number[] }) {
  return {
    ...range(commit.at),
    left: `${commit.x - 6}px`,
    top: `${OFFSET + commit.y - 6}px`,
  };
}

// selectors
const out = props.side === 'right' ? REACH : BOX - REACH;

const edges = [
  { d: `M${TRUNK} 0 C${TRUNK} 70 ${out} 45 ${out} 110`, at: SCHEDULE.out },
  { d: `M${out} 110 L${out} 190`, at: SCHEDULE.down },
  { d: `M${out} 190 C${out} 255 ${TRUNK} 230 ${TRUNK} ${CURVE}`, at: SCHEDULE.back },
];

const commits = [
  { x: TRUNK, y: 0, tone: 'bg-emerald-400 ring-emerald-400/20', at: SCHEDULE.commits[0]! },
  { x: out, y: 110, tone: 'bg-blue-400 ring-blue-400/20', at: SCHEDULE.commits[1]! },
  { x: out, y: 190, tone: 'bg-blue-400 ring-blue-400/20', at: SCHEDULE.commits[2]! },
  { x: TRUNK, y: CURVE, tone: 'bg-purple-400 ring-purple-400/20', at: SCHEDULE.commits[3]! },
];
</script>

<template>
  <div
    class="reveal-source pointer-events-none absolute inset-y-0 left-0 w-24 md:left-1/2 md:-translate-x-1/2"
    aria-hidden="true"
  >
    <span
      class="grow-on-scroll absolute inset-y-0 left-1/2 w-0.5 -translate-x-1/2 bg-white/20"
      :style="range(SCHEDULE.trunk)"
    ></span>

    <svg
      class="absolute left-0 w-24"
      :style="{ top: `${OFFSET}px`, height: `${CURVE}px` }"
      :viewBox="`0 0 ${BOX} ${CURVE}`"
      fill="none"
    >
      <path
        v-for="edge in edges"
        :key="edge.d"
        :d="edge.d"
        class="draw-on-scroll stroke-emerald-400/50"
        :style="range(edge.at)"
        pathLength="1"
        stroke-dasharray="1"
        stroke-width="2"
      />
    </svg>

    <span
      v-for="commit in commits"
      :key="`${commit.x}-${commit.y}`"
      class="fade-on-scroll absolute h-3 w-3 rounded-full ring-4"
      :class="commit.tone"
      :style="place(commit)"
    ></span>
  </div>
</template>
