import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/expanding-card',
    name: 'ExpandingCard',
    component: () => import('../views/ExpandingCardView.vue'),
  },
  {
    path: '/design-base',
    name: 'DesignBase',
    component: () => import('../views/DesignBaseView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
