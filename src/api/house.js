import { apiInstance } from "./index.js";

const api = apiInstance();

async function houseList(dongCode, success, fail) {
  api.get(`housedeal/apts/dongs/${dongCode}`).then(success).catch(fail);
}

export { houseList };