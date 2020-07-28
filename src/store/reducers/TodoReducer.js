import actions from '../actions/ActionTypes';

let initialState = {
    todos: [],
    isLoaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.SUCCESS_FETCH_TODOS:
            return {
                isLoaded: true,
                todos: action.todos
            };

        case actions.DELETE_TODOS:
            return {
                ...state,
                todos: state.todos.filter((todo) => { return todo.id != action.id })
            };

        case actions.SUCCESS_EDIT_TODOS:
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