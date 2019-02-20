import Vue from "vue";
import Vuex from "vuex";
import * as AmbassadorsApi from "./api/ambassador_api";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    ambassador: {
      namespaced: true,
      state: {
        details: null,
        loading: false,
      },
      mutations: {
        fetchDetailsStarted (state) {
          state.loading = true;
        },
        fetchDetailsCompleted (state) {
          state.loading = false;
        },
        fetchDetailsFailed (state, payload) {
          state.error = payload;
        },
        fetchDetailsSucceeded (state, payload) {
          state.details = payload;
        },
      },
      actions: {
        async fetchDetails ({ commit }, id) {
          commit('fetchDetailsStarted');
          const payload = await AmbassadorsApi.fetch(id);
          commit('fetchDetailsSucceeded', payload)
          commit('fetchDetailsCompleted');
        }
      },
    }
  }
});
