import { call, put } from 'redux-saga/effects';
import {SUCCESS_FETCH_TODOS, ERROR_FETCH_TODOS, DELETE_TODOS_SUCCESS, DELETE_TODOS_ERROR} from '../actions/ActionTypes';

export function* fetchTodoSaga(action) {
    let todos = [
        {
            id: 1,
            description: "Task 1",
            isDone: false,
            task: 'Task 1'
        },
        {
            id: 2,
            description: "Task 2",
            isDone: true,
            task: 'Task 2'
        },
        {
            id: 3,
            description: "Task 3",
            isDone: false,
            task: 'Task 3'
        },
        {
            id: 4,
            description: "Task 4",
            isDone: false,
            task: 'Task 4'
        }
    ]
    try {
  
        yield put({ type: SUCCESS_FETCH_TODOS, todos: todos });
    }
    catch (error) {
        yield put({ type: ERROR_FETCH_TODOS, message: error || 'Fetch todo list failed' });
    }
}

export function* deleteTodoSaga(action) {
    const todos = [
        {
            id: 1,
            description: "Task 1",
            isDone: false,
            task: 'Task 1'
        },
        {
            id: 2,
            description: "Task 2",
            isDone: true,
            task: 'Task 2'
        },
        {
            id: 3,
            description: "Task 3",
            isDone: false,
            task: 'Task 3'
        },
        {
            id: 4,
            description: "Task 4",
            isDone: false,
            task: 'Task 4'
        }
    ]
	try {
		yield put({ type: DELETE_TODOS_SUCCESS});
		yield put({ type: SUCCESS_FETCH_TODOS, todos: todos });
	} catch (error) {
		yield put({ type: DELETE_TODOS_ERROR, message: error });
	}
};