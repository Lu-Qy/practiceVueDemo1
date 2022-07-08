import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/components/Home'
// import Login from '@/components/Login'
// import NotFound from '@/components/NotFound'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: 'Home',
      // component: Home
      component: () => import('@/components/Home')
    },
    {
      path: '/',
      name: 'Login',
      // component: Login
      // component: (resolve) => require(['@/components/Login'], resolve)
      component: () => import('@/components/Login')
    },
    {
      path: '*',
      name: 'NotFound',
      component: (resolve) => require(['@/components/NotFound'], resolve)
    }
  ],
  mode: 'history'
})
