import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ProductView from '@/views/ProductView.vue';
import AboutView from '@/views/AboutView.vue';

const routes = [
  { path: '/', name: 'home', component: HomeView },
  {
    path: '/product/:id',
    name: 'product',
    component: ProductView,
    props: true,
  },
  { path: '/about', name: 'about', component: AboutView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
