import {
  SEND_MESSAGE,
  VALIDATION_FAILED,
  SEND_MESSAGE_RESPONSE,
  TOGGLE_MODAL,
} from "./constants";
import { UserData } from "./typings";
import { B } from "./sagas/sendMessage";

export const sendMessage = (userData: UserData) => ({
  type: SEND_MESSAGE,
  payload: userData,
});

export const sendMessageResponse = (response: Response) => ({
  type: SEND_MESSAGE_RESPONSE,
  payload: response,
});

export const validationFailed = (errors: string[]) => ({
  type: VALIDATION_FAILED,
  payload: errors,
});

export const toggleModal = (modalType: string) => ({
  type: TOGGLE_MODAL,
  payload: modalType,
});
