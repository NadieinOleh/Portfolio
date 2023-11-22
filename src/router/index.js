import { createRouter, createWebHistory } from 'vue-router';

import AboutViewVue from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import SkillsView from '../views/SkillsView.vue';
import ProjectView from '../views/ProjectView.Vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    },
    {
      path: '/skills',
      name: 'skills',
      component: SkillsView,
    },
    {
      path: '/projects',
      name: 'projects',
      component: ProjectView,
    },
  ]
})

export default router
