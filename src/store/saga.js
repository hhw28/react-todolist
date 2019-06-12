import { takeEvery, put } from "@redux-saga/core/effects";
import { GET_INIT_LIST } from "./actionTypes";
import { initListAction } from "./actionCreator";
import axios from "axios";

function* getInitList() {
  try {
    const res = yield axios.get("/list");
    const action = initListAction(res.data);
    yield put(action);
  } catch (e) {
    console.log("getInitList 请求失败", e);
  }
}

function* mySaga() {
  yield takeEvery(GET_INIT_LIST, getInitList);
}

export default mySaga;
