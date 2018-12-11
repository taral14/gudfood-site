import Vue from 'vue'
import Router from 'vue-router'
import Dishes from '../pages/Dishes'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Dishes',
      component: Dishes
    }
  ]
})
