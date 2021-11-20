import { apiInstance } from "./index.js";

const api = apiInstance();

async function sidoList(success, fail) {
  api.get("/address/sidos").then(success).catch(fail);
}

async function gugunList(sidoCode, success, fail) {
  api.get(`/address/sidos/${sidoCode}/guguns`).then(success).catch(fail);
}

async function dongList(sidoCode, gugunCode, success, fail) {
  api
    .get(`/address/sidos/${sidoCode}/guguns/${gugunCode}/dongs`)
    .then(success)
    .catch(fail);
}

export { sidoList, gugunList, dongList };
