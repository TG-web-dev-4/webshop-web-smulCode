import { createStore } from "redux";
import allReducers from "./reducers";
import { Products } from "./data";
import { devToolsEnhancer } from "@redux-devtools/extension";

export const store = createStore(
  allReducers,
  { productsReducer: Products },
  devToolsEnhancer()
);
