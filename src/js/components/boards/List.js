import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../Home';

const mapStateToProps = state => {
	return { boards: state.boards };
};
class ConnectedList extends Component {
	render() {
		const { boards } = this.props.boards;
		return (
			<div>
				<ul className="list-group list-group-flush">
				{boards.map(el => (
					<li className="list-group-item" key={el.id}>
						<Link to={`board/${el.id}`}>{el.title}</Link>
					</li>
				))}
				</ul>
			</div>
		);
	}
}

const List = connect(mapStateToProps)(ConnectedList);
export default List;