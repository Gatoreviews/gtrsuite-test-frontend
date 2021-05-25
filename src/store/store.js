import Vue from 'vue'
import Vuex from 'vuex'
import request from './modules/request.store'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    request,
  },
  strict: process.env.NODE_ENV !== 'production',
})
