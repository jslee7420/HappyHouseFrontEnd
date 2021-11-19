import { houseList } from "@/api/house.js";

const houseStore = {
  namespaced: true,
  state: {
    houses: [],
    housedeals: [],
  },
  getters: {},
  mutations: {
    SET_HOUSE_LIST(state, houses) {
      state.houses = houses;
    },
  },
  actions: {
    getHouses({ commit }, dongCode) {
      houseList(
        dongCode,
        (data) => {
          commit("SET_HOUSE_LIST", data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default houseStore;
