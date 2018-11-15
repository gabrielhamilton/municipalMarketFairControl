import Vue from 'vue';
import Router from 'vue-router';
/* import Home from './views/Home.vue'; */
import HomeSupervisor from './views/HomeSupervisor.vue';
import AjustaLayout from './views/AjustaLayout.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeSupervisor,
    },
    {
      path: '/Feira',
      name: 'AjustaLayout',
      component: AjustaLayout,
    },
    {
      path: '/about',
      name: 'sobre',
      component: HomeSupervisor,
    },
  ],
});
