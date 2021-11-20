// import jwt_decode from "jwt-decode";
import { login } from "@/api/user.js";
import { join } from "@/api/user.js";
import { idCheck } from "@/api/user.js";

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
      await login(
        user,
        (response) => {
          console.log(response.status);
          if (response.status === 200) {
            let token = response.data["access-token"];
            commit("SET_IS_LOGIN", true);
            commit("SET_IS_LOGIN_ERROR", false);
            commit("SET_USER_INFO", response.data.userInfo);
            sessionStorage.setItem("access-token", token);
          }
        },
        () => {
          commit("SET_IS_LOGIN", false);
          commit("SET_IS_LOGIN_ERROR", true);
        }
      );
    },
    async userRegist({ commit }, user) {
      await join(
        user,
        () => { commit },
        () => { }
      )
    },
    async userIdCheck({ commit }, id) {
      await idCheck(
        id,
        () => {
          commit("SET_IS_ID_DUPLICATION", false)
        },
        () => {
          commit("SET_IS_ID_DUPLICATION", true)
        }
      )
    },
    userLogout({ commit }) {
      commit("SET_IS_LOGOUT", true);
      sessionStorage.removeItem("access-token");
    }
  },
};

export default userStore;
