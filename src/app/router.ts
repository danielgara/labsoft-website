// external libraries imports
import { createRouter, createWebHashHistory } from 'vue-router';

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
  history: createWebHashHistory(import.meta.env.BASE_URL),
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
      path: '/:pathMatch(.*)*',
      name: 'home.notFound',
      component: () => import('@/features/home/views/NotFoundView.vue'),
      meta: { title: 'Página no encontrada' },
    },
  ],
  scrollBehavior(to) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }

    return { top: 0 };
  },
});

router.afterEach((to) => {
  document.title = `${to.meta.title} | LabSoft - EAFIT`;
});

// main export
export default router;
