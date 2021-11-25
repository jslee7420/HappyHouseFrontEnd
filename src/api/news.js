import { newsInstance } from "./index.js";

const api = newsInstance();

async function newsList(query, success, fail) {
  return api
    .get(
      `https://openapi.naver.com/v1/search/news.xml?query=${query}&display=${5}&start=1&sort=sim`
    )
    .then(success)
    .catch(fail);
}

export { newsList };
