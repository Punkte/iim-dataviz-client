import { createRouter, createWebHistory } from 'vue-router';
import Index from '@/views/index.vue';
import Temperatures from '@/views/temperatures.vue';
import Pixels from '@/views/pixels.vue';

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/temperatures',
    name: 'Temperatures',
    component: Temperatures,
  },
  {
    path: '/pixels',
    name: 'Pixels',
    component: Pixels,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
