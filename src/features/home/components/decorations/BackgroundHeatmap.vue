<script setup lang="ts">
// constants
const TRACKS = 16;
const CELLS = 7;

const SCHEDULE = {
  firstTrack: [21, 31],
  trackStep: 1.6,
  firstStat: [25, 35],
  statStep: 5,
};

const LEVELS = [
  'bg-white/12',
  'bg-emerald-500/35',
  'bg-emerald-500/55',
  'bg-emerald-400/75',
  'bg-emerald-400/80',
];

const stats = [
  { value: '1.284', label: 'commits' },
  { value: '48', label: 'pull requests' },
  { value: '7', label: 'releases' },
];

// functions
function level(track: number, cell: number): string {
  const noise = Math.sin(track * 12.9898 + cell * 78.233) * 43758.5453;
  const index = Math.floor((noise - Math.floor(noise)) * LEVELS.length);

  return LEVELS[index] ?? LEVELS[0]!;
}

function range([from, to]: number[], index = 0, step = 0) {
  return {
    '--draw-from': `${from! + index * step}%`,
    '--draw-to': `${to! + index * step}%`,
  };
}

// selectors
const tracks = Array.from({ length: TRACKS }, (unusedTrack, track) => ({
  track,
  cells: Array.from({ length: CELLS }, (unusedCell, cell) => level(track, cell)),
}));
</script>

<template>
  <div
    class="pointer-events-none absolute top-1/2 left-[6%] hidden w-[38%] -translate-y-1/2 opacity-80 lg:block"
    aria-hidden="true"
  >
    <p class="mb-6 font-mono text-xs tracking-[0.2em] text-white/50 uppercase">
      actividad del laboratorio
    </p>

    <div class="flex items-center gap-10">
      <div class="flex shrink-0 flex-col gap-1.5">
        <div
          v-for="row in tracks"
          :key="row.track"
          class="fade-on-scroll flex gap-1.5"
          :style="range(SCHEDULE.firstTrack, row.track, SCHEDULE.trackStep)"
        >
          <span
            v-for="(tone, cell) in row.cells"
            :key="cell"
            class="h-5 w-5 rounded-[3px]"
            :class="tone"
          ></span>
        </div>
      </div>

      <dl class="flex flex-col gap-7">
        <div
          v-for="(stat, index) in stats"
          :key="stat.label"
          class="fade-on-scroll"
          :style="range(SCHEDULE.firstStat, index, SCHEDULE.statStep)"
        >
          <dt class="gradient-text font-mono text-3xl font-bold">{{ stat.value }}</dt>
          <dd class="mt-1 font-mono text-xs tracking-wide text-white/55">{{ stat.label }}</dd>
        </div>
      </dl>
    </div>
  </div>
</template>
