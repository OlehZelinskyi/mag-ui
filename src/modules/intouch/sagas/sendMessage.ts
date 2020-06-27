import { takeLatest, put, call } from "redux-saga/effects";
import {
  SEND_MESSAGE,
  FORM_VALIDATION_CONFIG,
  SUCCESS,
  ERRORS,
  FORM_ERRORS_MESSAGES_CONFIG,
  LOADING,
} from "../constants";
import { AnyAction } from "redux";
import validateForm from "../tools/validateForm";
import { validationFailed, sendMessageResponse, toggleModal } from "../actions";
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
    const errorMessages: string[] = [];
    Object.entries(errors).map(([key, value]) => {
      if (!value) {
        errorMessages.push(FORM_ERRORS_MESSAGES_CONFIG[key]);
      }
    });

    yield put(validationFailed(errorMessages));
    yield put(toggleModal(ERRORS));
    return false;
  }
  yield put(toggleModal(LOADING));
  const response = yield call(sendMessageAPI, data);
  yield put(toggleModal(LOADING));

  if (response?.response) {
    yield put(sendMessageResponse(response));
    yield put(toggleModal(SUCCESS));
  } else {
    yield put(
      validationFailed([
        "Problems with sending the email to the address provided",
        "Please, check all input values.",
      ])
    );
    yield put(toggleModal(ERRORS));
  }
}
