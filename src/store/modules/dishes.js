import http from "../../http/common";

export default {
    namespaced: true,
    state: {
        favourites: []
    },
    mutations: {
        setFavourites(state, value) {
            state.favourites = value
        }
    },
    getters: {
        favourites(state) {
            return state.favourites
        }
    },
    actions: {
        isFavourite({state}, id) {
            return state.favourites.findIndex(item => item === id) !== -1
        },
        addToFavourite({commit, getters}, dishId) {
            return http.post(`/dishes/${dishId}/favourites`).then(r => {
                if(r.status === 204) {
                    let favourites = getters.favourites
                    favourites.push(dishId)
                    commit('setFavourites', favourites)
                }
            })
        },
        removeFromFavourite({commit, getters}, dishId) {
            return http.delete(`/dishes/${dishId}/favourites`).then(r => {
                if(r.status === 204) {
                    commit('setFavourites', getters.favourites.filter(t => t === dishId))
                }
            })
        },
        loadFavourites({commit}) {
            http.get(`/dishes/favourites`).then(r => {
                commit('setFavourites', r.data);
            })
        }
    },
}
