import { newsInstance } from "./index.js";

const api = newsInstance();

async function newsList(dongCode, success, fail) {
  return api
    .get(`	https://openapi.naver.com/v1/search/news.json`)
    .then(success)
    .catch(fail);
}

export { newsList };
