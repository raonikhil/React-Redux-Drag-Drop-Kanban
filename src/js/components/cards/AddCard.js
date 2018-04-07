import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addCard } from "../../actions/cards";

const mapDispatchToProps = dispatch => {
	return {
		addCard: (cardItem) => dispatch(addCard(cardItem))
	};
};

class ConnectedAddCard extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(e) {
		e.preventDefault();
		if(this.refs.card_title.value === '') {

		} else {
			const boardId = this.props.listItem.boardId;
			let cardId = uuid.v4();
			let listId = this.props.listItem.id;
			let title = this.refs.card_title.value;
			
			this.props.addCard({
				id: cardId,
				listId: listId,
				boardId: boardId,
				title: title
			});
			this.refs.card_title.value = '';
		}
	}

	render() {
		return (
			<form onSubmit={this.handleSubmit.bind(this)}>
				<div className="form-group">
					<input 
						type="hidden"
						ref="list_id"
						value={this.props.listItem.id}
					/>
					<input
						className="form-control"
						type="text"
						ref="card_title"
						placeholder="Add Card"
						/>
				 </div>
				
				 <button className="btn btn-sm btn-success">Save</button>
			</form>
		);
	}
}

const AddCard = connect(null, mapDispatchToProps)(ConnectedAddCard);
export default AddCard;
