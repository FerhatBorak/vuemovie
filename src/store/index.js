import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    API_KEY: "?i=tt3896198&apikey=3f1af874",
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
  actions: {},
  modules: {},
});
