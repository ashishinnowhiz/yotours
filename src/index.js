import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import { renderRoutes } from "react-router-config";
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import reducers from "./store/reducers";
import Routes from "./route/Route";
import ConnectedIntlProvider from './containers/ConnectedIntlProvider/ConnectedIntlProvider';
const axiosInstance = axios.create({
  baseURL: 'https://yotours-backend.azurewebsites.net/api'
});
// const composeEnhancers =
//   process.env.NODE_ENV === "development"
//     ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
//     : null || compose;

const store = createStore(reducers, window.initialState, applyMiddleware(thunk.withExtraArgument(axiosInstance)));

ReactDOM.render(
  <Provider store={store}>
    <ConnectedIntlProvider>
    <BrowserRouter>
      <>{renderRoutes(Routes)}</>
    </BrowserRouter>{" "}
    </ConnectedIntlProvider>
  </Provider>,
  document.getElementById("root")
);
