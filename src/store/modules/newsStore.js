import { newsList } from "@/api/news.js";

const newsStore = {
  namespaced: true,
  state: {
    news: [],
  },
  mutations: {
    SET_NEWS_LIST(state, news) {
      state.news = news;
    },
  },
  actions: {
    getNews({ commit }) {
      console.log("getNews method called");
      return newsList(
        "부동산",
        (data) => {
          commit("SET_NEWS_LIST", data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};

export default newsStore;
