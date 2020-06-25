import { createStore, applyMiddleware } from "redux";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from "redux-saga";

export interface PreloadedState {
  messageReducer: {
    response: any;
  };
}

const preloadedState: PreloadedState = {
  messageReducer: {
    response: null,
  },
};

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools({
  // Specify name here, actionsBlacklist, actionsCreators and other options if needed
});

export default createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware))
);
