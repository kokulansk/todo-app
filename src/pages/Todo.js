import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Grid,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions/TodoActions';

export class Todo extends Component {
	constructor(props) {
		super(props);
	}

	async componentWillMount() {
		await this.props.fetchTodos();
	}

	render() {
		return (
			<Grid container>
				<Grid item>
					<TodoList />
				</Grid>
			</Grid>
		);
	}
}

const mapDispatchToProps = (dispatch) => ({
	fetchTodos: () => dispatch(fetchTodos())
});


export default connect(null, mapDispatchToProps)(Todo);