import Vue from 'vue';
import Router from 'vue-router';
import HomeSupervisor from './views/HomeSupervisor.vue';
import AjustaLayout from './views/AjustaLayout.vue';
import CrudSupervisor from './views/CrudSupervisor.vue';

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
    {
      path: '/crud',
      name: 'crud',
      component: CrudSupervisor,
    },
  ],
});
