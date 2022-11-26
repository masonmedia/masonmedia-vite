import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeTwo.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'About',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/development',
      name: 'Development',
      component: () => import('../views/DevelopmentView.vue')
    },
    {
      path: '/design',
      name: 'Design',
      component: () => import('../views/DesignView.vue')
    },
    {
      path: '/projects',
      name: 'Projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/test',
      name: 'Test',
      component: () => import('../views/TestView.vue')
    },
    {
      path: '/hometwo',
      name: 'HomeTwo',
      component: () => import('../views/HomeTwo.vue')
    },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/me',
      name: 'Me',
      component: () => import('../views/MeView.vue')
    }
  ],
  // scrollBehavior () {
  //   return { top: 0, left: 0 }
  // }
    scrollBehavior() {
    return new Promise((resolve) => {
      // resolve({ left: 0, top: 0 })
      setTimeout(() => {
        resolve({ left: 0, top: 0 })
      }, 500)
    })
  },
})

export default router
