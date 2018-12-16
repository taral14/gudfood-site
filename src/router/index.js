import Vue from 'vue'
import Router from 'vue-router'
import {checkAuth} from '../helpers/auth'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/dishes',
      name: 'Dishes',
      component: require('../pages/Dishes').default,
      beforeEnter: checkAuth,
    },
    {
      path: '/orders',
      name: 'Orders',
      component: require('../pages/Orders').default,
      beforeEnter: checkAuth,
    },
    {
      path: '/sign-in',
      name: 'SignIn',
      component: require('../pages/SignIn').default
    },
  ]
})
