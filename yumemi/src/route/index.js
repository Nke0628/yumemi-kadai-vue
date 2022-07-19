import { createRouter, createWebHistory } from 'vue-router'
import TopView from '@/view/TopView.vue'

const routes = [
  {
    path: '/',
    name: 'TopView',
    component: TopView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
