import http from "../../http/common";

export default {
  namespaced: true,
  state: {

  },
  mutations: {

  },
  getters: {

  },
  actions: {
    addToFavourite({commit}, dishId) {
      return http.post(`/dishes/${dishId}/favourites`)
    },
  },
}
