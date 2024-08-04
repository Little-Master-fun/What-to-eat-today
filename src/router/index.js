import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Dish from '../views/Dish.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ 
    {
      path:'/',
      component:Home
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/dish',
      component:Dish
    }
  ],
})

export default router
