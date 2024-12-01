import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue'),
    },

    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },

    {
      path: '/trivia',
      name: 'trivia',
      component: () => import('../views/TriviaView.vue'),
    },
    {
      path: '/parametres',
      name: 'parametres',
      component: () => import('../views/ParametreView.vue'),
    },
  ],
})

export default router
