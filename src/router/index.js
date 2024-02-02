import { createRouter, createWebHashHistory } from 'vue-router'
import login from "../views/login.vue"
import Index from "@/views/index.vue"
import Register from "@/views/register.vue"
import Post from "@/views/post.vue"
import PostCreate from "@/views/PostCreate.vue"

const router = createRouter({
  history: createWebHashHistory(),
  routes: [ 
    {
      path:"/login",
      component:login
    },
    {
      path:"/",
      component: Index
    },
    {
      path:"/register",
      component: Register
    },
    {
      path:"/post/:id",
      component: Post
    },
    {
      path:"/createpost",
      component:PostCreate
    }
  ],
})

export default router
