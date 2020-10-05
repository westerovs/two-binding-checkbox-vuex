import Vue from 'vue'
import Vuex from 'vuex'

import placeSchema from './placeSchema'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    modules: {
        placeSchema
    }
})
