import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';

// Tipa route.meta en toda la app: sin esto, `meta.title` sería `unknown`.
declare module 'vue-router' {
  interface RouteMeta {
    title: string;
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView, meta: { title: 'Inicio' } },
    {
      path: '/equipo',
      name: 'equipo',
      component: () => import('@/views/EquipoView.vue'),
      meta: { title: 'Equipo' },
    },
    {
      path: '/productos',
      name: 'productos',
      component: () => import('@/views/ProductosView.vue'),
      meta: { title: 'Productos' },
    },
    {
      path: '/aliados',
      name: 'aliados',
      component: () => import('@/views/AliadosView.vue'),
      meta: { title: 'Aliados' },
    },
    {
      path: '/contacto',
      name: 'contacto',
      component: () => import('@/views/ContactoView.vue'),
      meta: { title: 'Contacto' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'not-found',
      component: () => import('@/views/NotFoundView.vue'),
      meta: { title: 'Página no encontrada' },
    },
  ],
  // Al navegar, siempre volver al inicio de la página.
  scrollBehavior() {
    return { top: 0 };
  },
});

// Mantener el título del documento sincronizado con la ruta activa.
router.afterEach((to) => {
  document.title = `${to.meta.title} | LabSoft - EAFIT`;
});

export default router;
