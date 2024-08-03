import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import BlogView from '../views/BlogView.vue'
import SuccinctView from '../views/SuccinctView.vue'
import ProjectView from '../views/ProjectView.vue'
import EssayView from '../views/EssayView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/succinct',
    name: 'succinct',
    component: SuccinctView

  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  },
  {
    path: '/project',
    name: 'project',
    component: ProjectView
  },
  {
    path: '/essay',
    name: 'essay',
    component: EssayView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
