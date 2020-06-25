import * as React from "react";
import * as ReactDOM from "react-dom";
import "./styles.scss";
import Main from "./main";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById("container")
);
