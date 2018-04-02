import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addCardList } from "../../actions/card-list";

const mapStateToProps = state => {
	return { boards: state.boards };
};

const mapDispatchToProps = dispatch => {
	return {
		addCardList: listItem => dispatch(addCardList(listItem))
	};
};

class ConnectedAddCardList extends Component {
	constructor(props) {
		super(props);
		this.state = {};
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.refs.list_title.value === '') {

		} else {

			const { boards } = this.props;
			const boardId = this.props.boardId;

			let listId = uuid.v4();
			let title = this.refs.list_title.value;

			this.props.addCardList({ id: listId, boardId: boardId, title: title, cardItems: [] });
			this.refs.list_title.value = '';
		}
	}

	render() {
		return (
			<div className="desk" draggable="true">
				<form onSubmit={this.handleSubmit}>
					<div className="form-group">
						<input
							className="form-control"
							type="text"
							ref="list_title"
							/*onChange={this.handleChange}
							value={this.state.text}*/
							placeholder="Add List"
							/>
						</div>
					
						<button className="btn btn-sm btn-success">Save</button>
				</form>
			</div>
		);
	}
}

const AddCardList = connect(mapStateToProps, mapDispatchToProps)(ConnectedAddCardList);
export default AddCardList;