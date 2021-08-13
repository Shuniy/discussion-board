import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { compose, applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { logger } from "redux-logger";
import rootReducer from "./reducers";
import rootSaga from './sagas/index';
import createSagaMiddleware from "redux-saga";

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk, logger, sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

// console.log(rootReducer)
// console.log(store);

ReactDOM.render(
  <BrowserRouter>
    <Provider store = {store} >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
