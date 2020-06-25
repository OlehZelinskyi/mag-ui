import { AnyAction } from "redux";
import { SEND_MESSAGE_RESPONSE, VALIDATION_FAILED } from "./constants";
import { B } from "./sagas/sendMessage";

export interface State {
  response: any;
  errors: B;
}

const initialState: State = {
  response: null,
  errors: null,
};

const messageReducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEND_MESSAGE_RESPONSE:
      return { ...state, response: action.payload };
    case VALIDATION_FAILED:
      return { ...state, errors: action.payload };
    default:
      return state;
  }
};

export default messageReducer;
