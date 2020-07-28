import React from 'react';
import { Grid, List } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { TodoListItem } from './TodoListItem';
import { connect } from 'react-redux';

const styles = theme => ({
    listRoot: {
        flexGrow: 1,
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    }
});

export const TodoList = ({ todos }) => (
    <Grid container justify="center">
        <List >
            {todos.map(todo => 
                <TodoListItem key={todo.id} todo={todo} />
            )}
        </List>
    </Grid>
);

const mapStateToProps = (state) => ({
    todos: state.todos.todos
});

export default connect(mapStateToProps, null)(withStyles(styles)(TodoList));