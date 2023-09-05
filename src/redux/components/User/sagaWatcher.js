import {
  deleteApiCall,
  getApiCall,
  postApiCall,
  updateApiCall,
} from "../../core/api";
import {
  ADD_USER,
  DELETE_USER,
  GET_USERS,
  GET_USERS_ASYNC,
  UPDATE_USER,
} from "./actionTypes";
import { takeEvery, call, put } from "redux-saga/effects";
import { getUsers } from "./actions";

function* getUser() {
  const url = "http://localhost:4000/users";
  const result = yield call(getApiCall, url);
  yield put({
    type: GET_USERS_ASYNC,
    payload: result,
  });
}

function* addUser(param) {
  const url = "http://localhost:4000/users";
  yield call(postApiCall, url, param.payload);
}

function* deleteUser(param) {
  const url = `http://localhost:4000/users/${param.payload}`;
  yield call(deleteApiCall, url);
  yield put(getUsers());
}

function* updateUser(param) {
  const url = `http://localhost:4000/users/${param.payload.id}`;
  const { name, username, phone, website } = param.payload;
  yield call(updateApiCall, url, {
    name,
    username,
    phone,
    website,
  });
}

export default function* usersSaga() {
  yield takeEvery(GET_USERS, getUser);
  yield takeEvery(ADD_USER, addUser);
  yield takeEvery(DELETE_USER, deleteUser);
  yield takeEvery(UPDATE_USER, updateUser);
}
