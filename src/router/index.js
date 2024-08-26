import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import User from '../views/User.vue'
import Dish from '../views/Dish.vue'
import RandomDish from '../views/RandomlySelectedDishes.vue'
import DetailDish from '@/views/DetailDish.vue'
import SearchDish from '@/views/SearchDish.vue'
import Collection from '@/views/Collection.vue'
import Login from '@/views/Login.vue'
import FeedBack from '@/views/FeedBack.vue'


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
      path:'/randomDish/:canteenid',
      component:RandomDish
    },
    {
      path:'/detail/:dishid?',
      component:DetailDish
    },
    {
      path:'/search',
      component:SearchDish
    },
    {
      path:'/collection',
      component:Collection
    },
    {
      path:'/login',
      component:Login
    },
    {
      path:'/feedback',
      component: FeedBack
    }
  ],
})

export default router
