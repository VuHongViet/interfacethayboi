import { fork, take, call, put } from "redux-saga/effects";

import * as Type from "../constants/taks";
import { fetchData } from "../apis/Service";

function* fetchListData() {
  // yield take(Type.GETDATA);
  const response = yield call(fetchData);
  console.log(response);
  // if(response)
}

function* rootSaga() {
  yield fork(fetchListData);
}
export default rootSaga;
