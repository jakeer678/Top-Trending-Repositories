// src/features/index.js
import { combineReducers } from "redux";
import reposReducer from "./repos/reposSlice";

const rootReducer = combineReducers({
  repos: reposReducer,
});

export default rootReducer;
