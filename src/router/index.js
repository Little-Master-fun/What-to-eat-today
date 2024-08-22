import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Dish from '../views/Dish.vue'
import RandomDish from '../views/RandomlySelectedDishes.vue'
import DetailDish from '@/views/DetailDish.vue'
import SearchDish from '@/views/SearchDish.vue'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ 
    {
      path:'/',
      component:Home,
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
    },
    {
      path:'/detail',
      component:DetailDish
    },
    {
      path:'/search',
      component:SearchDish
    }
  ],
})

export default router
