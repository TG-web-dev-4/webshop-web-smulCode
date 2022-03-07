import { combineReducers } from "redux";
import productsReducer from "./productsReducer";
import counterReducer from "./counterReducer";
import shoppingCartReducer from "./shoppingCartReducer";

const allReducers = combineReducers({
  productsReducer,
  counterReducer,
  shoppingCartReducer,
});

export default allReducers;
