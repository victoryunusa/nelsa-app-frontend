import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { getProducts } from "./features/products/productSlice";
import { getTotals } from "./features/cart/cartSlice";

document.title = "Foodable";
store.dispatch(getProducts());
store.dispatch(getTotals());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
