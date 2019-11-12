import { fork, take, call, put } from "redux-saga/effects";
import { fetchListTaskSuccess, fetchListTaskFailed } from "./../actions/taks";
import * as Type from "../constants/taks";
import { fetchData } from "../apis/Service";

function* fetchListData() {
  while (true) {
    const action = yield take(Type.FETCH_TASK);
    const response = yield call(fetchData);
    const { status, data } = response;
    if (status == 200) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
  }
}
function* actionClick() {
  while (true) {
    yield take(Type.CLICK);
    yield;
  }
}

function* rootSaga() {
  yield fork(fetchListData);
  yield fork(actionClick);
}
export default rootSaga;
