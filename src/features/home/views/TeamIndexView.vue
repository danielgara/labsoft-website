<script setup lang="ts">
// internal application code imports
import TeamBranch from '@/features/home/components/decorations/TeamBranch.vue';
import PageHeading from '@/shared/components/PageHeading.vue';
import type TeamMemberInterface from '@/features/home/interfaces/TeamMemberInterface';

// constants
const direction: TeamMemberInterface[] = [
  { name: 'Daniel Correa', role: 'Director del Laboratorio' },
];

const team: TeamMemberInterface[] = [
  { name: 'Santiago Gomez', role: 'Desarrollador', semester: '2026-1' },
  { name: 'Laura Ortiz', role: 'Desarrolladora', semester: '2026-1' },
  { name: 'Jhon Fredy Alzate', role: 'Desarrollador', semester: '2026-1' },
  { name: 'Mateo Pineda', role: 'Desarrollador', semester: '2026-2' },
  { name: 'Santiago Idárraga', role: 'Desarrollador', semester: '2026-2' },
  { name: 'Esteban Álvarez', role: 'Desarrollador', semester: '2026-2' },
  { name: 'Juan Esteban Trujillo', role: 'Desarrollador', semester: '2026-2' },
];

const termList = [...new Set(team.flatMap((member) => member.semester ?? []))].sort().reverse();

// functions
function membersBySemester(semester: string): TeamMemberInterface[] {
  return team.filter((member) => member.semester === semester);
}

function initials(name: string): string {
  return name
    .split(' ')
    .slice(0, 2)
    .map((word) => word.charAt(0))
    .join('')
    .toUpperCase();
}

function isRightSide(index: number): boolean {
  return index % 2 === 1;
}

</script>

<template>
  <section class="reveal-source relative mx-auto max-w-7xl px-6 pt-32 pb-24">
    <PageHeading
      centered
      subtitle="Cada semestre se suman nuevos desarrolladores al laboratorio, guiados por una dirección que mantiene la continuidad de los proyectos y del equipo."
    />

    <div class="mb-20 border-b border-white/10 pb-14">
      <h3
        class="mb-6 text-center text-sm font-semibold tracking-[0.2em] text-emerald-400 uppercase"
      >
        Dirección
      </h3>

      <div class="flex flex-wrap justify-center gap-4">
        <article
          v-for="member in direction"
          :key="member.name"
          class="glass-hover reveal-on-scroll flex items-center gap-5 rounded-2xl p-5"
        >
          <img
            v-if="member.photo"
            :src="member.photo"
            :alt="`Foto de ${member.name}`"
            class="h-20 w-20 shrink-0 rounded-xl object-cover"
          />
          <div
            v-else
            class="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10 text-2xl font-bold text-emerald-400"
            aria-hidden="true"
          >
            {{ initials(member.name) }}
          </div>

          <div>
            <h4 class="text-lg leading-tight font-bold">{{ member.name }}</h4>
            <p class="mt-1 text-sm text-white/50">{{ member.role }}</p>
          </div>
        </article>
      </div>
    </div>

    <ol>
      <li
        v-for="(semester, index) in termList"
        :key="semester"
        class="relative min-h-[26rem] pb-20 pl-20 md:grid md:grid-cols-2 md:gap-x-24 md:pl-0"
      >
        <TeamBranch :side="isRightSide(index) ? 'right' : 'left'" />

        <div
          :class="
            isRightSide(index)
              ? 'md:col-start-2 md:translate-x-6'
              : 'md:col-start-1 md:-translate-x-6 md:text-right'
          "
        >
          <header class="mb-6">
            <p
              class="mb-2 flex items-center gap-2"
              :class="isRightSide(index) ? '' : 'md:flex-row-reverse'"
            >
              <i class="fas fa-code-branch text-xs text-emerald-400/70" aria-hidden="true"></i>
              <span class="font-mono text-sm text-emerald-400/70">semestre/{{ semester }}</span>
            </p>
            <p class="text-sm text-white/40">
              {{ membersBySemester(semester).length }} integrantes
            </p>
          </header>

          <div class="flex flex-wrap gap-4" :class="isRightSide(index) ? '' : 'md:justify-end'">
            <article
              v-for="(member, memberIndex) in membersBySemester(semester)"
              :key="member.name"
              class="glass-hover reveal-on-scroll w-[calc(50%-0.5rem)] rounded-2xl p-3.5 text-center sm:w-44"
            >
              <img
                v-if="member.photo"
                :src="member.photo"
                :alt="`Foto de ${member.name}`"
                class="mb-3 aspect-square w-full rounded-xl object-cover"
              />
              <div
                v-else
                class="mb-3 flex aspect-square w-full items-center justify-center rounded-xl bg-emerald-500/10 text-3xl font-bold text-emerald-400"
                aria-hidden="true"
              >
                {{ initials(member.name) }}
              </div>

              <h4 class="text-base leading-tight font-semibold">{{ member.name }}</h4>
              <p class="mt-1 text-sm leading-tight text-white/50">{{ member.role }}</p>
            </article>
          </div>
        </div>
      </li>
    </ol>
  </section>
</template>
