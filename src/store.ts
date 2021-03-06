import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { B } from "./modules/intouch/sagas/sendMessage";
import { SUCCESS, ERRORS, LOADING } from "./modules/intouch/constants";

export interface PreloadedState {
  messageReducer: {
    response: any;
    errors: B;
    modal: B;
    mobileNavOpen: boolean;
  };
}

const preloadedState: PreloadedState = {
  messageReducer: {
    response: null,
    errors: null,
    modal: {
      [SUCCESS]: false,
      [ERRORS]: false,
      [LOADING]: false,
    },
    mobileNavOpen: false,
  },
};

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
