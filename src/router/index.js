import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Dish from '../views/Dish.vue'
import RandomDish from '../views/RandomlySelectedDishes.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ 
    {
      path:'/',
      component:Home,
      children: [
        {
          path: 'selectdish',
          component: RandomDish
        }
      ]
    },
    {
      path:'/user',
      component:User
    },
    {
      path:'/dish',
      component:Dish
    },
    {
      path:'/randomDish',
      component:RandomDish
    }
  ],
})

export default router
