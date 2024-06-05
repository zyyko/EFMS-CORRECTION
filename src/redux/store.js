import { createStore } from "redux";
import reducer from "./reducer";

const initialState = {
  calculations: [],
};

const store = createStore(reducer, initialState);
export default store;
