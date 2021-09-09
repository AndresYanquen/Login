import { createStore } from "redux";

const initialState = {
  name: "",
  password: "",
  nameshop: "",
  domain: "",
  url: "",
};

const reducerSave = (state = initialState, action) => {
  return state;
};

export default createStore(reducerSave);
