// initial state
const state = {
  isFullWidth: false
};

// getters
const getters = {
  getIsFullWidth: state => {
    return state.isFullWidth;
  }
};

// actions
const actions = {
  fullWidth({ commit }, isFullWidth) {
    commit("SET_IS_FULL_WITH", isFullWidth);
  }
};

// mutations
const mutations = {
  SET_IS_FULL_WITH(state, isFullWidth) {
    state.isFullWidth = isFullWidth;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
