import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'   // 首页
import Person from '../components/Person.vue'  // 人员介绍页

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home  // 当访问根路径时显示首页
    },
    {
      path: '/person',  // 当访问 /person 时显示人员介绍页
      name: 'Person',
      component: Person
    }
  ],
})

export default router
