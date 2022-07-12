import { takeEvery, takeLatest, put, all } from "redux-saga/effects";

const delay = (ms: number) =>
  new Promise<any>((resolve) => setTimeout(resolve, ms));

function* subAfterAdd(action: any) {
  yield delay(1000);

  yield put({ type: "sub" });
}

function* helloSaga() {
  console.log("hello saga");
}

function* mySaga() {
  yield takeEvery("add", subAfterAdd);
}

function* rootSaga() {
  yield all([helloSaga(), mySaga()]);
}

export default rootSaga;
