import { AnyAction } from "redux";
import {
  SEND_MESSAGE_RESPONSE,
  VALIDATION_FAILED,
  TOGGLE_MODAL,
  SUCCESS,
  ERRORS,
  LOADING,
} from "./constants";
import { B } from "./sagas/sendMessage";

export interface State {
  response: any;
  errors: B;
  modal: B;
}

const initialState: State = {
  response: null,
  errors: null,
  modal: {
    [SUCCESS]: false,
    [ERRORS]: false,
    [LOADING]: false,
  },
};

const messageReducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEND_MESSAGE_RESPONSE:
      return { ...state, response: action.payload };
    case VALIDATION_FAILED:
      return { ...state, errors: action.payload };
    case TOGGLE_MODAL:
      return {
        ...state,
        modal: {
          ...state.modal,
          [action.payload]: !state.modal[action.payload],
        },
      };
    default:
      return state;
  }
};

export default messageReducer;
