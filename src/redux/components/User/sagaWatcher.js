import { getApiCall, postApiCall } from "../../core/api";
import { ADD_USER, GET_USERS, GET_USERS_ASYNC } from "./actionTypes";
import { takeEvery, call, put } from "redux-saga/effects";

function* getUsers() {
  const url = "http://localhost:4000/users";
  const result = yield call(getApiCall, url);
  yield put({
    type: GET_USERS_ASYNC,
    payload: result,
  });
}

function* addUser(param) {
  const url = "http://localhost:4000/users";
  const result = yield call(postApiCall, url, param.payload);
  console.log(result);
}

export default function* usersSaga() {
  yield takeEvery(GET_USERS, getUsers);
  yield takeEvery(ADD_USER, addUser);
}
