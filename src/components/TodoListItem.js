import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText, Button } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { deleteTodo, finishTodo } from '../store/actions/TodoActions';
import { withRouter } from 'react-router-dom';

export const TodoListItem = ({ todo }) => (
    <ListItem
        key={todo.id}>
        <ListItemText primary={`${todo.id} .${todo.task}`} />
        {todo.isDone ? 'Done' : <Button variant="contained" color="primary" onClick={() => finishTodo(todo.id)}>Mark as done</Button>}
        <Button onClick={() => deleteTodo(todo.id)} variant="contained" color="secondary">Delete</Button>
    </ListItem>
)

const mapDispatchToProps = dispatch => {
    return {
        deleteTodo: (id) => dispatch(deleteTodo(id)),
        finishTodo: (id) => dispatch(finishTodo(id))
    }
}

const mapStateToProps = (state) => {
    return {
     
    }
  }


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(TodoListItem));