import Vue from "vue";
import Vuex from "vuex";
import http from "@/util/http-common.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    questions: [],
    qna: {
      questionId: "1",
      questionTitle: "회원가입은 어떻게 하나요?",
      questionAuthor: "이정수",
      questionCreatedTime: "2021.11.15",
      questionContent: "회원가입을 할 줄 몰라요",
      answerAuthor: "운영자",
      answerContent: "회원가입 페이지로 가서 회원가입 하세요",
      answerCreatedTime: "2021.11.17",
    },
  },
  mutations: {
    SET_QUESTION_LIST(state, questions) {
      state.questions = questions;
    },
  },
  actions: {
    getQuestions({ commit }) {
      http.get("/qna").then((response) => {
        // console.log(data);
        commit("SET_QUESTION_LIST", response.data);
      });
    },
  },
  modules: {},
});
