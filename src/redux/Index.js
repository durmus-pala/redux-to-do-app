import { combineReducers } from "redux";
import todoReducer from "./reducer/Reducer";

const rootReducer = combineReducers({
  todoReducer,
});

export default rootReducer;
