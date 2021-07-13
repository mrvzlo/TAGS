import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';

const routes: Array<RouteRecordRaw> = [
   {
      path: '/',
      name: 'Home',
      component: Home,
   },
   {
      path: '/alchemy',
      name: 'Alchemy',
      component: () => import('../views/alchemy/Alchemy.vue'),
   },
   {
      path: '/abilities',
      name: 'Abilities',
      component: () => import('../views/character/Abilities.vue'),
   },
   {
      path: '/classes',
      name: 'Classes',
      component: () => import('../views/character/Classes.vue'),
   },
   {
      path: '/races',
      name: 'Races',
      component: () => import('../views/character/Races.vue'),
   },
   {
      path: '/magic',
      name: 'Magic',
      component: () => import('../views/magic/Schools.vue'),
   },
   {
      path: '/inventory',
      name: 'Inventory',
      component: () => import('../views/inventory/Inventory.vue'),
   },
   {
      path: '/characters',
      name: 'Characters',
      component: () => import('../views/character/Characters.vue'),
   },
];

const router = createRouter({
   history: createWebHashHistory(),
   routes,
});

export default router;
