
// initial state
const state = {
    isFullWidthModal: false,
}

// getters
const getters = {
  getIsFullWidthModal: (state) => {
    return state.isFullWidthModal
  },

}

// actions
const actions = {
  isFullWidthModal ({ commit }, isFullWidth) {
    commit("setIsFullWidthModal", isFullWidth);
  },

}

// mutations
const mutations = {
  setIsFullWidthModal (state, isFullWidth ) {
    state.isFullWidthModal = isFullWidth
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}