import { apiInstance } from "./index.js";

const api = apiInstance();

async function houseList(dongCode, buildYear, success, fail) {
  return api
    .get(`housedeal/apts/dongs/${dongCode}?buildYear=${buildYear}`)
    .then(success)
    .catch(fail);
}

async function houseDealList(aptCode, success, fail) {
  return api.get(`housedeal/apts/${aptCode}`).then(success).catch(fail);
}

async function bookmarkedHouseList(userId, success, fail) {
  return api.get(`housedeal/users/${userId}/apts`).then(success).catch(fail);
}

export { houseList, houseDealList, bookmarkedHouseList };
