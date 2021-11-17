import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";
import Constant from "@/util/Constant.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    qna: {},
  },
  mutations: {
    [Constant.SET_QNAS](state, questions) {
      state.questions = questions;
    },
    [Constant.SET_QNA](state, qna) {
      state.qna = qna;
    },
  },
  actions: {
    [Constant.GET_QNAS]({ commit }) {
      http.get("/qna").then((response) => {
        // console.log(data);
        commit(Constant.SET_QNAS, response.data);
      });
    },
    [Constant.GET_QNA]({ commit }, payload) {
      http.get("/qna/" + payload).then((response) => {
        commit(Constant.SET_QNA, response.data);
      });
    },
  },
  modules: {},
});
