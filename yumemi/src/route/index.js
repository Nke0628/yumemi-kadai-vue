import { createRouter, createWebHistory } from 'vue-router'
import TopView from '@/view/TopView.vue'
import ContentView from '@/view/ContentView.vue'

const routes = [
  {
    path: '/',
    name: 'TopView',
    component: TopView,
  },
  {
    path: '/content',
    name: 'ContentView',
    component: ContentView,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
