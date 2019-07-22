import axios from "axios";

// initial state
const state = {
  isFullWidth: false,
  linksLeftSideBar: [],
  sport_table: []
};

// getters
const getters = {
  getIsFullWidth: state => {
    return state.isFullWidth;
  },
  getLinksLeftSideBar: state => {
    return state.linksLeftSideBar;
  },
  getSports: state => {
    return state.sport_table;
  }
};

// actions
const actions = {
  fullWidth({ commit }, isFullWidth) {
    commit("SET_IS_FULL_WITH", isFullWidth);
  },
  async fetchLinksLeftSideBar({ commit }) {
    let resp = await axios.get("/mockup-data/links.json");
    commit("SET_LINKS_LEFT_SIDE_BAR", resp.data.links);
  },
  async fetchSportTable({ commit }, slug ) {
    let resp = await axios.get("/mockup-data/sport-table.json");
    resp.data.sport_table.map(( data ) => {
        if(data.slug == slug){
            commit("SET_SPORT_TABLE", data);
        }
    })
  }
};

// mutations
const mutations = {
  SET_IS_FULL_WITH(state, isFullWidth) {
    state.isFullWidth = isFullWidth;
  },
  SET_LINKS_LEFT_SIDE_BAR(state, links) {
    state.linksLeftSideBar = links;
  },
  SET_SPORT_TABLE(state, sport_table) {
    state.sport_table = sport_table;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
