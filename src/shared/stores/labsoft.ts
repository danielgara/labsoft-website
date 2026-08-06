// external libraries imports
import { defineStore } from 'pinia';
import { ref } from 'vue';

// internal application code imports
import type AllyInterface from '@/shared/interfaces/AllyInterface';
import type ProductInterface from '@/shared/interfaces/ProductInterface';
import type TeamMemberInterface from '@/shared/interfaces/TeamMemberInterface';

// Lab content, centralized here so views only have to present it.
export const useLabsoftStore = defineStore('labsoft', () => {
  // reactive variables
  const team = ref<TeamMemberInterface[]>([
    { name: 'Daniel Correa', role: 'Director del Laboratorio' },
    { name: 'Santiago Gomez', role: 'Desarrollador' },
    { name: 'Laura Ortiz', role: 'Desarrolladora' },
    { name: 'Jhon Fredy Alzate', role: 'Desarrollador' },
    { name: 'Santiago Idárraga', role: 'Desarrollador' },
    { name: 'Esteban Álvarez', role: 'Desarrollador' },
    { name: 'Mateo Pineda', role: 'Desarrollador' },
    { name: 'Juan Esteban Trujillo', role: 'Desarrollador' },
  ]);

  const products = ref<ProductInterface[]>([
    {
      name: 'DensURBAM',
      description: 'Plataforma de gestión de capacidad de soporte de los territorios.',
    },
    {
      name: 'Clasificados',
      description: 'Plataforma de clasificados de la comunidad EAFIT.',
    },
  ]);

  const allies = ref<AllyInterface[]>([
    { name: 'Innovación', description: 'Dirección de Innovación EAFIT.' },
    {
      name: 'Área de Computación y Analítica',
      description: 'Investigación y desarrollo aplicado.',
    },
    { name: 'Urbam', description: 'Centro de Estudios Urbanos y Ambientales.' },
  ]);

  return { team, products, allies };
});
