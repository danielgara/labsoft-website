// external libraries imports
import { createRouter, createWebHistory } from 'vue-router';

// internal application code imports
import HomeView from '@/features/home/views/HomeView.vue';

// types
// Types route.meta across the app: without this, `meta.title` would be `unknown`.
declare module 'vue-router' {
  interface RouteMeta {
    title: string;
  }
}

// main code execution
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home.index', component: HomeView, meta: { title: 'Inicio' } },
    {
      path: '/equipo',
      name: 'equipo.index',
      component: () => import('@/features/team/views/TeamIndexView.vue'),
      meta: { title: 'Equipo' },
    },
    {
      path: '/productos',
      name: 'productos.index',
      component: () => import('@/features/product/views/ProductIndexView.vue'),
      meta: { title: 'Productos' },
    },
    {
      path: '/aliados',
      name: 'aliados.index',
      component: () => import('@/features/ally/views/AllyIndexView.vue'),
      meta: { title: 'Aliados' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'error.notFound',
      component: () => import('@/features/error/views/NotFoundView.vue'),
      meta: { title: 'Página no encontrada' },
    },
  ],
  scrollBehavior() {
    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = `${to.meta.title} | LabSoft - EAFIT`;
});

// main export
export default router;
