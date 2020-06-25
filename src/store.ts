import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./rootSaga";
import { B } from "./modules/intouch/sagas/sendMessage";

export interface PreloadedState {
  messageReducer: {
    response: any;
    errors: B;
  };
}

const preloadedState: PreloadedState = {
  messageReducer: {
    response: null,
    errors: null,
  },
};

const sagaMiddleware = createSagaMiddleware();

export default createStore(
  rootReducer,
  preloadedState,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
