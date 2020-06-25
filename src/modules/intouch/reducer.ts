import { AnyAction } from "redux";
import { SEND_MESSAGE_RESPONSE } from "./constants";

export interface State {
  response: any;
}

const initialState: State = {
  response: null,
};

const messageReducer = (state: State = initialState, action: AnyAction) => {
  switch (action.type) {
    case SEND_MESSAGE_RESPONSE:
      return { ...state, response: action.payload };
    default:
      return state;
  }
};

export default messageReducer;
