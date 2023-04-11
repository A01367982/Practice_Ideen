
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import MateriasView from '../views/MateriasView.vue'
import LoginView from '../views/LoginView.vue'
import SigView from '../views/SigView.vue'

const routes = [
  {
    
    path: '/home',
    name: 'home',
    component: HomeView
    
  },

  {
    path: '/materias',
    name: 'materias',
    component: MateriasView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },

  {
    path: '/signup',
    name: 'signup',
    component: SigView
  },
  
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


export default router



