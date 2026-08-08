// external libraries imports
import { createRouter, createWebHistory } from 'vue-router';

// internal application code imports
import HomeView from '@/features/home/views/HomeView.vue';

// types
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
      name: 'home.team',
      component: () => import('@/features/home/views/TeamIndexView.vue'),
      meta: { title: 'Equipo' },
    },
    {
      path: '/productos',
      name: 'home.products',
      component: () => import('@/features/home/views/ProductIndexView.vue'),
      meta: { title: 'Productos' },
    },
    {
      path: '/aliados',
      name: 'home.allies',
      component: () => import('@/features/home/views/AllyIndexView.vue'),
      meta: { title: 'Aliados' },
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'home.notFound',
      component: () => import('@/features/home/views/NotFoundView.vue'),
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
