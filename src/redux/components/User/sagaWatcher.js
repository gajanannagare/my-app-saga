import { getApiCall } from "../../core/api";
import { GET_USERS, GET_USERS_ASYNC } from "./actionTypes";
import { takeEvery, call, put } from "redux-saga/effects";

function* getUsers() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const result = yield call(getApiCall, url);
  yield put({
    type: GET_USERS_ASYNC,
    payload: result,
  });
}

export default function* usersSaga() {
  yield takeEvery(GET_USERS, getUsers);
}
