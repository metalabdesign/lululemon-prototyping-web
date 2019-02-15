import Vue from "vue";
import Vuex from "vuex";
import * as AmbassadorsApi from "./api/ambassador_api";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    ambassadorDetails: {}
  },
  mutations: {
    fetchDetailsSucceeded (state, payload) {
      state.ambassadorDetails = payload
    }
  },
  actions: {
    async fetchDetails ({ commit }, id) {
      const payload = await AmbassadorsApi.fetch(id);
      commit('fetchDetailsSucceeded', payload)
    }
  }
});
