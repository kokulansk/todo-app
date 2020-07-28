import {BEGIN_FETCH_TODOS, BEGIN_ADD_TODOS, BEGIN_EDIT_TODOS, DELETE_TODOS_BEGIN, BEGIN_FINISH_TODOS} from './ActionTypes';

export const fetchTodos = () => ({
    type: BEGIN_FETCH_TODOS
});

export const addTodo = (todo) => ({
    type: BEGIN_ADD_TODOS,
    todo
});

export const editTodo = (id, updatedTodo) => ({
    type: BEGIN_EDIT_TODOS,
    id,
    updatedTodo
});

export const deleteTodo = (id) => ({
    type: DELETE_TODOS_BEGIN,
    id
});

export const finishTodo = (id, todo) => ({
    type: BEGIN_FINISH_TODOS,
    id
});