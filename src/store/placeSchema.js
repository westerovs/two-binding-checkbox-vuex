export default {
    namespaced: true,

    state: {
        checked: {}
    },
    mutations: {
        changeCheck(state, id) {
            state.checked[id] = !(state.checked[id]);
        },
        secondMutant(state, payLoad) {
            state.checked = payLoad
        }
    },
    actions: {
        // массив с сервера
        server({commit}, payLoad) {
            commit('secondMutant', payLoad)
        }
    }
}
