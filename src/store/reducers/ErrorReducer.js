import { ERROR_FETCH_TODOS, ERROR_EDIT_TODOS, DELETE_TODOS_ERROR, ERROR_FINISH_TODOS } from '../actions/ActionTypes';

let initialState = {
	message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case ERROR_FETCH_TODOS:
            return {
                message: action.message
            };

        case ERROR_FETCH_TODOS:
            return {
                message: action.message
            };

        case ERROR_EDIT_TODOS:
            return {
                message: action.message
            };

        case DELETE_TODOS_ERROR:
            return {
                message: action.message
            };

        case ERROR_FINISH_TODOS:
            return {
                message: action.message
            };
        default:
            return state;

    }
};