import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/Home.vue'
import Assignment from './components/Assignment.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/assignment/:id',
    name: 'Assignment',
    component: Assignment
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
