import {SUCCESS_FETCH_TODOS, DELETE_TODOS_SUCCESS, SUCCESS_EDIT_TODOS} from '../actions/ActionTypes';

let initialState = {
    todos: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SUCCESS_FETCH_TODOS:
            return {
                ...state,
                todos: action.todos
            };

        case DELETE_TODOS_SUCCESS:
            return {
                ...state,
                todos: state.todos.filter((todo) => { return todo.id != action.id })
            };

        case SUCCESS_EDIT_TODOS:
            return {
                ...state,
                todos: state.map((todo) => {
                    if (todo.id === action.id) {
                        return {
                            ...todo,
                            ...action.todo
                        }
                    }
                    return todo;
                })
            };

        default:
            return state;
    }
};