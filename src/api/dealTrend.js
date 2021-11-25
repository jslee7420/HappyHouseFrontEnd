import { apiInstance } from "./index.js";

const api = apiInstance();

async function dealTrendList(success, fail) {
  api.get("/dealtrend").then(success).catch(fail);
}

export { dealTrendList };