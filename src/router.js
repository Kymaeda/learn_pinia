import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'game',
    component: () => import('./views/Game.vue'),
  },
  {
    path: '/hall-of-fame',
    name: 'hall-of-fame',
    component: () => import('./views/HallOfFame.vue'),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router
