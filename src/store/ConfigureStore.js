// // import { createStore, applyMiddleware, compose } from "redux";
// // import createSagaMiddleware from "redux-saga";
// import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import rootReducer from "./reducers/RootReducer";
import todoReducer from "./reducers/TodoReducer";
import errorReducer from "./reducers/ErrorReducer";
// import rootSaga from './sagas';
// import { watchTodos } from './sagas';

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


// const configureStore = () => {
// 	const sagaMiddleware = createSagaMiddleware();
  
// 	return {
// 	  ...createStore(
// 		rootReducer,
// 		composeEnhancers(applyMiddleware(sagaMiddleware))
// 	  ),
// 	  runSaga: sagaMiddleware.run(rootSaga)
// 	};
//   };
  
//   export default configureStore;

// // export default () => {
// // 	const store = createStore(
// // 		combineReducers({
// // 			todos: todoReducer,
// // 			error: errorReducer
// // 		})
// // 		, composeEnhancers(applyMiddleware(sagaMiddleware)) 
// // 	);
// // 	sagaMiddleware.run(watchTodos);
// // 	return store;
// // }

import { createStore, applyMiddleware, combineReducers, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./reducers/RootReducer";
import watchTodos from "./sagas";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const sagaMiddleware = createSagaMiddleware();


const configureStore = () => {
  const sagaMiddleware = createSagaMiddleware();

  return {
    ...createStore(
		combineReducers({
						todos: todoReducer,
						error: errorReducer
					}),
      composeEnhancers(applyMiddleware(sagaMiddleware))
    ),
    runSaga: sagaMiddleware.run(watchTodos)
  };
};
// export default () => {
// 	const store = createStore(
// 		combineReducers({
// 			todos: todoReducer,
// 			error: errorReducer
// 		})
// 		, composeEnhancers(applyMiddleware(sagaMiddleware)) ,
// 		sagaMiddleware.run(watchTodos)
// 	);
	
// 	return store;
// }

export default configureStore;

