import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
	Grid
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import TodoList from '../components/TodoList';
import { connect } from 'react-redux';
import { fetchTodos } from '../store/actions/TodoActions';

const styles = theme => ({
	root: {
		flexGrow: 1,
		backgroundColor: '#eee',
		height: '100vh'
	},

	control: {
		padding: theme.spacing.unit * 2
	},
	paper: {
		height: '100px',
		width: '200px',
		padding: theme.spacing.unit * 3
	}
});

export class Todo extends Component {
	constructor() {
		super();
	}

	async componentDidMount() {
		// console.log(this.props)
		await this.props.fetchTodos;
	}

	render() {
		return (
			<Grid container spacing={16}>
				<Grid item xs={12}>
					<TodoList />
				</Grid>
			</Grid>
		);
	}
}

// const mapDispatchToProps = dispatch => {
// 	return {
// 		fetchTodos: () => dispatch(fetchTodos())
// 	}
//   }

  const mapDispatchToProps = {
	fetchTodos
  };
  


// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		// fetchTodos() {
// 		// 	const action = fetchTodos()
// 		// 	dispatch(action)
// 		//   }
// 		fetchTodos: () => dispatch(fetchTodos()),
// 		dispatch
// 	};
//   };
  
export default connect(null, mapDispatchToProps)(withStyles(styles)(Todo));