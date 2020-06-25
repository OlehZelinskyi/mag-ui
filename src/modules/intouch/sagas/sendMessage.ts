import { takeLatest } from "redux-saga/effects";
import { SEND_MESSAGE } from "../constants";
import { AnyAction } from "redux";

export function* watchSendMessage() {
  yield takeLatest(SEND_MESSAGE, handleSendMessage);
}

export function* handleSendMessage(action: AnyAction) {
  console.log(action);
}
