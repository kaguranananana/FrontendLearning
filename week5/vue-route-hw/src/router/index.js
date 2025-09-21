import { createRouter, createWebHistory } from 'vue-router'

//配置路由

import Register from '@/components/Register.vue'
import Home from '@/components/Home.vue';
const  routes = [
  {
    path : '/register',
    name : 'register',
    component : Register
  },
  {
    path : '/home',
    name : 'Home',
    component : Home
  }

];





const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
