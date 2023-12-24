import { combineReducers } from "redux";
import counterSlice from "./slice/counterSlice.jsx";

const rootReducer = combineReducers({
  counter: counterSlice,
});

export default rootReducer;
