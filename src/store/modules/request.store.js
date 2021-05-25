import { sendGetRequest } from '@/services/api.service'

const SET_TODOS = 'SET_TODOS'

const state = () => {
  return {
    todos: null,
  }
}

const mutations = {
  [SET_TODOS](state, todos) {
    state.todos = todos
  },
}

const actions = {
  async getData({ commit }) {
    const data = await sendGetRequest('https://jsonplaceholder.typicode.com/todos')
    commit(SET_TODOS, data)
  },
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
}
