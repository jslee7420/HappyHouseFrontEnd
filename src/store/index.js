import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";
import Constant from "@/util/Constant.js";

import userStore from "@/store/modules/userStore.js";
import addressStore from "@/store/modules/addressStore.js";
import houseStore from "@/store/modules/houseStore.js";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    userStore,
    addressStore,
    houseStore,
  },
  state: {
    questions: [],
    qna: {},
    answer: {},
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
      return http.get(`/qna/${payload}`).then(({ data }) => {
        context.commit(Constant.SET_QUESTION, data);
      });
    },
    [Constant.MODIFY_QUESTION](context, payload) {
      return http
        .put(`/qna/${payload.qnaId}`, {
          qnaId: payload.qnaId,
          questionAuthor: payload.questionAuthor,
          questionTitle: payload.questionTitle,
          questionContent: payload.questionContent,
        })
        .then(() => context.dispatch(Constant.GET_QNAS));
    },
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
    [Constant.REMOVE_QUESTION](context, payload) {
      http.delete("/qna/" + payload).then(() => {
        context.dispatch(Constant.GET_QNAS);
      });
    },
    [Constant.REGIST_ANSWER](context, payload) {
      http
        .post("/qna/" + payload.qnaId + "/ans", {
          answerAuthor: payload.answerAuthor,
          answerContent: payload.answerContent,
        })
        .then(() => {
          context.dispatch(Constant.GET_QNA, payload.qnaId);
        });
    },
    [Constant.REMOVE_ANSWER](context, payload) {
      http.delete("/qna/" + payload + "/ans").then(() => {
        context.dispatch(Constant.GET_QNAS);
      });
    },
    [Constant.MODIFY_ANSWER](context, payload) {
      return http
        .put("/qna/" + payload.qnaId + "/ans", {
          answerAuthor: payload.answerAuthor,
          answerContent: payload.answerContent,
        })
        .then(() => {
          context.dispatch(Constant.GET_QNA, payload.qnaId);
        });
    },
  },
});
