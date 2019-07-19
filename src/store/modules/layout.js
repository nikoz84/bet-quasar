// initial state
const state = {
  isFullWidth: false,
  linksLeftSideBar: []
};

// getters
const getters = {
  getIsFullWidth: state => {
    return state.isFullWidth;
  },
  getLinksLeftSideBar: state => {
    return state.linksLeftSideBar;
  }
};

// actions
const actions = {
  fullWidth({ commit }, isFullWidth) {
    commit("SET_IS_FULL_WITH", isFullWidth);
  },
  fetchLinksLeftSideBar({ commit }, links) {
    commit("SET_LINKS_LEFT_SIDE_BAR", links);
  }
};

// mutations
const mutations = {
  SET_IS_FULL_WITH(state, isFullWidth) {
    state.isFullWidth = isFullWidth;
  },
  SET_LINKS_LEFT_SIDE_BAR(state, links) {
    state.linksLeftSideBar = links;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
