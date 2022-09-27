import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        routes: []
    },
    actions: {
        async getRoutes({commit}) {
            axios.get('http://localhost:3030/api/route')
                .then(response => {
                    commit('setRoutes', response.data)
                })
        }
    },
    mutations: {
        setRoutes(state, data) {
            state.routes = data
        }
    },
    getters: {
        returnRoutes(state) {
            return state.routes
        }
    },


})
