import Vue from 'vue';
import Router from 'vue-router';
/* import Home from './views/Home.vue'; */
import HomeSupervisor from './views/HomeSupervisor.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeSupervisor,
      props: {
        view: 'home',
        index: 1,
      },
    },
    {
      path: '/about',
      name: 'sobre',
      component: HomeSupervisor,
      props: {
        view: 'sobre',
        index: 5,
      },
    },
  ],
});
