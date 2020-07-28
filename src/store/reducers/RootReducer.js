import { combineReducers } from "redux";

import * as types from "../actions/ActionTypes";

//reducers
import errorReducer from "./ErrorReducer";
import todoReducer from "./TodoReducer";

const appReducer = combineReducers({
    error: errorReducer,
    todos: todoReducer
});

const rootReducer = (state, action) => {
    // state = null;
  
  return appReducer(state, action);
};

export default rootReducer;
