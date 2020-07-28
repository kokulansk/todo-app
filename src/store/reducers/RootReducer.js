import { combineReducers } from "redux";

//reducers
import errorReducer from "./ErrorReducer";
import todoReducer from "./TodoReducer";

const appReducer = combineReducers({
    error: errorReducer,
    todos: todoReducer
});

const rootReducer = (state, action) => {  
  return appReducer(state, action);
};

export default rootReducer;
