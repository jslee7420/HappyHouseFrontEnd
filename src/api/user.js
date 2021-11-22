import { apiInstance } from "./index.js";

const api = apiInstance();

async function userLogin(user, success, fail) {
  await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
}

async function userJoin(user, success, fail) {
  api.post(`/user`, JSON.stringify(user)).then(success).catch(fail);
}

async function userIdCheck(id, success, fail) {
  await api.get(`/user/${id}`).then(success).catch(fail);
}

async function userModify(user, success, fail) {
  api.defaults.headers["access-token"] = localStorage.getItem("access-token");
  api.put(`/user/${user.userId}`, JSON.stringify(user)).then(success).catch(fail);
}

function userRemove(id, success, fail) {
  api.defaults.headers["access-token"] = localStorage.getItem("access-token");
  api.delete(`/user/${id}`).then(success).catch(fail);
}

export { userLogin, userJoin, userIdCheck, userModify, userRemove };
