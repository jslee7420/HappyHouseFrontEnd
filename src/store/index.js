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
    SET_QUESTION_LIST(state, questions) {
      state.questions = questions;
    },
    [Constant.SET_QUESTION](state, payload) {
      state.qna = payload;
    },
  },
  actions: {
    [Constant.REGIST_QUESTION](context, payload) {
      return http
        .post("/qna", {
          questionAuthor: payload.questionAuthor,
          questionTitle: payload.questionTitle,
          questionContent: payload.questionContent,
        })
        .then(() => context.dispatch(Constant.GET_QNAS));
    },
    [Constant.GET_QUESTION](context, payload) {
      return http
        .get(`/qna/${payload}`)
        .then(({ data }) => {
          context.commit(Constant.SET_QUESTION, data);
        });
    },
    [Constant.MODIFY_QUESTION](context, payload) {
      return http
        .put(`/qna/${payload.qnaId}`, {
          questionAuthor: payload.questionAuthor,
          questionTitle: payload.questionTitle,
          questionContent: payload.questionContent,
        })
        .then(() => context.dispatch(Constant.GET_QNAS));
    },
    getQuestions({ commit }) {
      http.get("/qna").then((response) => {
        // console.log(data);
        commit("SET_QUESTION_LIST", response.data);
      });
    },
  },
  modules: {},
});
