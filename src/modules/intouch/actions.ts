import { SEND_MESSAGE } from "./constants";
import { UserData } from "./typings";

export const sendMessage = (userData: UserData) => ({
  type: SEND_MESSAGE,
  payload: userData,
});

export const sendMessageResponse = (response: Response) => ({
  type: SEND_MESSAGE,
  payload: response,
});
