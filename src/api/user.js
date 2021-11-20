import { apiInstance } from "./index.js";

const api = apiInstance();

async function login(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function join(user, success, fail) {
  api.post(`/user`, JSON.stringify(user)).then(success).catch(fail);
}

async function idCheck(id, success, fail) {
  await api.get(`/user/${id}`).then(success).catch(fail);
}

async function modify(user, success, fail) {
  api.defaults.headers["access-token"] = localStorage.getItem("access-token");
  api.put(`/user/${user.userId}`, JSON.stringify(user)).then(success).catch(fail);
}

function remove(id, success, fail) {
  api.defaults.headers["access-token"] = localStorage.getItem("access-token");
  api.delete(`/user/${id}`).then(success).catch(fail);
}

export { login, join, idCheck, modify, remove };
