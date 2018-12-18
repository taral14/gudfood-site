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
    getters: {},
    actions: {
        isFavourite({state}, dishId) {
            return state.favourites.findIndex(f => f.dishId === dishId) !== -1
        },
        addToFavourite({commit}, dishId) {
            return http.post(`/dishes/${dishId}/favourites`)
        },
        loadFavourites({commit}) {
            http.get(`/dishes/favourites`).then(r => {
                commit('setFavourites', r.data);
            })
        }
    },
}
