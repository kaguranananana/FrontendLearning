import { createRouter, createWebHistory } from 'vue-router'
// 配置路由
import Game from '../components/Game.vue'
import Person from '@/components/Person.vue'


const routes = [
  {
    path : '/game',
    name : 'Game',
    component : Game
  },
  {
    path : '/person',
    name : 'Person',
    component : Person
  },

];



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
