// import { takeEvery } from 'redux-saga/effects';
// import { fetchTodoSaga, deleteTodoSaga } from './TodoSaga';
// import {BEGIN_FETCH_TODOS, DELETE_TODOS_BEGIN} from '../actions/ActionTypes';

// // export function* watchTodos() {
// //     yield takeEvery(BEGIN_FETCH_TODOS, fetchTodoSaga);
// //     yield takeEvery(DELETE_TODOS_BEGIN, deleteTodoSaga);
// // }

import { fork } from "redux-saga/effects";
import watchTodos from "./watchers";

export default function* startForman() {
  yield fork(watchTodos);
}

// import { takeEvery, takeLatest } from 'redux-saga/effects';
// import { fetchTodoSaga, deleteTodoSaga } from './TodoSaga';
// import {BEGIN_FETCH_TODOS, DELETE_TODOS_BEGIN, BEGIN_ADD_TODOS, BEGIN_EDIT_TODOS, BEGIN_FINISH_TODOS} from '../actions/ActionTypes';

// export function* watchTodos() {
//     yield takeEvery(BEGIN_FETCH_TODOS, fetchTodoSaga);
//     yield takeEvery(DELETE_TODOS_BEGIN, deleteTodoSaga);
//     yield takeEvery(BEGIN_ADD_TODOS, deleteTodoSaga);
//     yield takeEvery(BEGIN_EDIT_TODOS, deleteTodoSaga);
//     yield takeEvery(BEGIN_FINISH_TODOS, deleteTodoSaga);
// }