import { takeEvery } from 'redux-saga/effects';
import { fetchTodoSaga, deleteTodoSaga } from './TodoSaga';
import actions from '../actions/ActionTypes';

export default function* watchTodos() {
    yield takeEvery(actions.BEGIN_FETCH_TODOS, fetchTodoSaga);
    yield takeEvery(actions.DELETE_TODOS_BEGIN, deleteTodoSaga);
}