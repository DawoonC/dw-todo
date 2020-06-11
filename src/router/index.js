import Vue from 'vue';
import VueRouter from 'vue-router';
import appRoutes from '../app/router';

Vue.use(VueRouter);

const routes = [
  ...appRoutes,
  { path: '/', redirect: '/todos' },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
