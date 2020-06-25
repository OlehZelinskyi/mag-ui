import { fork } from "redux-saga/effects";
import { watchSendMessage } from "./modules/intouch/sagas/sendMessage";

export default function* rootSaga() {
  yield fork(watchSendMessage);
}
