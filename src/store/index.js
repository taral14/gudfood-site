import Vuex from 'vuex'
import Vue from 'vue'

import auth from './modules/auth'
import dishes from './modules/dishes'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    dishes,
  }
})
