import axios from "axios/index";

export default {
    namespaced: true,
    state: {
        token: null,
        authUser: {}
    },
    mutations: {
        authUser(state, value) {
            state.authUser = value
        },
        token(state, value) {
            state.token = value
        },
        clearAuthData(state) {
            state.authUser = {}
            state.token = null
        }
    },
    getters: {
        user(state) {
            return state.authUser
        },
        isAuthenticated(state)
        {
            return state.token !== null
        },
        token(store) {
            return store.token
        },
    },
    actions: {
        signIn({commit}, authData) {
            return axios.post(process.env.API_URL+ '/sign-in/admin', authData).then(response => {
                commit('token', response.data.token)
                commit('authUser', response.data.admin)

                localStorage.setItem('token', response.data.token)
                localStorage.setItem('authUser', JSON.stringify(response.data.admin))

                return {success: true}
            })
        },
        signOut({commit}) {
            commit('clearAuthData')

            localStorage.removeItem('token')
            localStorage.removeItem('authUser')
        },
        tryToAutoSignIn({commit}) {
            return new Promise((resolve, reject) => {
                let token = localStorage.getItem('token')
                let authUser = JSON.parse(localStorage.getItem('authUser'))
                let success = false
                if(token && authUser) {
                    commit('token', token)
                    commit('authUser', authUser)
                    success = true
                }
                resolve({
                    success: success,
                    user: authUser,
                    token: token
                })
            })
        },
    },
}