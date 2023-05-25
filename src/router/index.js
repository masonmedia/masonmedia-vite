import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

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
    // {
    //   path: '/design',
    //   name: 'Design',
    //   component: () => import('../views/DesignView.vue')
    // },
    // {
    //   path: '/design/:id',
    //   name: 'Detail',
    //   component: () => import('../views/DesignDetail.vue')
    // },
    {
      path: '/work',
      name: 'Work',
      component: () => import('../views/WorkView.vue')
    },
    {
      path: '/blog',
      name: 'Blog',
      component: () => import('../views/BlogView.vue')
    }
  ],
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
