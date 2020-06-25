import { takeLatest, put, call } from "redux-saga/effects";
import { SEND_MESSAGE, FORM_VALIDATION_CONFIG } from "../constants";
import { AnyAction } from "redux";
import validateForm from "../tools/validateForm";
import { validationFailed, sendMessageResponse } from "../actions";
import sendMessageAPI from "../api/sendMessageAPI";

export interface B {
  [key: string]: boolean;
}

export function* watchSendMessage() {
  yield takeLatest(SEND_MESSAGE, handleSendMessage);
}

export function* handleSendMessage(action: AnyAction) {
  const { payload: data } = action;

  const errors: B = validateForm(data, FORM_VALIDATION_CONFIG);

  const hasErrors = Object.values(errors).some((field: boolean) => !field);

  if (hasErrors) {
    yield put(validationFailed(errors));
    return false;
  }

  const response = yield call(sendMessageAPI, data);
  yield put(sendMessageResponse(response));
}
