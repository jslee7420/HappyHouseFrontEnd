import { dealTrendList } from "@/api/dealTrend.js"

const dealTrendStore = {
  namespaced: true,
  state: {
    dealTrends: null,
  },
  mutations: {
    SET_DEAL_TRENDS: (state, dealTrends) => {
      state.dealTrends = dealTrends;
    }
  },
  actions: {
    async dealTrendList({ commit }) {
      await dealTrendList(
        (response) => {
          commit("SET_DEAL_TRENDS", response.data.dealTrends);
        },
        () => { },
      )
    }
  }
}

export default dealTrendStore;