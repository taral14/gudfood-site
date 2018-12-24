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
        findAll() {
            return http.get('/orders').then(r => r.data)
        },
        addRandom({state}, date) {
            return http.post('/orders/random', { date }).then(r => r.data)
        }
    },
}
