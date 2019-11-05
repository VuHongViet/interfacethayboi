import { combineReducers } from "redux";
import taskeReducer from "./taks.js";
const allReducers = combineReducers({
  taks: taskeReducer
});
export default allReducers;
