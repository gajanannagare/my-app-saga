import { all } from "redux-saga/effects";
import usersSaga from "../components/User/sagaWatcher";

export default function* rootSaga() {
  yield all([usersSaga()]);
}
