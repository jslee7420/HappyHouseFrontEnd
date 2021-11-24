import { houseList, houseDealList } from "@/api/house.js";

const houseStore = {
  namespaced: true,
  state: {
    houses: [],
    houseDeals: [],
  },
  mutations: {
    SET_HOUSE_LIST(state, houses) {
      state.houses = houses;
    },
    SET_HOUSE_DEAL_LIST(state, houseDeals) {
      state.houseDeals = houseDeals;
    },
  },
  actions: {
    getHouses({ commit }, dongCode) {
      return houseList(
        dongCode,
        (data) => {
          commit("SET_HOUSE_LIST", data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    getHouseDeals({ commit }, aptCode) {
      return houseDealList(
        aptCode,
        (data) => {
          commit("SET_HOUSE_DEAL_LIST", data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default houseStore;
