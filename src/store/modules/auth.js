import axios from "axios/index";

export default {
  namespaced: true,
  state: {
    token: null,
    user: {}
  },
  mutations: {
    setUser(state, value) {
      state.user = value
    },
    setToken(state, value) {
      state.token = value
    },
    clearAuthData(state) {
      state.user = {}
      state.token = null
    }
  },
  getters: {
    user(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.token !== null
    },
    token(store) {
      return store.token
    },
  },
  actions: {
    signIn({commit}, authData) {
      return axios.post(process.env.API_URL + '/sign-in', authData).then(response => {
        if (response.status === 200) {
          commit('setToken', response.data.token)
          commit('setUser', response.data.user)

          localStorage.setItem('token', response.data.token)
          localStorage.setItem('user', JSON.stringify(response.data.user))
        }
        return response
      })
    },
    signOut({commit}) {
      commit('clearAuthData')

      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },
    tryToAutoSignIn({commit}) {
      return new Promise((resolve, reject) => {
        let user = JSON.parse(localStorage.getItem('user'))
        let token = localStorage.getItem('token')
        if(user && token) {
          commit('setToken', token)
          commit('setUser', user)
          resolve({user: user, token: token})
        } else {
          reject()
        }
      })
    },
  },
}
