import preline from "preline";
import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { getProducts } from "./features/products/productSlice";
import { getTotals } from "./features/cart/cartSlice";
import { getAddresses } from "./features/address/addressSlice";
import { getCategories } from "./features/categories/categoriesSlice";

document.title = "Nelsa - Africa's leading B2B fresh produce platform";
store.dispatch(getProducts());
store.dispatch(getAddresses());
store.dispatch(getTotals());
store.dispatch(getCategories());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
