import { sidoList, gugunList, dongList } from "@/api/address.js";
const addressStore = {
  namespaced: true,
  state: {
    sidos: [{ value: null, text: "도/광역시" }],
    guguns: [{ value: null, text: "시/구/군" }],
    dongs: [{ value: null, text: "동" }],
  },
  getters: {},
  mutations: {
    SET_SIDO_LIST(state, sidos) {
      sidos.forEach((sido) => {
        state.sidos.push({ value: sido.sidoCode, text: sido.sidoName });
      });
    },
    SET_GUGUN_LIST(state, guguns) {
      guguns.forEach((gugun) => {
        state.guguns.push({ value: gugun.gugunCode, text: gugun.gugunName });
      });
    },
    SET_DONG_LIST(state, dongs) {
      dongs.forEach((dong) => {
        state.dongs.push({ value: dong.dongCode, text: dong.dongName });
      });
    },
    CLEAR_SIDO_LIST(state) {
      state.sidos = [{ value: null, text: "도/광역시" }];
    },
    CLEAR_GUGUN_LIST(state) {
      state.guguns = [{ value: null, text: "시/구/군" }];
    },
    CLEAR_DONG_LIST(state) {
      state.dongs = [{ value: null, text: "동" }];
    },
  },
  actions: {
    getSido: ({ commit }) => {
      sidoList(
        ({ data }) => {
          commit("CLEAR_SIDO_LIST");
          commit("SET_SIDO_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getGugun: ({ commit }, sidoCode) => {
      commit("CLEAR_DONG_LIST");
      gugunList(
        sidoCode,
        ({ data }) => {
          commit("CLEAR_GUGUN_LIST");
          commit("SET_GUGUN_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getDong: ({ commit }, code) => {
      dongList(
        code.sidoCode,
        code.gugunCode,
        ({ data }) => {
          commit("CLEAR_DONG_LIST");
          commit("SET_DONG_LIST", data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default addressStore;
