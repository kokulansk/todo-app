import actions from './ActionTypes';

export const fetchTodos = () => ({
    type: actions.BEGIN_FETCH_TODOS
});

export const addTodo = (todo) => ({
    type: actions.BEGIN_ADD_TODOS,
    todo
});

export const editTodo = (id, updatedTodo) => ({
    type: actions.BEGIN_EDIT_TODOS,
    id,
    updatedTodo
});

export const deleteTodo = (id) => ({
    type: actions.DELETE_TODOS_BEGIN,
    id
});

export const finishTodo = (id, todo) => ({
    type: actions.BEGIN_FINISH_TODOS,
    id
});