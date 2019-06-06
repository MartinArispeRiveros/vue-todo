import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue')
    },
    {
      path: '/details/:id',
      name: 'details',
      props:true,
      component: () => import('@/views/Details.vue')
    },
    {
      path: '/post',
      name: 'post',
      component: () => import('@/views/Post.vue')
    }
  ]
})