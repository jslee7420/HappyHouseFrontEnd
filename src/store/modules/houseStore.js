import { houseList, houseDealList, bookmarkedHouseList } from "@/api/house.js";

const houseStore = {
  namespaced: true,
  state: {
    houses: [],
    houseDeals: [],
    houseInfo: null,
  },
  mutations: {
    SET_HOUSE_LIST(state, houses) {
      state.houses = houses;
    },
    SET_HOUSEINFO(state, houseInfo) {
      state.houseInfo = houseInfo;
    },
    SET_HOUSE_DEAL_LIST(state, houseDeals) {
      state.houseDeals = houseDeals;
    },
    CLEAR_HOUSE_LIST(state) {
      state.houses = [];
    },
  },
  actions: {
    getHouses({ commit }, options) {
      return houseList(
        options.dongCode,
        options.buildYear,
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
    getBookmarkedHouses({ commit }, userId) {
      return bookmarkedHouseList(
        userId,
        (data) => {
          commit("SET_HOUSE_LIST", data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
    resetHouses(context) {
      context.commit("CLEAR_HOUSE_LIST");
    },
    setHouseInfo({ commit }, houseInfo) {
      commit("SET_HOUSEINFO", houseInfo);
    },
  },
};

export default houseStore;
