// import jwt_decode from "jwt-decode";
import { userLogin, userJoin, userIdCheck, userModify, userRemove } from "@/api/user.js";

const userStore = {
  namespaced: true,
  state: {
    isLogin: false,
    isLoginError: false,
    isIdDuplication: false,
    userInfo: null,
  },
  getters: {
    checkUserInfo: function (state) {
      return state.userInfo;
    },
  },
  mutations: {
    SET_IS_LOGIN: (state, isLogin) => {
      state.isLogin = isLogin;
    },
    SET_IS_LOGIN_ERROR: (state, isLoginError) => {
      state.isLoginError = isLoginError;
    },
    SET_USER_INFO: (state, userInfo) => {
      state.isLogin = true;
      state.userInfo = userInfo;
    },
    SET_IS_ID_DUPLICATION: (state, isIdDuplication) => {
      state.isIdDuplication = isIdDuplication;
    },
    SET_IS_LOGOUT: (state, isLogout) => {
      state.isLogin = !isLogout;
      state.userInfo = null;
    },
  },
  actions: {
    async userConfirm({ commit }, user) {
      await userLogin(
        user,
        (response) => {
          console.log(response.status);
          if (response.data.message === "success") {
            let token = response.data["access-token"];
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_USER_INFO", response.data.userInfo);
            localStorage.setItem("access-token", token);
          } else {
            commit("SET_IS_LOGIN", false);
            commit("SET_IS_LOGIN_ERROR", true);
          }
        },
        () => { }
      );
    },
    async userRegist({ commit }, user) {
      await userJoin(
        user,
        (response) => {
          if (response.data.message === "success") {
            commit
          }
        },
        () => { }
      )
    },
    async userIdCheck({ commit }, id) {
      await userIdCheck(
        id,
        (response) => {
          if (response.data.message === "success") {
            commit("SET_IS_ID_DUPLICATION", false)
          } else {
            commit("SET_IS_ID_DUPLICATION", true)
          }
        },
        () => { }
      )
    },
    userLogout({ commit }) {
      commit("SET_IS_LOGOUT", true);
      localStorage.removeItem("access-token");
    },
    userUpdate({ commit }, user) {
      userModify(
        user,
        (response) => {
          if (response.data.message === "success") {
            commit("SET_USER_INFO", response.data.userInfo);
          }
        },
        () => { },
      )
    },
    userDelete({ commit }, id) {
      userRemove(
        id,
        (response) => {
          if (response.data.message === "success") {
            commit("SET_IS_LOGOUT", true);
            localStorage.removeItem("access-token");
          }
        },
        () => { },
      )
    },
    initializeState({ commit }) {
      commit("SET_IS_LOGIN_ERROR", false);
      commit("SET_IS_ID_DUPLICATION", false);
    }
  },
};

export default userStore;
