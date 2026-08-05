import { ref } from 'vue';
import { defineStore } from 'pinia';

export interface TeamMember {
  name: string;
  role: string;
}

export interface Product {
  name: string;
  description: string;
}

export interface Ally {
  name: string;
  description: string;
}

/** Contenido del laboratorio. Centralizado aquí para que las vistas solo se ocupen de presentarlo. */
export const useLabsoftStore = defineStore('labsoft', () => {
  const team = ref<TeamMember[]>([
    { name: 'Daniel Correa', role: 'Director del Laboratorio' },
    { name: 'Santiago Gomez', role: 'Desarrollador' },
    { name: 'Laura Ortiz', role: 'Desarrolladora' },
    { name: 'Jhon Fredy Alzate', role: 'Desarrollador' },
    { name: 'Santiago Idárraga', role: 'Desarrollador' },
    { name: 'Esteban Álvarez', role: 'Desarrollador' },
    { name: 'Mateo Pineda', role: 'Desarrollador' },
    { name: 'Juan Esteban Trujillo', role: 'Desarrollador' },
  ]);

  const products = ref<Product[]>([
    {
      name: 'DensURBAM',
      description: 'Plataforma de gestión de capacidad de soporte de los territorios.',
    },
    {
      name: 'Clasificados',
      description: 'Plataforma de clasificados de la comunidad EAFIT.',
    },
  ]);

  const allies = ref<Ally[]>([
    { name: 'Innovación', description: 'Dirección de Innovación EAFIT.' },
    {
      name: 'Área de Computación y Analítica',
      description: 'Investigación y desarrollo aplicado.',
    },
    { name: 'Urbam', description: 'Centro de Estudios Urbanos y Ambientales.' },
  ]);

  return { team, products, allies };
});
